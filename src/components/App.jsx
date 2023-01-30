import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { TodoList } from './TodoList/TodoList';
import { TodoForm } from './TodoForm/TodoForm';
import { Subtitle } from './Subtitle/Subtitle';
import { Title, Container, Lists } from './App.styled';
import initialTodos from 'data/initialTodos.json';

export const App = () => {
  const [todos, setTodos] = useState(
    () => JSON.parse(window.localStorage.getItem('todos')) ?? [initialTodos]
  );

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

  const getCompletedTodos = () => todos.filter(todo => todo.completed === true);
  const getInprogressTodos = () => todos.filter(todo => !todo.completed);

  return (
    <Container>
      <Title>Todos List</Title>
      <div>
        <TodoForm addTodo={addTodo} />
        <Lists>
          <li>
            <Subtitle
              text={'All'}
              value={todos.length}
              allTodos={todos.length}
            />
            <TodoList
              todos={todos}
              onDeleteTodo={deleteTodo}
              onTogleCompleted={togleCompleted}
            />
          </li>
          <li>
            <Subtitle
              text={'InProgress'}
              value={getInprogressTodos().length}
              allTodos={todos.length}
            />
            <TodoList
              todos={getInprogressTodos()}
              onDeleteTodo={deleteTodo}
              onTogleCompleted={togleCompleted}
            />
          </li>
          <li>
            <Subtitle
              text={'Completed'}
              value={getCompletedTodos().length}
              allTodos={todos.length}
            />
            <TodoList
              todos={getCompletedTodos()}
              onDeleteTodo={deleteTodo}
              onTogleCompleted={togleCompleted}
            />
          </li>
        </Lists>
      </div>
    </Container>
  );
};
