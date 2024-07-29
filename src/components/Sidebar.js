import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className='flex flex-col  w-10 h-screen bg-slate-800 '>
        <div className='text-white mt-2 mb-6 flex flex-col justify-between items-center'>
        <h1 className='mb-4'>hello</h1>
        <p className='mb-4'><MdOutlineArrowOutward/></p>
        <p className='mb-4'><MdOutlineArrowOutward/></p>
        <p className='mb-4'><MdOutlineArrowOutward/></p>
        <p className='mb-4'><MdOutlineArrowOutward/></p>
        
        </div>
        <div className='text-white mt-2 flex flex-col  items-center'>

        <p className='mb-4'><MdOutlineArrowOutward/></p>
        <p className='mb-4'><MdOutlineArrowOutward/></p>
        <p className='mb-4'><MdOutlineArrowOutward/></p>
        <p className='mb-4'><MdOutlineArrowOutward/></p>
        <p className='mb-4'><MdOutlineArrowOutward/></p>
       
        </div>
        <div className='text-white mt-2 flex flex-col justify-between items-center'>
        </div>
    </div>
  )
}

export default Sidebar