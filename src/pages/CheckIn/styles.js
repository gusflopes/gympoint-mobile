import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Header = styled.SafeAreaView`
  background-color: #fff;
  display: flex;
  flex: 1;
`;

export const Container = styled.View`
  background-color: #c5c5c5;
  display: flex;
  flex: 1;
`;

export const CheckInButton = styled(Button)`
  margin: 10px 20px;
`;
