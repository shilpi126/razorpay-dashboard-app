import React from 'react'
import { FaAngleDown } from "react-icons/fa6";

import { MdOutlineArrowOutward } from "react-icons/md";

import { IoSearch } from "react-icons/io5";
import { LiaUser } from "react-icons/lia";


const Header = () => {
  return (
    
        <div className='flex justify-between h-12 p-4 bg-slate-800'>
        <ul className='flex justify-between'>
            <li className='mr-4 text-white text-sm flex'><p className='mr-1 text-center text-sm bg-gray-700 mt-1  w-4 h-4 rounded'><MdOutlineArrowOutward /></p><p>Payout</p> <p className='ml-2'>/</p></li>
            <li className='mr-4 text-blue-500 text-xs bg-blue-950 h-6 w-10 rounded p-1 mr-2 '><button>Single</button></li>
            <li className='mr-4 text-white  text-sm'>Bulk <span className='text-white bg-green-600 text-xs pl-2 pr-2 rounded-xl'>NEW</span></li>
            <li className='mr-4 text-white  text-sm'>Tally</li>
            <li className='mr-4 text-white  text-sm'>Payout Links</li>
            
        </ul>
        <ul className='flex justify-between'>
        <li>
            <div className='flex border-2 border-blue-900 w-24 h-7 '>
                <div className='text-blue-500 text-xs p-1 border-r-2  pr-3 border-blue-950'>+ PAYOUT</div>
                <div className='text-blue-500 text-center pt-1 pl-1 text-xs'><FaAngleDown/></div>
            </div>
        </li>

            <li className=' pl-4 mt-2 text-blue-500 text-sm'><IoSearch /></li>
            <li className='text-orange-400 pl-4 mt-2 text-sm'><LiaUser /></li>
            <li className='text-blue-500 mt-2 pl-4  text-sm'><LiaUser /></li>
            
        </ul>
        </div>

    
  )
}

export default Header