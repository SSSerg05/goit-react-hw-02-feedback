import PropTypes from 'prop-types'; // ES6

import { Counter } from '../Counter/Counter';
import { Container } from "./App.styled";


export const App = () => {
  return (
    <Container>
      <Counter />
      
    </Container>
  );
};
