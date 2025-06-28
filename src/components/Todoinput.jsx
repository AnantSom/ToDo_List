import React from 'react';

function Todoinput({ inputval, writeTodo, addTodo }) {
  // Function to handle Enter key press
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div className='input-section'>
      <input
        type="text"
        value={inputval}
        onChange={writeTodo}
        onKeyPress={handleKeyPress}
        placeholder="Add a new task..."
      />
      <button onClick={addTodo}>
        Add
      </button>
    </div>
  );
}

export default Todoinput;