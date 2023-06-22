import PropTypes from 'prop-types'; // ES6'
import Notiflix from 'notiflix';

export const Notification = ({message}) => {
  
  Notiflix.Notify.warning.bind(message);

  return (
    <p>{message}</p>
    
  )
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
}