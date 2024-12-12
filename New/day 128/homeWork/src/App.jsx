import React from 'react'
import { Link,Route,Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/home'
import About from './pages/About'
import GelaDzia from './pages/GelaDzia'
import HomeOne from './pages/home/homeOne'
import HomeTwo from './pages/home/HomeTwo'
export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        {/* //!   nested */}
        <Route path='/home' element={<Home/>}>
          <Route path='homeone' element={<HomeOne/>} ></Route>
          <Route path='hometwo' element={<HomeTwo/>}></Route>
        </Route>


        <Route path='/about' element={<About/>}
        />
        <Route path='/geladzia' element={<GelaDzia/>}
        />
        <Route path='*' element={<h1>404 Not Found</h1>}
        />
      </Routes>
    </div>
  )
}
