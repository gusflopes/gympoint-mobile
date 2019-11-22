import React from 'react';
import PropTypes from 'prop-types';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Container, CheckInText, TimeText } from './styles';

export default function CheckInCard({ date }) {
  return (
    <Container>
      <CheckInText>Check-in Realizado</CheckInText>
      <TimeText>{date}</TimeText>
    </Container>
  );
}

CheckInCard.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  // count: PropTypes.string.isRequired,
};
