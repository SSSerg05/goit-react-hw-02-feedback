import React, { Component } from 'react';
import PropTypes from 'prop-types'; // ES6
import { Button } from './Counter.styled';

export class Counter extends Component {
  
  static defaultProps = {
    initValueGood: 0,
    initValueNeitral: 0,
    initValueNegative: 0,
  };

  static propTypes = {
    initValueGood: PropTypes.number,
    initValueNeitral: PropTypes.number,
    initValueNegative: PropTypes.number,
  };
  
  // now code
  state = {
    good: this.props.initValueGood,
    neitral: this.props.initValueNeitral,
    negative: this.props.initValueNegative,
  }
  
  incrementGood = (event) => { 
    this.setState( prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  }
  
  incrementNeitral = (event) => { 
    this.setState( prevState => {
      return {
        neitral: prevState.neitral + 1,
      };
    });
  }

    incrementNegative = (event) => { 
    this.setState( prevState => {
      return {
        negative: prevState.negative + 1,
      };
    });
  }


  render() {
    return (
      <div>
        <div>
          <Button onClick={ this.incrementGood }>Good</Button>
          <Button onClick={ this.incrementNeitral }>Neitral</Button>
          <Button onClick={ this.incrementNegative }>Negative</Button>
        </div>

        <p>CountGood: <span>{ this.state.good }</span></p>
        <p>CountNeitral: <span>{ this.state.neitral }</span></p>
        <p>CountNegative: <span>{ this.state.negative }</span></p>

      </div>
    );
  }
}
