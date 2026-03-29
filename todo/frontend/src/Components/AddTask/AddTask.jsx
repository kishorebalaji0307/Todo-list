import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddTask.css';

export default function AddTask() {
  const [todo, settodo] = useState('');
  const navigate = useNavigate();

  const task = async () => {
    if (todo.trim() === '') return;

    /* 
    const saved = JSON.parse(localStorage.getItem('tasks')) || [];
    const newtask = {
      id: Date.now(),   
      text: todo,
      completed: false
    };
    const updated = [...saved, newtask];
    localStorage.setItem('tasks', JSON.stringify(updated));
    */

    try {
      const response = await fetch('http://localhost:5001/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: todo })
      });

      if (response.ok) {
        settodo('');
        navigate('/TASKPAGE');
      }
    } catch (err) {
      console.error('Error adding task:', err);
    }
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