import React, { Component } from 'react';
import PropTypes from 'prop-types'; // ES6

import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

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


  countTotalFeedback() { 
    return Object.values(this.state).reduce((acc, item) => acc + item, 0)
  } 

  countPositiveFeedbackPercentage() { 
    const total = this.countTotalFeedback();
    
    if (!total) {
      return 0;
    }

    return +(this.state.positive / total * 100).toFixed(0);
  }

  render() {
    const total = this.countTotalFeedback()
    return (
      <div>
        <FeedbackOptions
            // options={} 
            // onLeaveFeedback={}
          onIncPositive={ this.incrementPositive }
          onIncNeitral={ this.incrementNeitral }
          onIncNegative={ this.incrementNegative } 
        />
        {
          total ? <Statistics 
                    positive = {this.state.positive}
                    neutral = {this.state.neitral}
                    negative = {this.state.negative}
                    total = {total} 
                    positivePercentage = {this.countPositiveFeedbackPercentage()}
                  /> : <Notification message="There is no feedback" />
        }
        
      </div>
    );
  }
}
