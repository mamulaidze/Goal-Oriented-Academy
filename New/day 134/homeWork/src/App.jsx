import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Header from './components/Header'
export default function App() {
  return (
    <div>
      <Header />

      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts/>} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  )
}
