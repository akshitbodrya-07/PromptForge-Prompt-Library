import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from './pages/Home'
import Generate from './pages/Generate'
import Saved from './pages/Saved'

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/generate" element={<Generate/>} />
         <Route path="/saved" element={<Saved/>} />
      </Routes>
    </div>
  )
}

export default App