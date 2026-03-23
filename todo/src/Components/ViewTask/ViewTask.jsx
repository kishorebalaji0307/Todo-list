import React, { useEffect, useState } from 'react';
import "./View.css";

export default function ViewTask() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('tasks')) || [];
    setTodoList(saved);
  }, []);

  const toggleComplete = (id) => {
    const updated = todoList.map((item) =>
      item.id === id
        ? { ...item, completed: !item.completed }
        : item
    );

    setTodoList(updated);
    localStorage.setItem('tasks', JSON.stringify(updated)); 
  };

  const deleteTodo = (id) => {
    const updated = todoList.filter((item) => item.id !== id);

    setTodoList(updated);
    localStorage.setItem('tasks', JSON.stringify(updated)); 
  };

  return (
    <div>
      <h2>TASKPAGE</h2>

      <div className='but'>
        <ul>
          {todoList.map((item) => (
            <li
              key={item.id}
              onClick={() => toggleComplete(item.id)}
              style={{
                cursor: 'pointer',
                textDecoration: item.completed ? 'line-through' : 'none',
                color: item.completed ? '#aaa' : '#333'
              }}
            >
              <span>{item.text}</span>

              <button
                className='delet'
                onClick={(e) => {
                  e.stopPropagation();
                  deleteTodo(item.id); 
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