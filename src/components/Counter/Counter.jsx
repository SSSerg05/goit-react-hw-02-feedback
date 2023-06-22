import React, { Component } from 'react';
import PropTypes from 'prop-types'; // ES6

import { Section } from '../Section/Section'; 
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
  

  increment = (option) => { 
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
    const total = this.countTotalFeedback();

    return (
      <div>
        <Section>
          <FeedbackOptions
            options={Object.keys(this.state)} 
            onLeaveFeedback={this.increment}
          />
        </Section>

        <Section title={"Statistics"}>
          {
            total ? <Statistics 
                      positive = {this.state.positive}
                      neutral = {this.state.neutral}
                      negative = {this.state.negative}
                      total = {total} 
                      positivePercentage = {this.countPositiveFeedbackPercentage()}
                    />
                  : <Notification message="There is no feedback" />
          }
        </Section>
      </div>
    );
  }
}
