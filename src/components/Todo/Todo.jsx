import { Item, Button, WrapTodo, TodoText, Label } from './Todo.styled';
import { FaRegTrashAlt } from 'react-icons/fa';

export const Todo = ({
  id,
  text,
  completed,
  onDeleteTodo,
  onTogleCompleted,
}) => {
  return (
    <Item>
      <TodoText>{text}</TodoText>
      <WrapTodo>
        <Label>
          <input
            type="checkbox"
            name="agreed"
            checked={completed}
            onChange={() => onTogleCompleted(id)}
          />
          <span>Completed:</span>
        </Label>
        <Button type="button" onClick={() => onDeleteTodo(id)}>
          <FaRegTrashAlt />
        </Button>
      </WrapTodo>
    </Item>
  );
};
