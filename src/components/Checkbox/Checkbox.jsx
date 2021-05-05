import { Fragment } from 'react';
import StyledCheckbox, { StyledCheckboxInput } from './Checkbox.styles';
import propTypes from 'prop-types';

const Checkbox = ({ name, id }) => {
  return (
    <Fragment>
      <StyledCheckboxInput type="checkbox" hidden name={name} id={id}/>
      <StyledCheckbox htmlFor={id} />
    </Fragment>
  );
}

Checkbox.propTypes = {
  /**
   * Input name.
   */
  name: propTypes.string.isRequired,

  /**
   * Unique DOM id.
   */
  id: propTypes.string.isRequired
}

export default Checkbox;
