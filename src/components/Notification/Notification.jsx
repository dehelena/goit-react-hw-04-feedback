import PropTypes from 'prop-types';
import { NotificationStyled } from './Notification.styled';

const Notification = ({message}) => {
  return (
      <NotificationStyled>{message}</NotificationStyled>
  );
};

Notification.propTypes = {
    message: PropTypes.string,
}

export default Notification;