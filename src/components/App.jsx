import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { TodoList } from './TodoList/TodoList';
import { TodoForm } from './TodoForm/TodoForm';
import { Filter } from './Filter/Filter';

export const App = () => {
  const [todos, setTodos] = useState(
    () => JSON.parse(window.localStorage.getItem('todos')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = text => {
    const todo = {
      id: nanoid(),
      text,
      completed: false,
    };

    setTodos(prevState => [todo, ...prevState]);
  };

  const deleteTodo = todoId => {
    setTodos(prevState => prevState.filter(todo => todo.id !== todoId));
  };

  const togleCompleted = todoId => {
    setTodos(prevState =>
      prevState.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const changeFilter = e => setFilter(e.target.value);

  const getVisibleTodos = () => {
    const normalizedFilter = filter.toLowerCase();

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter)
    );
  };

  const completedTodos = todos.reduce(
    (acc, todo) => (todo.completed ? acc + 1 : acc),
    0
  );

  return (
    <div>
      <h1>Todos</h1>
      <p>All: {todos.length}</p>
      <p>Completed: {completedTodos}</p>
      <TodoForm addTodo={addTodo} />
      <Filter value={filter} onChangeFilter={changeFilter} />
      <TodoList
        todos={getVisibleTodos()}
        onDeleteTodo={deleteTodo}
        onTogleCompleted={togleCompleted}
      />
    </div>
  );
};
