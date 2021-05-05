import StyledList from './TodoList.styles';
import Checkbox from './../Checkbox';
import Input from './../Input';
import TodoItem from '../TodoItem';

const TodoList = ({ todoItems }) => {
  return (
    <StyledList>
      {todoItems.length > 0 && todoItems.map((todo, idx) => (
        <TodoItem
          key={todo.id}
          Checkbox={<Checkbox id={`todo-item-${idx}`} name={`todo-item-${idx}`}/>}
          TextInput={<Input id={`todo-content-${idx}`} value={todo.text} name={`todo-content-${idx}`} placeholder="The todo cannot be empty" type="text"/>}
        />
      ))}
    </StyledList>
  );
}

export default TodoList;
