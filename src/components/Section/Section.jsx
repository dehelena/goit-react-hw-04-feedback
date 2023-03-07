import PropTypes from 'prop-types';
import { StyledSection } from './Section.styled';

const Section = ({ title, children }) => {
    return (
        <StyledSection>
            <h2> {title} </h2>
            {children}
        </StyledSection>
    );   
};


Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element,
}

export default Section;