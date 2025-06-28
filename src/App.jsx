import { useState, useEffect } from 'react';
import './App.css';
import TodoContainer from './components/TodoContainer';
import Todoinput from './components/Todoinput';

function App() {
  const [inputval, setInputval] = useState('');

  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  function writeTodo(e) {
    setInputval(e.target.value);
  }

  function addTodo() {
    if (inputval.trim()) {
      const newTodo = { text: inputval.trim(), completed: false };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setInputval('');
    }
  }

  function deltodo(todoIndex) {
    setTodos((prevTodos) =>
      prevTodos.filter((_, index) => index !== todoIndex)
    );
  }

  function toggleComplete(todoIndex) {
    setTodos((prevTodos) =>
      prevTodos.map((todo, index) =>
        index === todoIndex ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  return (
    <div className="todo-app">
      <h1>My To-Do List</h1>
      <Todoinput inputval={inputval} writeTodo={writeTodo} addTodo={addTodo} />
      <TodoContainer todos={todos} deltodo={deltodo} toggleComplete={toggleComplete} />
    </div>
  );
}

export default App;