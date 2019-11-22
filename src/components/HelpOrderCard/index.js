import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, MessageHeader, AnswerStatus, TextContent } from './styles';

export default function HelpOrderCard({ handleNavigate, value }) {
  const { answer_at, question, answer } = value;
  return (
    <Container>
      <MessageHeader>
        <AnswerStatus onPress={handleNavigate}>
          <Icon
            name="check-circle"
            size={16}
            color={answer_at ? '#42cb59' : '#999999'}
          />
          <Text style={answer_at ? { color: '#42cb59' } : { color: '#999999' }}>
            {answer_at ? 'Respondido' : 'Sem resposta'}{' '}
          </Text>
        </AnswerStatus>
        <Text style={{ color: '#666666' }}>{answer_at}</Text>
      </MessageHeader>

      <TextContent>{question}</TextContent>
    </Container>
  );
}
