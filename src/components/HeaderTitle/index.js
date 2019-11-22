import React from 'react';
import LogoFile from '~/assets/logo-header.png';

import { Container, Logo, Text } from './styles';

export default function HeaderTitle() {
  return (
    <Container>
      {/*      <Logo source={LogoFile} /> */}
      <Text>GYMPOINT</Text>
    </Container>
  );
}
