import StyledField from "./Field.styles";
import PropTypes from 'prop-types';

const Field = ({ children, padding = "1rem" }) => {
  return (
    <StyledField padding={padding}>
      {children}
    </StyledField>
  );
}

Field.propTypes = {
  /**
   * Dynamic padding for the Field component
   */
  padding: PropTypes.string,
}

export default Field;
