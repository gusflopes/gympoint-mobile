import React from 'react';
import { Text } from 'react-native';

import CheckInCard from '~/components/CheckInCard';

import { Container, CheckInButton, Titulo } from './styles';

export default function CheckIn() {
  return (
    <Container>
      <Titulo>TITULO</Titulo>
      <CheckInButton>Novo check-in</CheckInButton>

      <CheckInCard />
      <CheckInCard />
      <CheckInCard />
      <CheckInCard />
    </Container>
  );
}
