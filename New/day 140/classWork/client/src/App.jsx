import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function App() {
  const boxRef = useRef(null);
  const textRef = useRef(null);
  const tl = gsap.timeline({
     repeat: 1,
     yoyo: true
     });

  useEffect(() => {
        // !scene 1 wefewfwe
    tl.to(boxRef.current, {
      x: "5vw",
      xPercent: -50,
      duration: 1,
      ease: "power1.inOut",
    });

    //! Scene 2:  ewfwvvw
    tl.to(boxRef.current, {
      y: "10vw",
      scale: 0.5,
      rotate: 180,
      duration: 1,
    });
    //! Scene 3: efwefwefew
    tl.to(textRef.current, {
      opacity: 1,
      duration: 1.5,
    });
  }, []);

  return (
    <div className="flex justify-center items-center h-screen  bg-black relative ">
      <div ref={boxRef} className="bg-white size-32 rounded-lg"></div>
      <h1 ref={textRef} className=" text-white text-3xl opacity-0">
        მე ვარ ყველაზე ძლიერი და მაგარი!
      </h1>
    </div>
  );
}
