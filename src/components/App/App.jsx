import PropTypes from 'prop-types'; // ES6

import { Container } from "./App.styled";


export const App = () => {
  return (
    <div
      style={{
        margin: '0 auto',
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Container>
        its Work!
      </Container>
    </div>
  );
};
