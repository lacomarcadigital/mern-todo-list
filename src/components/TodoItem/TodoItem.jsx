import StyledTodoItem from "./TodoItem.styles";

const TodoItem = ({ TextInput, Checkbox, CloseIcon }) => {
  return (
    <StyledTodoItem>
      {TextInput}
      {CloseIcon && CloseIcon}
    </StyledTodoItem>
  )
}

export default TodoItem;
