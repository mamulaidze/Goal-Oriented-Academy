import React, { useEffect } from 'react'
import gsap from 'gsap'
export default function Header() {
    useEffect(() =>{
        gsap.fromTo(
            '.hello',
            {
                opacity: 0,
                y: 300
            },
            {
                opacity: 1,
                y: 0,
                stagger:0.1
            },
        ),
        gsap.fromTo(
            '#title',
            {
                rotate:360,
                scale:1.5,
                color: "black"

            },
            {
                rotate:0,
                scale:1,
                color: 'white',
                ease: 'elastic.out',
                duration: 2,
            })
            gsap.fromTo(
                '#header',
                {
                    background: 'white',
                },
                {
                    background: 'black',

                    duration: 2,

                }
            )
    },[])
  return (
    <header  id='header' className='flex justify-between p-[20px]'>
        <div>
            <h1 id='title'>Home Work</h1>
        </div>
        <nav>
            <ul className='flex gap-[15px] text-white'>
                <li className='hello'><a href="/">Home</a></li>
                <li className='hello'><a href="/about">About</a></li>
                <li className='hello'><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    </header>
  )
}
