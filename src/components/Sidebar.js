import React from 'react'

import { ImXing2 } from "react-icons/im";

import { SiderbarDataBottom, SiderbarDataTop } from '../Data/SidebarData';



const Sidebar = () => {
  return (
    <div className='flex flex-col  h-screen bg-slate-900 p-2'>
        <div className='text-white mt-2 mb-6 flex flex-col items-start   pb-2'>
        <h1 className='mb-6 text-3xl'><ImXing2/></h1>
        
     <div className='border-b-2 border-slate-500 '>
     {SiderbarDataTop.map((item,index) => {
          return(
            <div key={index+1} className='flex text-xs mb-2 h-6  '>
            <p className=' mr-4 mt-1'>{item.icon}</p>
            <p>{item.title}</p>
            {item.new && <p className='w-10 bg-green-500 text-xs rounded-xl h-4 text-center ml-2'>{item.new}</p>}
            
            </div> 
          )
          })} 
      </div> 

    <div className='mt-4'>
    {SiderbarDataBottom.map((item,index) => {
          return(
            <div key={index+1} className='flex  items-start text-xs h-6 mb-2 '>
            <p className=' mr-4 mt-1'>{item.icon}</p>
            <p>{item.title}</p>
            
            </div> 
          )
          })} 
    </div>




          </div>   












  {/* <div className='flex  text-sm mb-4'>
  <p className='  mr-4 text-center text-sm mt-1'><MdOutlineArrowOutward /></p>
  <p>Payout</p>
  <p className='bg-green-500 mt-1 rounded-xl text-xs w-10 text-center ml-2 h-4'>NEW</p>
    </div>

       <div className='flex text-sm mb-4'>
       <p className='mr-4 mt-1'><RiPagesLine/></p>
       <p>Account Statement</p>
       </div>
       <div className='flex text-sm mb-4'>
       <p className='mr-4 mt-1'><LiaUser/></p>
       <p>Contacts</p>
       </div>
       
        
        </div> */}
{/* 
        <div className='text-white  flex flex-col  items-start '>

        <div className='flex text-sm mb-4'>
        <p className='mr-4 mt-1'><BiBookmark /></p>
        <p>Vendor Payments</p>
        </div>
        <div className='flex text-sm mb-4'>
        <p className='mr-4 mt-1'><CiBellOn /></p>
        <p>Text Payments</p>
        </div>

      <div className='flex text-sm mb-4'>
      <p className='mr-4 mt-1'><LuSend /></p>
      <p>Payout Links</p>
      </div>
       <div className='flex text-sm mb-4'>
       <p className='mr-4 mt-1'><RiBook2Line /></p>
       <p>Payroll</p>
       </div>
       <div className='flex text-sm mb-4'>
       <p className='mr-4 mt-1'><HiOutlineMailOpen /></p>
       <p>Reports</p>
       </div>
       
        </div>
        <div className='text-white mt-2 flex flex-col justify-between items-center'>
        </div> */}




    </div>
  )
}

export default Sidebar