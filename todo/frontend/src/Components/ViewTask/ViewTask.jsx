import React, { useEffect, useState } from 'react';
import "./View.css";

export default function ViewTask() {
  const [todoList, setTodoList] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await fetch('http://localhost:5001/api/tasks');
      const data = await response.json();
      setTodoList(data);
    } catch (err) {
      console.error('Error fetching tasks:', err);
    }
  };

  useEffect(() => {
    /* 
    const saved = JSON.parse(localStorage.getItem('tasks')) || [];
    setTodoList(saved);
    */
    fetchTasks();
  }, []);

  const toggleComplete = async (id) => {
    /* 
    const updated = todoList.map((item) =>
      item.id === id
        ? { ...item, completed: !item.completed }
        : item
    );
    setTodoList(updated);
    localStorage.setItem('tasks', JSON.stringify(updated)); 
    */

    try {
      const response = await fetch(`http://localhost:5001/api/tasks/${id}`, {
        method: 'PUT'
      });
      if (response.ok) {
        fetchTasks();
      }
    } catch (err) {
      console.error('Error toggling task:', err);
    }
  };

  const deleteTodo = async (id) => {
    /* 
    const updated = todoList.filter((item) => item.id !== id);
    setTodoList(updated);
    localStorage.setItem('tasks', JSON.stringify(updated)); 
    */

    try {
      const response = await fetch(`http://localhost:5001/api/tasks/${id}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        fetchTasks();
      }
    } catch (err) {
      console.error('Error deleting task:', err);
    }
  };

  return (
    <div>
      <h2>TASKPAGE</h2>

      <div className='but'>
        <ul>
          {todoList.map((item) => (
            <li
              key={item._id}
              onClick={() => toggleComplete(item._id)}
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
                  deleteTodo(item._id); 
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