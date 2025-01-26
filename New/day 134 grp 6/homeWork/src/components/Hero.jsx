import React, { useEffect } from 'react'
import gsap from 'gsap'
export default function Hero() {
  useEffect(() =>{
    gsap.fromTo(
      '#div',
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, },
    )
  })
  return (
    <div>
      <div id='div' className='w-56 h-56 text-center bg-amber-900 rounde'> hello eovneiv</div>
    </div>
  )
}
