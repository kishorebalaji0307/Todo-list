import { Routes, Route } from 'react-router-dom'

import Home from './Components/Home/Home'
import ViewTask from './Components/ViewTask/ViewTask'
import AddTask from './Components/AddTask/AddTask'
import Nav from './Components/Navbar/Nav'
import About from './Components/About/About'

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/TASKPAGE' element={<ViewTask />} />
        <Route path='/ADDTASK' element={<AddTask />} />
        <Route path='/ABOUT' element={<About />} />
      </Routes>
    </>
  )
}