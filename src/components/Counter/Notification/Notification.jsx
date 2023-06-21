import PropTypes from 'prop-types'; // ES6'

export const Notification = ({message}) => {
  return (
    <h3>{message}</h3>
  )
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
}