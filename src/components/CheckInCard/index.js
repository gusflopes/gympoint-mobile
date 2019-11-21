import React from 'react';
import {} from 'react-native';

import { Container, Left, Right, CheckInText, TimeText } from './styles';

export default function CheckInCard() {
  return (
    <Container>
      <Left>
        <CheckInText>Check-in #7</CheckInText>
      </Left>
      <Right>
        <TimeText>Hoje às 14:00h</TimeText>
      </Right>
    </Container>
  );
}
