import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='flex items-center justify-between px-8 py-4 bg-white shadow-md'>
        <Link to="/">
        <h1 className='text-xl font-bold text-gray-800'>PromptForge</h1>
        </Link>
        <ul className='flex gap-8 list-none'>
            <li><Link to="/" className='cursor-pointer text-gray-600 hover:text-black font-medium'>Home</Link></li>
            <li><Link to="/generate" className='cursor-pointer text-gray-600 hover:text-black font-medium'>Generate</Link></li>
            <li><Link to="/saved" className='cursor-pointer text-gray-600 hover:text-black font-medium'>Save</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar
