import React from 'react'

function Todoinput({inputval, writeTodo, addTodo}) {
  
  // Handle form submission with Enter key
  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      addTodo();
    }
  }
  
  return (
    <div className='input-container'>
      <input 
        type="text"
        placeholder="Add a new task..." 
        value={inputval} 
        onChange={writeTodo}
        onKeyDown={handleKeyPress}
      />
      <button onClick={addTodo}>
        Add
      </button>
    </div>
  )
}

export default Todoinput;