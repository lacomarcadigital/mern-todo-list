import styled from 'styled-components';
import Checkbox from './../Checkbox/Checkbox.styles';

const BASE_FONT_SIZE = 16;

const rem = (px, measure = "rem") => `${px / BASE_FONT_SIZE}${measure}`;

const StyledTodoItem = styled.li`
  background-color: #ffffff;
  padding: ${rem(16)} ${rem(20)};
  list-style-type: none;

  ${Checkbox} {
    margin-right: 1rem;
  }
`;

export default StyledTodoItem;
