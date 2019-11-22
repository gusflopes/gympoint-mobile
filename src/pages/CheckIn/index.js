import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';

import HeaderTitle from '~/components/HeaderTitle';
import CheckInCard from '~/components/CheckInCard';

import { Header, Container, CheckInButton } from './styles';

import api from '~/services/api';

export default function CheckIn() {
  const [checkIns, setCheckIns] = useState([]);
  const studentId = useSelector(state => state.student.student);

  useEffect(() => {
    async function loadData() {
      const response = await api.get(`students/${studentId}/checkins`, {
        params: {
          week: true,
        },
      });
      const { checkin } = response.data;

      const data = checkin.map(c => ({
        ...c,
        timeDistance: formatDistance(parseISO(c.createdAt), new Date(), {
          addSuffix: true,
          locale: pt,
        }),
      }));

      setCheckIns(data);
    }

    loadData();
  }, []); //eslint-disable-line

  useEffect(() => {
    Alert.alert('message', JSON.stringify(checkIns));
  }, [checkIns]);

  async function handleCheckIn() {
    const response = await api.post(`/students/${studentId}/checkins`);
    const { checkin } = response.data;
    // Alert.alert('Mensagem', JSON.stringify(checkin));
    const data = {
      ...checkin,
      timeDistance: formatDistance(parseISO(checkin.createdAt), new Date(), {
        addSuffix: true,
        locale: pt,
      }),
    };

    Alert.alert('Novo objeto', 'Agora vai');

    return setCheckIns(data);

    const { error } = err.response.data;
    Alert.alert('Limite de Check-In', error);
  }

  return (
    <Header>
      <HeaderTitle />
      <Container>
        <CheckInButton onPress={handleCheckIn}>Novo check-in</CheckInButton>
        {checkIns.map(checkIn => (
          <CheckInCard key={checkIn.id} date={checkIn.timeDistance} />
        ))}
      </Container>
    </Header>
  );
}

CheckIn.navigationOptions = ({ navigation }) => ({
  header: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('HelpOrder');
      }}
    >
      <Icon name="chevron-left" size={50} color="#EE4E62" />
    </TouchableOpacity>
  ),
});
