import { Form, FormBtn, Input } from './TodoForm.styled';

export const TodoForm = ({ addTodo }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const text = form.elements.text.value;
    addTodo(text);
    form.reset();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Input type="text" name="text" placeholder="Type your todo" />
      <FormBtn type="submit">Add</FormBtn>
    </Form>
  );
};
