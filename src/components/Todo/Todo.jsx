export const Todo = ({
  id,
  text,
  completed,
  onDeleteTodo,
  onTogleCompleted,
}) => {
  return (
    <li>
      <p>{text}</p>
      <label>
        <input
          type="checkbox"
          name="agreed"
          checked={completed}
          onChange={() => onTogleCompleted(id)}
        />
      </label>
      <button type="button" onClick={() => onDeleteTodo(id)}>
        del
      </button>
    </li>
  );
};
