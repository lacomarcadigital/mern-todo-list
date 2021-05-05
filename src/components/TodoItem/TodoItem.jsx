import StyledTodoItem from "./TodoItem.styles";
import Field from './../Field';

const TodoItem = ({ TextInput, Checkbox, CloseIcon }) => {
  return (
    <StyledTodoItem>
      <Field>
        {Checkbox}
        {TextInput}
        {CloseIcon && CloseIcon}
      </Field>
    </StyledTodoItem>
  )
}

export default TodoItem;
