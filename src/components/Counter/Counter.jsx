import React, { Component} from 'react';
import PropTypes from 'prop-types'; // ES6

export class Counter extends Component {
  static defaultProps = {};

  static propTypes = {};

  render() {
    return (
      <div>
        <div>
          <button type="button">Good</button>
          <button type="button">Neitral</button>
          <button type="button">Negative</button>
        </div>
      </div>
    );
  }
}

Counter.propTypes = {
  
}