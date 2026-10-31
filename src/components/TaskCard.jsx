import React, { useContext } from 'react'
import { MyShope } from '../context/TaskContext'
import {CalendarDays ,CircleCheckBig} from 'lucide-react'

const TaskCard = ({task}) => {
  const {TaskDelete,setUpdateTask,setShowForm,updateTaskStatus}=useContext(MyShope)

  const priorityStyles={
    Easy:"bg-[#011C0B] text-[#07a757]",
      Medium: "bg-[#281105] text-[#FB6A18]",
        Hard: "bg-[#280B0A] text-[#F26764]",
  }
  //<CircleCheck color="#11b65e" />
  
  const priorityStyle=priorityStyles[task.priority]
  return (
    <div className="w-80 flex flex-col gap-1 rounded-lg border border-[#D9F99D]  bg-[#090E14] p-2 text-white"> 
      {/* Card Heading */}
      <div className='flex justify-between'>
      <div className='flex gap-2'>
        <h2 className="text-sm font-semibold">
        {task.title}
      </h2>
       {task.status==="Completed"&&<CircleCheckBig color="#11b65e" />}
      </div>
      
    {priorityStyle &&
 <span className={`mt-1  inline-block rounded-full  px-2 py-0.5 text-xs font-semibold ${priorityStyle}`}>{task.priority}</span>
}

  </div>

    
      <hr className="my-4 border-[#525252]" />

     
      <div className="px-2 ">
        <h3 className="text-sm font-semibold mb-3">
          {task.description}
        </h3>

 
   <div className='flex justify-between'>
    <h1 className='flex items-center gap-1 mb-3 text-[#767272] text-sm'><CalendarDays size={16}/> {task.DueDate}</h1>
    <select
  value={task.status}
  onChange={(e) =>  updateTaskStatus( task.id,e.target.value)}
  className="rounded-lg border border-[#262626] bg-[#090E14] p-2 text-white"
>
  <option value="Todo">Todo</option>
  <option value="In Progress">In Progress</option>
  <option value="Completed">Completed</option>
</select>
   </div>

        <div className="mt-1 flex  text-xs text-gray-300 gap-2">
          <button onClick={()=>{setUpdateTask(task);setShowForm(true)}} className="rounded-lg bg-[#D9F99D] px-3 py-2 text-sm font-semibold text-[#17210C] hover:bg-[#BEF264] transition-colors">
            Edit
          </button>

     

          <button onClick={()=>{TaskDelete(task.id)}} className="rounded-lg border border-[#7F3038] bg-[#2B1518] px-3 py-2 text-sm font-semibold text-[#F87171] hover:bg-[#451A1A] transition-colors">
            Delete
          </button>
        </div>
      </div>
    </div>)
}

export default TaskCard //border-[#262626]