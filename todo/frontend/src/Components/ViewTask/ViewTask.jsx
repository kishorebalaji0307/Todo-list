import React, { useEffect, useState } from 'react';
import "./View.css";

export default function ViewTask() {
  const [todoList, setTodoList] = useState([]);
  const [show, setShow] = useState(false);
const [editText, setEditText] = useState('');

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
  const save =(id)=>{
  if (!editText.trim()) return;
  const updated = todoList.map((item) =>
      item.id === id ? { ...item, text: editText } : item);

  setTodoList(updated);
  localStorage.setItem('tasks',JSON.stringify(updated));
  setShow(null);
  setEditText('');
}

const cancle= ()=>{
  setShow(null);
  setEditText('');
}
  

  return (
     <div>
      <h2>TASKPAGE</h2>
      <table className='tasktable'>
        <thead>
          <tr>
            <th>S.NO</th>
            <th>TASK</th>
            <th>DESCRIPTION</th>
            <th>DUE DATE</th>
            <th>DELETE</th>
            <th>UPDATE</th>
          </tr>
        </thead>
        <tbody>
          {todoList.map((item,index) => (
          <tr key={item.id}>
            <td>{index +1}</td>
            <td
              onClick={() => toggleComplete(item.id)}
              style={{
                cursor: 'pointer',
                textDecoration: item.completed ? 'line-through' : 'none',
                color: item.completed ? '#aaa' : '#333'
              }}>
               {item.text}
            </td>
            <td> {item.description || 'no description'}</td>
            <td>{item.duedate || 'no duedate'}</td>
            <td>
                <button
                 className='delet'
                 onClick={(e) => {
                   e.stopPropagation();
                   deleteTodo(item._id); 
                }}
                  >  Delete </button>
            </td>
            <td>
              <button className="delet" onClick={() => edit(item)}> Update</button>
                {show === item.id && (
                <div style={{ marginTop:'6px', display:'flex',gap:'6px'}}>
                  <input type='text' value={editText} onChange={(e)=> setShow(e.target.value)}
                  />
                  <button onClick={()=> save(item.id)}>Save</button>
                  <button onClick={cancle}>Cancel</button>

                </div>
                )}
            </td>
                
          </tr>
          ))}
        </tbody>
      </table>
 </div>
  );
}








   
//     <div>
//       <h2>TASKPAGE</h2>

//       <div className='but'>
//         <ul>
//           {todoList.map((item) => (
//             <li
//               key={item._id}
//               onClick={() => toggleComplete(item._id)}
//               style={{
//                 cursor: 'pointer',
//                 textDecoration: item.completed ? 'line-through' : 'none',
//                 color: item.completed ? '#aaa' : '#333'
//               }}
//             >
//               <span>{item.text}</span>

//               <button
//                 className='delet'
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   deleteTodo(item._id); 
//                 }}
//               >
//                 delete
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// // }
  // <button
  //                className='delet'
  //                onClick={(e) => {
  //                  e.stopPropagation();
  //                  deleteTodo(item._id); 
  //               }}