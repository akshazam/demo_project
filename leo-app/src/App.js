import React from 'react'
import './App.css'
import Nav from './component/Nav'
import Whatsapp from "./component/Whatsapp"
import { Routes, Route } from 'react-router-dom';
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'




const App = () => {
  return (
    <div>
      <>
        <Nav />
        <div>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Whatsapp />
      
      </>
    </div>
  )
}

export default App