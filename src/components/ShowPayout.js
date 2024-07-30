import React from 'react'
import { FaAngleDown } from 'react-icons/fa6'
import { MdCheckBoxOutlineBlank } from 'react-icons/md'
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import { GoDownload } from "react-icons/go";
import { BsThreeDotsVertical } from "react-icons/bs";
import { PiArrowClockwiseBold } from "react-icons/pi";

const ShowPayout = () => {
  return (
    <div className='border-b-2 border-slate-600 h-12 flex justify-between items-center '>
    <div className='flex '>
    <p className='text-gray-500'><MdCheckBoxOutlineBlank /></p>
    <p className='text-xs ml-2 text-white'>Showing 1 to 5 Payout</p>
    <p className='text-xs text-white m-1 ml-4'><RiCheckboxBlankCircleFill /></p>
    <p className=' text-white text-xs '>Sort by</p>
    <select className='bg-transparent text-blue-500 ml-2 text-xs border-none outline-none'>
      <option>latest creation date</option>
    </select>
    </div>

      <div className='flex'>
      <p className='text-blue-500 m-1'><PiArrowClockwiseBold /></p>
      <p className='text-blue-500 m-1 mr-4'><BsThreeDotsVertical /></p>
      <div className='flex border-2 border-blue-500 w-20 h-7 mr-2 '>
      <div className='text-blue-500 text-center pt-1 pl-1 text-sm font-bold'><GoDownload /></div>
                <div className='text-blue-400 text-xs  p-1  font-bold  pr-3 border-blue-950'>Export</div>
         
        </div>
        <div className='flex border-2 border-blue-500 w-24 h-7 bg-blue-500'>
                <div className='text-white text-xs p-1 border-r-2  pr-3 border-blue-950'>+ PAYOUT</div>
                <div className='text-white text-center pt-1 pl-1 text-xs'><FaAngleDown/></div>
        </div>
      </div>

    </div>
  )
}

export default ShowPayout