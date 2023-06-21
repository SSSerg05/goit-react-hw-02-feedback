import PropTypes from 'prop-types'; // ES6

export const Statistics = ({countPositive, countNeitrale, countNegative}) => {
  return (
    <div>
        <p>CountPositive: <span>{ countPositive }</span></p>
        <p>CountNeitral: <span>{ countNeitrale }</span></p>
        <p>CountNegative: <span>{ countNegative}</span></p>

    </div>
  );
}

Statistics.propTypes = {
  countPositive : PropTypes.number.isRequired, 
  countNeitrale : PropTypes.number.isRequired,
  countNegative : PropTypes.number.isRequired,
}