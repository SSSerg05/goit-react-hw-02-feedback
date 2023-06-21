import React, { Component } from 'react';
import PropTypes from 'prop-types'; // ES6

import { Button } from './Controls.styled';


export const Controls = ({ onIncPositive, onIncNeitral, onIncNegative }) => {
  return (
    <div>
      <Button onClick={ onIncPositive }>Positive</Button>
      <Button onClick={ onIncNeitral }>Neitral</Button>
      <Button onClick={ onIncNegative }>Negative</Button>
    </div>
  )
}

Controls.propTypes = {
  onIncPositive : PropTypes.func.isRequired,
  onIncNeitral : PropTypes.func.isRequired,
  onIncNegative : PropTypes.func.isRequired,
}