import React from 'react';

import { Container, Card, Title, TextMessage } from './styles';

export default function DetailsHelpOrder() {
  return (
    <Container>
      <Title>GYMPOINT</Title>
      <Card>
        <Title>PERGUNTA</Title>
        <TextMessage>
          Olá pessoal da academia, gostaria de saber se quando acordar devo
          ingerir batata doce e frango logo de primeira, preparar as marmitas e
          lotar a geladeira? Dou um pico de insulina e jogo o hipercalórico?
        </TextMessage>
        <Title>RESPOSTA</Title>
        <TextMessage>
          Opa, isso aí, duas em duas horas, não deixa pra depois, um monstro
          treina como um, come como dois.
        </TextMessage>
      </Card>
    </Container>
  );
}
