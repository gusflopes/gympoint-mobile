import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  MessageHeader,
  AnswerStatus,
  MessageContent,
} from './styles';

export default function HelpOrderCard() {
  return (
    <>
      <Container>
        <MessageHeader>
          <AnswerStatus>
            <Icon name="check-circle" size={16} color="#999999" />
            <Text> Sem resposta </Text>
          </AnswerStatus>
          <Text>Hoje às 14:00h</Text>
        </MessageHeader>
        <Text>---</Text>
        <MessageContent>
          <Text>
            Olá pessoal da academia, gostaria de saber se quando acordar devo
            ingerir batata doce e frango logo de primeira, preparar as...
          </Text>
        </MessageContent>
      </Container>
      <Container>
        <Icon name="check-circle" size={16} color="#42cb59" />
        <Text color="#42cb59"> Respondido </Text>
        <Text>Hoje às 14:00h</Text>
        <Text>---</Text>
        <Text>
          Olá pessoal da academia, gostaria de saber se quando acordar devo
          ingerir batata doce e frango logo de primeira, preparar as...
        </Text>
      </Container>
    </>
  );
}
