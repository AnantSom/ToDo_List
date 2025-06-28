import React from 'react';
import Todo from './todo';

// Pass toggleTodo down
function TodoContainer({ todos, deltodo, toggleTodo }) {
  return (
    <div className='container'>
      {todos.map((todo, index) => (
        <Todo 
          key={index} 
          todo={todo} 
          index={index} 
          deltodo={deltodo} 
          toggleTodo={toggleTodo} // Pass it here
        />
      ))}
    </div>
  )
}

export default TodoContainer;