import React, { useContext } from 'react'
import NavbarPage from './components/NavbarPage'
import { MyShope } from './context/TaskContext'
import TaskForm from './components/TaskForm'
import Serchfilter from './components/Serchfilter'
import KanbanColumn from './components/KanbanColumn'

const App = () => {
 const {showForm }= useContext(MyShope)
  return (
<div className='min-h-screen w-full bg-black'>
      <div className={`min-h-screen w-full p-5 ${showForm ? "opacity-10":"opacity-100"}` }>
      <NavbarPage/>
      <Serchfilter/>
       <KanbanColumn/>
      </div>
     <div className={`fixed inset-0 z-50 overflow-y-auto flex justify-center items-center ${showForm?"translate-x-0" : "translate-x-full"}`}>
      <TaskForm/>
     </div>
     </div>
  )
}

export default App
