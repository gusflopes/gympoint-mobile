import React from 'react';
import { Text } from 'react-native';

import { Container, HelpButton } from './styles';
import HelpOrderCard from '~/components/HelpOrderCard';

export default function HelpOrder({ navigation }) {
  function handleNavigate() {
    navigation.navigate('DetailsHelpOrder');
  }

  return (
    <Container>
      <HelpButton onPress={() => navigation.navigate('NewHelpOrder')}>
        Novo pedido de auxílio
      </HelpButton>
      <HelpOrderCard handleNavigate={handleNavigate} />
    </Container>
  );
}
