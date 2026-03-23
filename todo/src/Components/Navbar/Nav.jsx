import React from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css"

export default function Nav() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/TASKPAGE">TASK PAGE</Link></li>
        <li><Link to="/ADDTASK">ADD TASK</Link></li>
        <li><Link to="/ABOUT">ABOUT</Link></li> 
      </ul>
    </nav>
  )
}