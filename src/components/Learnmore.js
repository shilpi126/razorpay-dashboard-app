import React from 'react'
import { MdCheckBoxOutlineBlank } from "react-icons/md";

const Learnmore = () => {
  return (
    <div  className='h-8 bg-slate-600 p-1 w-full flex'>
      <p className='bg-orange-500 text-center w-8 h-4 m-1 text-xs rounded'>Test</p>
        <p className='text-white text-xs  m-1'>These are test payouts and do not affect the actual balance. They are used only for the purpose of intehrating events.</p>
        <p className='text-xs pl-2 text-blue-500  m-1'>Learn More</p>
    </div>
  )
}

export default Learnmore