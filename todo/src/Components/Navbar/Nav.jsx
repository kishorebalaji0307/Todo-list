import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Nav.css"

export default function Nav() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li onClick={() => navigate("/")} className="nav-item">HOME</li>
        <li onClick={() => navigate("/TASKPAGE")} className="nav-item">TASK PAGE</li>
        <li onClick={() => navigate("/ADDTASK")} className="nav-item">ADD TASK</li>
        <li onClick={() => navigate("/ABOUT")} className="nav-item">ABOUT</li> 
      </ul>
    </nav>
  )
}