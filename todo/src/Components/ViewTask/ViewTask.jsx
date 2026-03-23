import React, { useEffect, useState } from 'react';
import "./View.css";

export default function ViewTask() {
  const [todolist, settodolist] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('tasks')) || [];
    settodolist(saved);
  }, []);

  const Togglecomplete = (id) => {
    const updated = todolist.map((item) =>
      item.id === id
        ? { ...item, completed: !item.completed }
        : item
    );

    settodolist(updated);
    localStorage.setItem('tasks', JSON.stringify(updated)); 
  };

  const deletetodo = (id) => {
    const updated = todolist.filter((item) => item.id !== id);

    settodolist(updated);
    localStorage.setItem('tasks', JSON.stringify(updated)); 
  };

  return (
    <div>
      <h2>TASKPAGE</h2>

      <div className='but'>
        <ul>
          {todolist.map((item) => (
            <li
              key={item.id}
              onClick={() => Togglecomplete(item.id)}
              style={{
                cursor: 'pointer',
                textDecoration: item.completed ? 'line-through' : 'none',
                color: item.completed ? 'gray' : 'black'
              }}
            >
              <span>{item.text}</span>

              <button
                className='delet'
                onClick={(e) => {
                  e.stopPropagation();
                  deletetodo(item.id); 
                }}
              >
                delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}