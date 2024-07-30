import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Filter from '../components/Filter'
import Learnmore from '../components/Learnmore'
import ShowPayout from '../components/ShowPayout'
import UserData from '../components/UserData'

const Dashboard = () => {
  return (
    <div className='flex justify-between w-[100%] m-0 p-0 '>
       <div className='w-8 hover:w-[15%] hover:translate-x-0 hover:transition-ease hover:duration-100 h-[100%] '>
       <Sidebar/>
       </div>
      <div className='w-full'>
      <Header/>
      <Filter/>
      <div className='p-4 w-[100%] bg-slate-700 h-[85%]'>
        <Learnmore/>
        <ShowPayout/>
        <UserData/>
      </div>
      </div>
    </div>
  )
}

export default Dashboard