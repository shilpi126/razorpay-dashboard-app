import React from 'react'
import { RiCheckboxCircleFill } from "react-icons/ri";
import { IoMdRadioButtonOff } from "react-icons/io";
import { BiRadioCircleMarked } from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa6";
import { BiRadioCircle } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";
import { IoCheckmarkCircle } from "react-icons/io5";

const Filter = () => {
  return (
    <div className='h-10   w-full bg-slate-800 flex justify-between'>
        <div className='flex justify-between items-center pl-4 '>
            <p className='text-white text-xs mr-4'>Quick Filter:</p>
            <div className='w-28 h-6 pl-2 bg-blue-950 bg-opacity-40 mr-4 flex p-1'>
            <p className='text-blue-500 text-sm  '>
            <IoCheckmarkCircle/>
            </p>

            <p  className='text-xs text-blue-500 ml-1'>All Payouts</p>
            </div>
            <div className='w-28 h-6 pl-2 bg-blue-950 bg-opacity-40 mr-4 flex p-1'>

            <p className='text-blue-500 text-sm  '>
            <BiRadioCircle/>
            </p>
            <p  className='text-xs ml-1 text-white'>All Payouts</p>
            </div>
            <div className='w-28 h-6 pl-2 bg-blue-950 bg-opacity-40 mr-4 p-1 flex'>

            <p className='text-blue-500 text-sm  '>
            <BiRadioCircle/>
            </p>
            <p  className='text-xs ml-1  text-white'>All Payouts</p>
            </div>
            
        </div>
        <div className='pr-12 text-blue-500 text-xs font-semibold mt-4 flex '><span className='mr-2'>View More Filter</span><span className='font-semibold'><FaAngleDown/></span></div>
    </div>
    )
}

export default Filter