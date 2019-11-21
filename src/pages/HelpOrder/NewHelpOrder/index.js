import React from 'react';
import { Text } from 'react-native';

import { Container, FormInput, HelpButton } from './styles';

export default function NewHelpOrder() {
  return (
    <Container>
      <Text> Título </Text>
      <FormInput />
      <HelpButton>Enviar pedido</HelpButton>
    </Container>
  );
}
