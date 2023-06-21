import React, { Component } from 'react';
import PropTypes from 'prop-types'; // ES6

import { Controls } from './Controls/Controls';
//import { Button } from './Counter.styled';

export class Counter extends Component {
  
  static defaultProps = {
    initValuePositive: 0,
    initValueNeitral: 0,
    initValueNegative: 0,
  };

  static propTypes = {
    initValuePositive: PropTypes.number,
    initValueNeitral: PropTypes.number,
    initValueNegative: PropTypes.number,
  };
  
  state = {
    positive: this.props.initValuePositive,
    neitral: this.props.initValueNeitral,
    negative: this.props.initValueNegative,
  }
  
  incrementPositive = (event) => { 
    this.setState( prevState => {
      return {
        positive: prevState.positive + 1,
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


  // countTotalFeedback = () => { 
  //   return Object.values(this.state).reduce((acc, item) => acc + item, 0)
  // } 

  // countPositiveFeedbackPercentage = () => { 
  //   return this.state.positive / countTotalFeedback();
  // }

  render() {
    return (
      <div>
        <Controls
          onIncPositive={ this.incrementPositive }
          onIncNeitral={ this.incrementNeitral }
          onIncNegative={ this.incrementNegative } />

        <p>CountPositive: <span>{ this.state.positive }</span></p>
        <p>CountNeitral: <span>{ this.state.neitral }</span></p>
        <p>CountNegative: <span>{ this.state.negative }</span></p>
        <p>TotalFeedback: <span>
          {
            Object.values(this.state).reduce((acc, item) => acc + item, 0)
          }
        </span></p>
        
        {/* <p>AvgPositiveFeedback: <span>{this.countPositiveFeedbackPercentage}</span></p> */}
        
      </div>
    );
  }
}
