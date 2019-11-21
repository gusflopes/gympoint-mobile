import styled from 'styled-components/native';
import Button from '~/components/Button';
import Input from '~/components/Input';

export const Container = styled.SafeAreaView`
  background-color: #c5c5c5;
  display: flex;
  flex: 1;
`;

export const FormInput = styled(Input)`
  margin: 10px 20px;
  height: 300px;
`;

export const HelpButton = styled(Button)`
  margin: 10px 20px;
`;
