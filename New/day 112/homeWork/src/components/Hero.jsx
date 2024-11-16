import React from 'react'

const Hero = () => {
  return (
    <main className='flex content-center '>
        <section>
            <div>        
                <h1 className='text-[70px] font-bold '>STUDY FROM<br></br>
                HOME WITH EXPERT</h1>
            </div>
            
            <div className='flex space-x-3 text-center'>
            <hr className="w-0 h-[60px] border-l border-gray-500 "  />
                <p className=' font-light text-[#4b5563] '> a learning system based on formalised <br></br>teaching with the help of resources</p>
            </div>
            <div>
                <button>Get Started</button>
                <button>Learn More</button>
            </div>
        </section>
        <section>
        <div className='ml-[150px]'>
            <img src='src/assets/hero.png' className='w-[700px] h-[635px]'></img>
        </div>
        </section>
    </main>
  )
}

export default Hero
