import React, { Component } from 'react';
import PropTypes from 'prop-types'; // ES6
import { Button } from './Counter.styled';

export class Counter extends Component {
  static defaultProps = {};
  static propTypes = {};

  constructor() { 
    super();
    
    this.state = {
      good: 0,
      neitral: 0,
      negative: 0,
    }
  }

  incrementGood = (event) => { 
    console.log("click Good");
    console.log(this);
    // in async code need save event in other value
    const { target } = event;
    console.log(target);
  }


  render() {
    return (
      <div>
        <div>
          <Button onClick={this.incrementGood}>Good</Button>
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