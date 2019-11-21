import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, FormInput, HelpButton } from './styles';

export default function NewHelpOrder({ navigation }) {
  return (
    <Container>
      <Text> Título </Text>
      <FormInput />
      <HelpButton>Enviar pedido</HelpButton>
    </Container>
  );
}

NewHelpOrder.navigationOptions = ({ navigation }) => ({
  title: 'Selecione o prestador',
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
