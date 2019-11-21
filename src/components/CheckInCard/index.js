import React from 'react';
import {} from 'react-native';

import { Container, CheckInText, TimeText } from './styles';

export default function CheckInCard() {
  return (
    <Container>
      <CheckInText>Check-in #7</CheckInText>
      <TimeText>Hoje às 14:00h</TimeText>
    </Container>
  );
}
