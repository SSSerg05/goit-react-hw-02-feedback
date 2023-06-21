import React, { Component } from 'react';
import PropTypes from 'prop-types'; // ES6

import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

//import { Button } from './Counter.styled';

export class Counter extends Component {
  
  static defaultProps = {
    initValuePositive: 0,
    initValueNeutral: 0,
    initValueNegative: 0,
  };

  static propTypes = {
    initValuePositive: PropTypes.number,
    initValueNeutral: PropTypes.number,
    initValueNegative: PropTypes.number,
  };
  
  state = {
    positive: this.props.initValuePositive,
    neutral: this.props.initValueNeutral,
    negative: this.props.initValueNegative,
  }
  
  // incrementPositive = (event) => { 
  //   this.setState( prevState => {

  //     return {
  //       positive: prevState.positive + 1,
  //     };
  //   });
  // }
  
  // incrementNeitral = (event) => { 
  //   this.setState( prevState => {

  //     return {
  //       neitral: prevState.neitral + 1,
  //     };
  //   });
  // }

  // incrementNegative = (event) => { 
  //   this.setState( prevState => {

  //     return {
  //       negative: prevState.negative + 1,
  //     };
  //   });
  // }

  increment = (option) => { 
    // console.log(event);
    // const option = event.target.id;
    // console.log('id:', event.target.id);
    // console.log('key:', event.target.key);

    this.setState((prevState) => {
      return {
        [option]: prevState[option] + 1,
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
            options={Object.keys(this.state)} 
            onLeaveFeedback={this.increment}
          // onIncPositive={ this.incrementPositive }
          // onIncNeitral={ this.incrementNeitral }
          // onIncNegative={ this.incrementNegative } 
        />
        {
          total ? <Statistics 
                    positive = {this.state.positive}
                    neutral = {this.state.neutral}
                    negative = {this.state.negative}
                    total = {total} 
                    positivePercentage = {this.countPositiveFeedbackPercentage()}
                  /> : <Notification message="There is no feedback" />
        }
        
      </div>
    );
  }
}
