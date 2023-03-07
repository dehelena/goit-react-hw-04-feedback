import PropTypes from 'prop-types';
import { StyledFeedbackOptions } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <StyledFeedbackOptions>
      {options.map((option, index) => {
          return <button type="button" key={index} onClick={() => onLeaveFeedback(option)}>{option}</button>;
      })}
    </StyledFeedbackOptions>
  );
};


FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;
