import React, { useContext } from 'react'
import { MyShope } from '../context/TaskContext'

const TaskForm = () => {
  const{setShowForm,register,handleSubmit,errors,Tasksubmit }=useContext(MyShope)

  return (
    <div className='' >
        <form onSubmit={handleSubmit(Tasksubmit)} className=' w-[350px] p-6 border-2 border-[#262626] bg-[#090E14] rounded text-white flex flex-col gap-8' >
           <h1 className='text-2xl font-bold'>ADD NEW TASK</h1>
           <div className='flex flex-col gap-2'>
             <input 
             
            {...register("title",{
              required:"title must be required",
              minLength:{
                value:5,
                message:"title must be above the 5 character"
              },
              maxLength:{
                value:20,
                message:"title length must below the 20 character"
              }
            })}
             className='mb-2 border border-[#262626] rounded p-2 outline-0' type="text" placeholder='title' />
             {errors.title && <p className='text-red-500'>{errors.title.message}</p>}
           </div>
      <div className='flex flex-col gap-2'>
              <textarea
            {...register("description",{
              required:"description must be required",
              minLength:{
                value:10,
                message:"description must be above the 10 character"
              },
              maxLength:{
                value:50,
                message:"descrption must below the 50 character"
              }
            })}
  className="p-5 border-2 border-[#262626] rounded text-left placeholder:text-left"
  placeholder="Description"
/>
{errors.description && <p className='text-red-500'>{errors.description.message}</p>}
      </div>
           <div className='flex flex-col gap-2'>
             <select 
            {...register("priority",{
              required:"priority must be select"
            })}
             className='bg-[#090E14] border p-2 rounded border-[#262626] outline-0'>
              <option value="">Priority</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              
            </select>
            {errors.priority && <p className='text-red-500'>{errors.priority.message}</p>}
           </div>
        <div className='flex flex-col gap-2'>
             <input
            {...register("DueDate",{
              required:"Please Enter Date"
            })}
            className='bg-[#090E14] border p-2 rounded border-[#262626] outline-0 placeholder:text-white '
            type="date"
            id="DueDate"
          />
          {errors.DueDate && <p className='text-red-500'>{errors.DueDate.message}</p>}
        </div>
            <div className='flex gap-2 w-full justify-end'>
              <h1 onClick={()=>setShowForm(false)} className="rounded-xl border text-white border-[#566A4D]  px-5 py-3 text-sm font-semibold  transition hover:border-amber-200 hover:bg-amber-50 hover:text-amber-700">Cancel</h1>
                <button type='submit'  className="rounded-xl border border-[#566A4D] bg-[#D9F99D] px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-amber-200 hover:bg-amber-50 hover:text-amber-700">Sumbit Task</button>
            </div>
        </form>
    </div>
  )
}

export default TaskForm




