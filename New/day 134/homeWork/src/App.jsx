import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Header from './components/Header'
import KinoErti from './pages/kinoebi/KinoErti'
import KinoOri from './pages/kinoebi/KinoOri'
export default function App() {
  return (
    <div>
      <Header />

      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
        
        <Route path='/about/kino1' element={<KinoErti />}/>
        <Route path ='/about/kino2' element={<KinoOri/>} />
        
        </Route>
        <Route path="/contacts" element={<Contacts/>} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  )
}
