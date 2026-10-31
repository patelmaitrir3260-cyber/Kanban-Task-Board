import { createContext, useEffect, useState } from "react";
import {useForm} from 'react-hook-form'
import { nanoid } from "nanoid";


export  const MyShope= createContext()
export const MyshopeProvider=({children})=>{
  const [showForm, setShowForm] = useState(false)
  const [taskData, setTaskData] = useState(JSON.parse(localStorage.getItem("Task"))||[])
  const [updateTask, setUpdateTask] = useState(null)
  const [showFilter, setshowFilter] = useState(false)
  const [inputdata, setInputdata] = useState(null)
  const [filter, setfilter] = useState("All")
  const [status, setStatus] = useState("Todo")
    const{register,handleSubmit,reset,formState:{errors}}=useForm({
      mode:"onChange",
      defaultValues:updateTask
    })
    
    console.log(taskData);
    
    const Tasksubmit=(data)=>{

       if(updateTask){
      const update=taskData.map((task)=>{
        return task.id===updateTask.id?{...data,id:updateTask.id}:task
      })
        setTaskData(update)
        localStorage.setItem("Task",JSON.stringify(update))
        setUpdateTask(null)
       }
else{
        console.log(data);
        const Task=[...taskData,{...data,id:nanoid(),status}]
        setTaskData(Task)
        localStorage.setItem("Task",JSON.stringify(Task))
        console.log(taskData);}
        setShowForm(false)
        reset()
    }
    useEffect(()=>{
      if(updateTask){
        reset(updateTask)
      }
      else{
        reset({
          "title":"",
          "description":"",
          "priority":""

        })
      }
    },[updateTask,reset])

    const TaskDelete=(id)=>{
      const Task=taskData.filter((task)=>task.id!==id)
      setTaskData(Task)
      localStorage.setItem("Task",JSON.stringify(Task))
    }
     const updateTaskStatus = (id, status) => {
  const updatedTasks = taskData.map((task) =>
    task.id === id ? { ...task, status } : task
  )

  setTaskData(updatedTasks)
  localStorage.setItem("Task", JSON.stringify(updatedTasks))
}
    return <MyShope.Provider value={{showForm,setShowForm,taskData,setTaskData,register,handleSubmit,reset,errors,Tasksubmit,TaskDelete,updateTask,setUpdateTask,setshowFilter,showFilter,setInputdata,inputdata,filter,setfilter,setStatus,updateTaskStatus}}>{children}</MyShope.Provider>
}