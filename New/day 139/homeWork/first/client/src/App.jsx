import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import gsap from 'gsap'
import { useState,useEffect,useRef } from 'react'
export default function App() {
  const boxRef = useRef(null)
  const tl = gsap.timeline({repeat: 0})
  useEffect(() => {
    // ! scene 1
    tl.to(boxRef.current,
      {
        duration: 1,
        x: "50vw",
        xPercent: -50,
        // yoyo: true,
        // repeat: 1,
        ease: "power5.inOut"
      }
    )
    // ! scene 2
    tl.to(boxRef.current, {
      y: "50vh",
      yPercent: -50,
      rotate: 360,
      duration: 1,
    })
    // ! scene 3
    tl.to(boxRef.current,
      {
        // scale: 100,
        width: "100vw",
        height: "100vh",
        duration: .2,
      })
  }, [])
  return (
    <div ref={boxRef} >
      <Header />
      <Hero/>
    </div>
  )
}
