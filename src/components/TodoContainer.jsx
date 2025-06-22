import React from 'react';
import Todo from './todo';

function TodoContainer({ todos, deltodo }) {
  return (
    <div className='container'>
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} index={index} deltodo={deltodo} />
      ))}
    </div>
  )
}

export default TodoContainer;
