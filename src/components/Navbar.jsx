import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({isDark, setIsDark}) {
  return (
    <nav className='flex items-center justify-between px-8 py-4'
          style={{
            backgroundColor: 'var(--surface)',
            borderBottom: '1px solid var(--border)' 
          }}
    >
        <Link to="/">
        <h1 className='text-xl font-bold'
            style={{color: 'var(--accent)'}}
        >
          🔨 PromptForge
          </h1>
        </Link>
        <ul className='flex gap-8 list-none items-center'>
            <li><Link to="/" className='font-medium hover:opacity-80 transition-all' style={{color: 'var(--muted)'}}>Home</Link></li>
            <li><Link to="/generate" className='font-medium hover:opacity-80 transition-all' style={{color: 'var(--muted)'}}>Generate</Link></li>
            <li><Link to="/saved" className='font-medium hover:opacity-80 transition-all' style={{color: 'var(--muted)'}}>Save</Link></li>
            <li><button
                  onClick={() => setIsDark(!isDark)}
                  className='px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer'
                  style={{
                    background: 'var(--card)',
                    color: 'var(--text)',
                    border: '1px solid var(--border)'
                  }}  
                >
                {isDark ? "☀️ Light" : "🌙 Dark"}

            </button></li>
        </ul>
        
    </nav>
  )
}

export default Navbar
