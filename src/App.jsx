import { useState } from 'react';
import './App.css';
import TodoContainer from './components/TodoContainer';
import Todoinput from './components/Todoinput';

function App() {
  const [inputval, setInputval] = useState('');
  // State is now an array of objects to track completion status
  const [todos, setTodos] = useState([
    { text: 'Learn React', completed: true },
    { text: 'Build a To-Do App', completed: false },
    { text: 'Make it look awesome', completed: false },
  ]);

  function writeTodo(e) {
    setInputval(e.target.value);
  }

  function addTodo() {
    if (inputval.trim()) {
      // Add a new todo object
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

  // New function to toggle the completed status
  function toggleTodo(todoIndex) {
    setTodos((prevTodos) =>
      prevTodos.map((todo, index) =>
        index === todoIndex ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  return (
    // Add a container for better styling
    <div className="app-container">
      <h1>My To-Do List</h1>
      <Todoinput inputval={inputval} writeTodo={writeTodo} addTodo={addTodo} />
      <TodoContainer todos={todos} deltodo={deltodo} toggleTodo={toggleTodo} />
    </div>
  )
}

export default App;