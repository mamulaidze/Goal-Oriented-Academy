import React, { useEffect } from 'react'
import gsap from 'gsap'

const App = () => {

  useEffect(() => {
    gsap.fromTo(
      ".hello",
      {
        y:-40,
      },
      {
        y:0,
        stagger: 0.2
      }
    )
    gsap.fromTo(
      "#ku",
      {
        rotation: 0
      },
      {
        rotation:360
      }
    )
  },) 

  return (
    <div>
      <header id='ku' className='flex justify-between m-[10px]'>
        <h1>ზღვის კუ</h1>
        <nav>
          <ul className='flex gap-[20px]'>
            <li className='hello'>კუ 1</li>
            <li className='hello'>კუ 2</li>
            <li className='hello'>კუ 3</li>
            <li className='hello'>კუ 4</li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default App
