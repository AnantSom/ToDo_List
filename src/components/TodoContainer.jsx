import React from 'react';
import Todo from './todo';

function TodoContainer({ todos, deltodo, toggleComplete }) {
  return (
    <ul className='task-list'>
      {todos.map((todo, index) => (
        <Todo
          key={index}
          todo={todo}
          index={index}
          deltodo={deltodo}
          toggleComplete={toggleComplete}
        />
      ))}
    </ul>
  );
}

export default TodoContainer;