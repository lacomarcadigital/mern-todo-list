import styled from 'styled-components';
import Checkbox from './../Checkbox/Checkbox.styles';

const BASE_FONT_SIZE = 16;

const rem = (px, measure = "rem") => `${px / BASE_FONT_SIZE}${measure}`;

const StyledTodoItem = styled.li`
  background-color: #ffffff;
  list-style-type: none;
  margin-bottom: 0;
  border-bottom: 1px solid #393A4B;

  ${Checkbox} {
    margin-right: 1rem;
  }
`;

export default StyledTodoItem;
