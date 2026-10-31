import React, { useContext } from 'react'
import { MyShope } from '../context/TaskContext'
import EmptyPage from './EmptyPage'
import TaskCard from './TaskCard'

const KanbanColumn = () => {
  const {filter,inputdata,taskData}=useContext(MyShope)
 
  return (
    <div className='w-full min-h-[75vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 p-1 text-white'>
       <div className='border border-[#111b27] bg-[#030a11] rounded-2xl flex flex-col p-3  gap-3'>
        <h1 className='text-xl font-bold'>Todo</h1>
        {filter==="All"&& taskData.filter((val)=> val.status==="Todo"&&
         ( inputdata ? val.title.toLowerCase().includes(inputdata.toLowerCase()) : true )).map((val)=>{
        return <TaskCard key={val.id} task={val}/>
       })}
       {filter!=="All"&& taskData.filter((val)=>val.status==="Todo"&&val.priority===filter && (inputdata?val.title.toLowerCase().includes(inputdata.toLowerCase()):true)).map((val)=>{
        return <TaskCard key={val.id} task={val}/>
       })}
    
       </div>
       <div className='border border-[#111b27] bg-[#030a11] rounded-2xl  flex flex-col p-3 gap-3'>
         <h1 className='text-xl font-bold'>In Progress</h1>

        {filter==="All"&& taskData.filter((val)=> val.status==="In Progress"&&
         ( inputdata ? val.title.toLowerCase().includes(inputdata.toLowerCase()) : true )).map((val)=>{
        return <TaskCard key={val.id} task={val}/>
       })}
       {filter!=="All"&& taskData.filter((val)=> val.status==="In Progress"&&val.priority===filter && (inputdata?val.title.toLowerCase().includes(inputdata.toLowerCase()):true)).map((val)=>{
        return <TaskCard key={val.id} task={val}/>
       })}
     
       </div>
       <div className='border border-[#111b27] bg-[#030a11]  rounded-2xl  flex flex-col p-3 gap-3'>
         <h1 className='text-xl font-bold'>Completed</h1>
      
        {filter==="All"&& taskData.filter((val)=> val.status==="Completed"&&
         ( inputdata ? val.title.toLowerCase().includes(inputdata.toLowerCase()) : true )).map((val)=>{
        return <TaskCard key={val.id} task={val}/>
       })}
       {filter!=="All"&& taskData.filter((val)=> val.status==="Completed"&&val.priority===filter && (inputdata?val.title.toLowerCase().includes(inputdata.toLowerCase()):true)).map((val)=>{
        return <TaskCard key={val.id} task={val}/>
       })}
    
       </div>
      
      </div>
  )
}

export default KanbanColumn //
//   Create a new question for your interview practice list.
/*
 {filter==="All"&& taskData.filter((val)=>
          inputdata ? val.title.toLowerCase().includes(inputdata.toLowerCase()) : true ).map((val)=>{
        return <TaskCard key={val.id} task={val}/>
       })}
       {filter!=="All"&& taskData.filter((val)=>val.priority===filter && (inputdata?val.title.toLowerCase().includes(inputdata.toLowerCase()):true)).map((val)=>{
        return <TaskCard key={val.id} task={val}/>
       })}
     { taskData.length===0 && <EmptyPage/>}
      
      {taskData.length>0 && filter==="All" && taskData.filter((val)=>inputdata?val.title.toLowerCase().includes(inputdata.toLowerCase()):true).length===0 && <EmptyPage/>}
      {taskData.length>0 && filter!=="All" && taskData.filter((val)=>val.priority===filter && (inputdata?val.title.toLowerCase().includes(inputdata.toLowerCase()):true)).length===0 && <EmptyPage/>} 
*/