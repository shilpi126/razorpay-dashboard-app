import React from 'react'
import data from '../Data/Data'


const UserData = () => {

    //console.log(data)
  return (
  

       <div>
         <div className='flex justify-between ml-6 mr-6  border-b-2 border-slate-500'>
            <div  className='text-xs mb-5 text-white items-center'>
            <p className='mb-4 mt-4'>CREATED AT</p>
                {data.map((item,index)=>(
                    <p className='mb-4'>{item.date}</p>
                ))}
            </div>
            <div  className='text-xs mb-5 text-white items-center'>
            <p className='mb-4 mt-4'>AMOUNT</p>
                {data.map((item,index)=>(
                    <p className='mb-4'>{item.amount}</p>
                ))}
            </div>
            <div  className='text-xs mb-5 text-white items-center'>
            <p className='mb-4 mt-4'>STATUS</p>
                {data.map((item,index)=>(
                        <p className=' bg-orange-500 bg-opacity-30  w-14 rounded-xl mb-4 pl-1'>{item.status}</p>
                ))}
            </div>
            <div  className='text-xs mb-5 text-white items-center'>
            <p className='mb-4 mt-4'>CONTACT</p>
                {data.map((item,index)=>(
                    <p className='mb-4'>{item.status}</p>
                ))}
            </div>
            <div  className='text-xs mb-5 text-white items-center'>
            <p className='mb-4 mt-4'>CREATEDBY</p>
                {data.map((item,index)=>(
                    <p className='text-blue-600 mb-4'>{item.createdby}</p>
                ))}
            </div>
            <div  className='text-xs mb-5 text-white items-center'>
            <p className='mb-4 mt-4'>UTR</p>
                {data.map((item,index)=>(
                    <p className='mb-4'>{item.utr}</p>
                ))}
            </div>
        
        </div>
        <div className='flex justify-end mr-6 mt-2'>
            <select className='bg-blue-950 text-sm w-12 bg-opacity-50 border-none outline-none text-white'>
                <option >10</option>
            </select>
            <p className='ml-4  text-white text-xs'>rows/page</p>
        </div>
       </div>

    
  )
}

export default UserData