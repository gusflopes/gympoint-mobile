import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Card, Title, TextMessage } from './styles';

export default function DetailsHelpOrder() {
  return (
    <Container>
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

DetailsHelpOrder.navigationOptions = ({ navigation }) => ({
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('HelpOrder');
      }}
    >
      <Icon name="chevron-left" size={50} color="#EE4E62" />
    </TouchableOpacity>
  ),
});
