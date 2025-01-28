import React, { useEffect } from 'react'
import gsap from 'gsap'
export default function Hero() {
  useEffect(()=>{
    gsap.fromTo(
      "#butt",
      {
        background: "black",
        color: "white"
      },
      {
        background: "white",
        color: "black",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      }
    );
  },[])
  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-16 text-center">
      <h1 className="text-5xl font-extrabold mb-4">Welcome to Apple Shop</h1>
      <p className="text-lg mb-6">Discover the latest Apple products with exclusive deals.</p>
      <button id='butt' className="bg-green-500 hover:bg-green-600 px-6 py-3 text-lg rounded-full ">Shop Now</button>
  </div>
  )
}
