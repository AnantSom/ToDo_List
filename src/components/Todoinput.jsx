import React from 'react'

function Todoinput({inputval, writeTodo, addTodo}) {
  return (
    <div className='input-container'>
      <input 
        type="text" 
        value={inputval} 
        onChange={writeTodo}
      ></input>
      <button onClick={addTodo}>
        +
      </button>
    </div>
  )
}

export default Todoinput;
