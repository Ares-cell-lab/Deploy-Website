import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='fixed w-full top-0 left-0 z-1 bg-indigo-600 text-white px-10 gap-5 py-4 flex flex-row justify-between items-center'>
      <div>

        <p className='font-bold text-3xl font-serif'>ARES</p>
        </div>
      <div className='flex flex-row gap-4'>
        <Link to='/' className='active:underline decoration-4'>Home</Link>
        <Link to='/services' className='active:underline decoration-4'>Services</Link>
        <Link to='/about' className='active:underline decoration-4'>About</Link>
        <Link to='/contact' className='active:underline decoration-4 '>Contact Us</Link>
        <Link to='/more' className='active:underline decoration-4 '>More</Link>
      </div>
      <div>
       <button className='bg-white text-indigo-600 px-4 py-2 rounded-md hover:bg-gray-200'>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar