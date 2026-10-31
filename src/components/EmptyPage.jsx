import React, { useContext } from 'react'
import { MyShope } from '../context/TaskContext'

const EmptyPage = () => {
    const {taskData}=useContext(MyShope)
  return (
    <div className='w-[90vw] h-[70vh] flex justify-center items-center'>
      {taskData.length>0 && <h1 className="text-white font-bold text-lg">search task not found</h1> }
      {taskData.length===0&&  <h1 className="text-white font-bold text-lg">Create New Task</h1> }
    </div>
  )
}

export default EmptyPage