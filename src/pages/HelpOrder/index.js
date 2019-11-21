import React from 'react';
import { Text } from 'react-native';

import { Container, Titulo, HelpButton } from './styles';
import HelpOrderCard from '~/components/HelpOrderCard';

export default function HelpOrder() {
  return (
    <Container>
      <Titulo>GYMPOINT - HELP ORDER</Titulo>
      <HelpButton>Novo pedido de auxílio</HelpButton>
      <HelpOrderCard />
    </Container>
  );
}
