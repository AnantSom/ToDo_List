import React from 'react'

function Todo({ todo, index, deltodo }) {
  return (
    <div className='todo'>
      <p>{todo}</p>
      <div className='actions'>
        <input type='checkbox'></input>
        <button onClick={() => deltodo(index)}>Delete</button>
      </div>
    </div>
  )
}

export default Todo;
