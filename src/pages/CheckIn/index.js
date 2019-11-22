import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import HeaderTitle from '~/components/HeaderTitle';
import CheckInCard from '~/components/CheckInCard';

import { Header, Container, CheckInButton, Titulo } from './styles';

export default function CheckIn() {
  return (
    <Header>
      <HeaderTitle />
      <Container>
        <CheckInButton>Novo check-in</CheckInButton>

        <CheckInCard />
        <CheckInCard />
        <CheckInCard />
        <CheckInCard />
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
