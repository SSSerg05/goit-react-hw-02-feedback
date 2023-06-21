import PropTypes from 'prop-types'; // ES6

export const Statistics = ({positive, neutral, negative, total, positivePercentage}) => {
  return (
    <div>
        <p>CountPositive: <span>{ positive }</span></p>
        <p>CountNeitral: <span>{ neutral }</span></p>
        <p>CountNegative: <span>{ negative}</span></p>
        <p>Total: <span>{total}</span></p>
        <p>AvgPostive: <span>{positivePercentage+'%'}</span></p>
    </div>
  );
}

Statistics.propTypes = {
  positive : PropTypes.number.isRequired, 
  neutral : PropTypes.number.isRequired,
  negative : PropTypes.number.isRequired,
  total : PropTypes.number.isRequired,
  positivePercentage : PropTypes.number.isRequired,
}