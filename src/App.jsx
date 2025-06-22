import { useState } from 'react';
import './App.css';
import TodoContainer from './components/TodoContainer';
import Todoinput from './components/Todoinput';

function App() {
  const [inputval, setInputval] = useState('');
  const [todos, setTodos] = useState([]);

  function writeTodo(e) {
    setInputval(e.target.value);
  }

  function addTodo(){
    if (inputval.trim()) {
      setTodos((prevTodos) => [...prevTodos, inputval.trim()]);
      setInputval('');
    }
  }

  function deltodo(TodoIndex) {
    setTodos((prevTodos) =>
      prevTodos.filter((item, index) => index !== TodoIndex)
    );
  }

  return (
    <main>
      <h1>To Do List</h1>
      <Todoinput inputval={inputval} writeTodo={writeTodo} addTodo={addTodo} />
      <TodoContainer todos={todos} deltodo={deltodo} />
    </main>
  )
}

export default App;
