import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export default function App() {
  const mainDiv = useRef(null)
  const firstDiv = useRef(null)
  const secondDiv = useRef(null)
  const thirdDiv = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainDiv.current,
        start: 'top bottom',
        end: 'bottom center',
        scrub: true,
      },
    })

    tl.to(firstDiv.current, { duration: 1, x: -100, ease: 'power2.inOut' })
    tl.to(secondDiv.current, { duration: 1, x: 100, ease: 'power2.inOut' })
    tl.to(thirdDiv.current, { duration: 1, x: -100, ease: 'power2.inOut' }, '-=1')
  }, [])

  return (
    <div className='h-[2000px] flex justify-center items-center gap-4'>
      <div ref={mainDiv} className='mt-20'>
        <div ref={firstDiv} className='bg-red-500 w-[45px] h-[45px]'></div>
        <div ref={secondDiv} className='bg-red-600 w-[45px] h-[45px]'></div>
        <div ref={thirdDiv} className='bg-red-700 w-[45px] h-[45px]'></div>
      </div>
    </div>
  )
}
