import React from 'react';
import PropTypes from 'prop-types'; // ES6

import { Button } from './FeedbackOptions.styled';


export const FeedbackOptions = ({ onIncPositive, onIncNeitral, onIncNegative }) => {
  return (
    <div>
      <Button onClick={ onIncPositive }>Positive</Button>
      <Button onClick={ onIncNeitral }>Neitral</Button>
      <Button onClick={ onIncNegative }>Negative</Button>
    </div>
  )
}

FeedbackOptions.propTypes = {
  onIncPositive : PropTypes.func.isRequired,
  onIncNeitral : PropTypes.func.isRequired,
  onIncNegative : PropTypes.func.isRequired,
}