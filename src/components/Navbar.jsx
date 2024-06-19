import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-slate-900 text-white'>
        <div className="logo mx-9 my-2">
            {/* <span className='font-bold text-xl'>dailyTasks!</span> */}
            <img src={logo} height={60} alt="Sit logo" />
        </div>
      <ul className='flex gap-8 mx-9 my-2'>
       <li className='cursor-pointer transition-all hover:font-bold'>Home</li>
       <li className='cursor-pointer transition-all hover:font-bold'>Your tasks</li>
      </ul>
    </nav>
  )
}

export default Navbar
