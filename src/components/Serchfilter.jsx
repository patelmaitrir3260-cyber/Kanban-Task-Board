import React, { useContext } from 'react'
import { SlidersHorizontal } from 'lucide-react'
import { MyShope } from '../context/TaskContext'

const Serchfilter = () => {
  const{showFilter, setshowFilter,setInputdata,setfilter}=useContext(MyShope)
  
  
  return (
    <div className='w-full flex gap-1 mb-3'>
        <input onChange={(e)=>{
          const data=e.target.value
          setInputdata(data)
       
          
        }} className='p-2 text-white rounded h-10 w-[80%] border border-[#4F4F4F] bg-[#303030] outline-0' type="text"  placeholder='Search tasks....'/>
     <div className="relative">
  <button
    onClick={() => setshowFilter((prev) => !prev)}
    className="text-white border border-[#4F4F4F] bg-[#303030] rounded p-2 hover:bg-[#404040]"
    type="button"
  >
    <SlidersHorizontal size={20} />
  </button>

  {showFilter && (
    <div className="absolute right-0 top-12 z-50 w-40 rounded-lg border border-[#4F4F4F] bg-[#090E14] p-2 shadow-lg">
      <p className="px-2 py-1 text-sm text-gray-400">Priority</p>

      {["All","Easy", "Medium", "Hard"].map((priority) => (
        <button
          key={priority}
          type="button"
          onClick={() => {
       setfilter(priority)
       setshowFilter(false);
          }}
          className="block w-full rounded px-3 py-2 text-left text-white hover:bg-[#303030]"
        >
          {priority}
        </button>
      ))}
    </div>
  )}
</div>
    </div>
  )
}

export default Serchfilter
