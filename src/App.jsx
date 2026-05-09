import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from './pages/Home'
import Generate from './pages/Generate'
import Saved from './pages/Saved'
import { useState } from 'react'

function App() {

  const [isDark, setIsDark] = useState(true)

  return (
    <div className={isDark ? "dark-theme" : "light-theme"}>
      <Navbar isDark={isDark} setIsDark={setIsDark}/>
      <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/generate" element={<Generate/>} />
         <Route path="/saved" element={<Saved/>} />
      </Routes>
    </div>
  )
}

export default App