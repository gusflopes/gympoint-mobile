import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, MessageHeader, AnswerStatus, TextContent } from './styles';

export default function HelpOrderCard(props) {
  const { handleNavigate } = props;
  return (
    <>
      <Container>
        <MessageHeader>
          <AnswerStatus onPress={handleNavigate}>
            <Icon name="check-circle" size={16} color="#999999" />
            <Text style={{ color: '#999999' }}> Sem resposta </Text>
          </AnswerStatus>
          <Text style={{ color: '#666666' }}>Hoje às 14:00h</Text>
        </MessageHeader>
        <TextContent>
          Olá pessoal da academia, gostaria de saber se quando acordar devo
          ingerir batata doce e frango logo de primeira, preparar as...
        </TextContent>
      </Container>
      <Container>
        <MessageHeader>
          <AnswerStatus onPress={handleNavigate}>
            <Icon name="check-circle" size={16} color="#42cb59" />
            <Text style={{ color: '#42cb59' }}> Respondido </Text>
          </AnswerStatus>
          <Text style={{ color: '#666666' }}>Hoje às 14:00h</Text>
        </MessageHeader>

        <TextContent>
          Olá pessoal da academia, gostaria de saber se quando acordar devo
          ingerir batata doce e frango logo de primeira, preparar as...
        </TextContent>
      </Container>
    </>
  );
}
