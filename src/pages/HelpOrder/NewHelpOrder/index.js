import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Wrapper, Container, FormInput, HelpButton } from './styles';

import api from '~/services/api';

export default function NewHelpOrder({ navigation }) {
  const [message, setMessage] = useState('');
  const userId = useSelector(state => state.student.student);

  function handleSubmit() {
    const response = api.post(`students/${userId}/help-orders`, {
      question: message,
    });

    // const { id } = response.help_order;

    // Alert.alert('Alerta', `Sua pergunta Id ${id} foi postada com sucesso.`);
  }

  return (
    <Wrapper>
      <Container>
        <FormInput
          underlineColorAndroid="transparent"
          placeholder="Inclua seu pedido de auxílio."
          placeholderTextColor="grey"
          numberOfLines={9}
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
          multiline
          textAlignVertical="top"
          value={message}
          onChangeText={setMessage}
        />
        <HelpButton onPress={handleSubmit}>Enviar pedido</HelpButton>
      </Container>
    </Wrapper>
  );
}
NewHelpOrder.navigationOptions = ({ navigation }) => ({
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
