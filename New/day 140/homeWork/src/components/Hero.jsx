import React from 'react'

export default function Hero() {
  return (
    <section className="flex   py-20 w-full gap-41">
      <div className="ml-[20%]">
        <h1 className="text-6xl font-bold text-blue-900 leading-tight">
          Life <br /> 
          Changing <br></br>
          <span>weight loss.</span>
        </h1>
        <p className="text-lg text-blue-900 mt-4 flex items-center gap-2">
          Tracking made easy <span className="text-2xl">🍌</span>
        </p>
        <button className="mt-6 px-8 py-3 bg-blue-900 text-white text-lg font-semibold rounded-2xl shadow-md hover:bg-blue-800 transition">
          Start Now
        </button>
      </div>

      <div className="w-[1200px] relative mt-[-18%]">
        <img 
             src="/public/images/bg3.png" 
             alt="Background" 
            className="w-[1272px] h-[1204px] absolute  z-10"
        />
        <img 
            src="/public/images/image1.png" 
            alt="Foreground" 
            className="w-[1103px] h-[1285px] absolute z-20"
        />
        </div>
    </section>
  )
}
