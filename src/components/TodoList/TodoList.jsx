import { Todo } from 'components/Todo/Todo';
export const TodoList = ({ todos, onDeleteTodo, onTogleCompleted }) => (
  <ul>
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
  </ul>
);
