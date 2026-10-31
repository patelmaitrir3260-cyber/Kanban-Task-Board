import React, { useContext } from 'react'
import { MyShope } from '../context/TaskContext'

const NavbarPage = () => {
  const {setShowForm } = useContext(MyShope)
  return (
    <div className="w-full h-[42px] text-white flex items-center justify-between px-4 mb-4">
      <h1 className='font-bold text-3xl font-sans'>Task board</h1>

      <button onClick={()=>setShowForm(true)} className="rounded-xl border border-slate-200 bg-[#D9F99D] px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-amber-200 hover:bg-amber-50 hover:text-amber-700">
        ADD TASK
      </button>
    </div>
  )
}

export default NavbarPage
