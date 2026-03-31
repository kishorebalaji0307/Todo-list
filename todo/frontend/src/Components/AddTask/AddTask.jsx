import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
 import { ToastContainer, toast } from 'react-toastify';
import './AddTask.css';

export default function AddTask() {
  const [todo, settodo] = useState('');
  const navigate = useNavigate();

  const task = async () => {
    if (todo.trim() === '') {
      toast("Please enter a task");
      return;
    }

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
     toast.error("Server connection failed.");
    }
  };

  return (
    <div className='add'>
    <ToastContainer position="top-right" autoClose={3000} />
      <h1>Add Task</h1>
     
      <input
        value={todo}
        onChange={(e) => settodo(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && task()}
      />
      {/* <input type="text"   
      value={description}
      onChange={(e) => setdescription(e.target.value)}
       placeholder="Description"></input>

      <input type="date"  
      value={date}
      onChange={(e) => setdate(e.target.value)}></input>  */}
      <button onClick={task}>Add</button>
      
    </div>
  );
}