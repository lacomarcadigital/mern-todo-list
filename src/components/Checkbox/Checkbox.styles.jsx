import styled from 'styled-components';

const StyledCheckbox = styled.label`
  width: 20px;
  height: 20px;
  border: 1px solid #393A4B;
  display: flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const StyledCheckboxInput = styled.input`

  &:checked + ${StyledCheckbox} {
    background-image: linear-gradient(-45deg, #C058F3, #55DDFF);
    
    &::before {
      content: url(${process.env.PUBLIC_URL}/assets/images/icon-check.svg);
    }
  }
`;

export default StyledCheckbox;
export {
  StyledCheckboxInput
}
