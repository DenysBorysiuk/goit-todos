import { Todo } from 'components/Todo/Todo';
import { List } from './TodoList.styled';

export const TodoList = ({ todos, onDeleteTodo, onTogleCompleted }) => (
  <List>
    {todos.map(({ id, text, completed }) => (
      <Todo
        key={id}
        id={id}
        text={text}
        completed={completed}
        onDeleteTodo={onDeleteTodo}
        onTogleCompleted={onTogleCompleted}
      ></Todo>
    ))}
  </List>
);
