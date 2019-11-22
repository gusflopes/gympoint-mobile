import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container, HelpButton } from './styles';
import HelpOrderCard from '~/components/HelpOrderCard';

import api from '~/services/api';

export default function HelpOrder({ navigation }) {
  const [helpOrders, setHelpOrders] = useState([]);
  const [helpOrder, setHelpOrder] = useState({});
  const studentId = useSelector(state => state.student.student);

  useEffect(() => {
    async function loadData() {
      const response = await api.get(`/students/${studentId}/help-orders`);

      setHelpOrders(response.data.help_order);
    }
    loadData();
  }, [studentId]);

  function handleNavigate(item) {
    navigation.navigate('DetailsHelpOrder');
  }

  return (
    <Container>
      <HelpButton onPress={() => navigation.navigate('NewHelpOrder')}>
        Novo pedido de auxílio
      </HelpButton>
      {helpOrders.map(item => (
        <HelpOrderCard
          key={item.id}
          value={item}
          handleNavigate={() => handleNavigate(item)}
        />
      ))}
    </Container>
  );
}
