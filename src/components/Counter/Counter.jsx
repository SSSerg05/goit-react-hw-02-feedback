import React, { Component } from 'react';
import PropTypes from 'prop-types'; // ES6
import { Button } from './Counter.styled';

export class Counter extends Component {
  static defaultProps = {};

  static propTypes = {};

  render() {
    return (
      <div>
        <div>
          <Button onClick={() => console.log("click Good")}>Good</Button>
          <Button onClick={() => console.log("click Netral")}>Neitral</Button>
          <Button onClick={() => console.log("click Negative")}>Negative</Button>
        </div>

        <p>Count: <span>0</span></p>

      </div>
    );
  }
}

Counter.propTypes = {
  
}