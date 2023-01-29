export const TodoForm = ({ addTodo }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const text = form.elements.text.value;
    addTodo(text);
    form.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="text" name="text" />
      </label>
      <button type="submit">add</button>
    </form>
  );
};
