import React, { Component } from 'react';
import PropTypes from 'prop-types'; // ES6
import { Button } from './Counter.styled';

export class Counter extends Component {
  static defaultProps = {};
  static propTypes = {};
  // ========== old shcool code 
  // constructor() { 
  //   super();
    
  //   this.state = {
  //     good: 0,
  //     neitral: 0,
  //     negative: 0,
  //   }
  // }
  
  // now code
  state = {
    good: 0,
    neitral: 0,
    negative: 0,
  }
  
  incrementGood = (event) => { 
    console.log("click Good");

    const count = this.state.good + 1;
    this.setState({ good: count });
    
    // in async code need save event in other value
    console.log(this.state);
  }


  render() {
    return (
      <div>
        <div>
          <Button onClick={ this.incrementGood }>Good</Button>
          <Button onClick={() => console.log("click Netral")}>Neitral</Button>
          <Button onClick={() => console.log("click Negative")}>Negative</Button>
        </div>

        <p>Count: <span>{ this.state.good }</span></p>

      </div>
    );
  }
}

Counter.propTypes = {
  
}