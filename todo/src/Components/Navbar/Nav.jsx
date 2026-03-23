import React from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css"
export default function Nav() {
  return (
    <div>
      <div className='home'>
      <nav >
        <ul className='sidebar'>
        <li style={{color:"red"}}><Link to="/">HOME</Link></li>
        <li><Link to="/TASKPAGE">TASK PAGE</Link></li>
        <li><Link to="/ADDTASK">ADD TASK</Link></li>
        <li><Link to="/ABOUT">ABOUT</Link></li> 
        </ul>
      </nav>
      </div>
    </div>
  )
}