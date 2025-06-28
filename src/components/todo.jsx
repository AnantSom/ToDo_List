import React from 'react'

// A simple trash icon SVG for a cleaner look
const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6"></polyline>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
    <line x1="10" y1="11" x2="10" y2="17"></line>
    <line x1="14" y1="11" x2="14" y2="17"></line>
  </svg>
);


function Todo({ todo, index, deltodo, toggleTodo }) {
  // Conditionally apply a 'completed' class for styling
  const todoClasses = `todo ${todo.completed ? 'completed' : ''}`;

  return (
    <div className={todoClasses}>
      <div className="todo-content">
        <input 
          type='checkbox' 
          checked={todo.completed}
          onChange={() => toggleTodo(index)}
        />
        <p>{todo.text}</p>
      </div>
      <div className='actions'>
        <button className="delete-btn" onClick={() => deltodo(index)}>
          <TrashIcon />
        </button>
      </div>
    </div>
  )
}

export default Todo;