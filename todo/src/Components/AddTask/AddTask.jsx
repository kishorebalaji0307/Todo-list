import React, { useState } from 'react';
import './AddTask.css';

export default function AddTask() {
  const [todo, settodo] = useState('');

  const task = () => {
    if (todo.trim() === '') return;

    const saved = JSON.parse(localStorage.getItem('tasks')) || [];

    const newtask = {
      id: Date.now(),   
      text: todo,
      completed: false
    };

    const updated = [...saved, newtask];

    localStorage.setItem('tasks', JSON.stringify(updated));

    settodo('');
  };

  return (
    <div className='add'>
      <h1>Add Task</h1>
     
      <input
        value={todo}
        onChange={(e) => settodo(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && task()}
      />
      <button onClick={task}>ADD</button>
      
    </div>
  );
}