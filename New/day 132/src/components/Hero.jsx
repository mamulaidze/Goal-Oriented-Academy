import React, { useEffect } from 'react';
import gsap from 'gsap';

export default function Hero() {
  useEffect(() => {
    gsap.fromTo(
      "#box1",
      { y: -200, opacity: 0, scale: 0.5 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 2,
        ease: 'elastic.out(1, 0.5)',
      }
    );
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div
        id="box1"
        className="flex items-center justify-center bg-black-100 h-[150px] w-[150px] rounded-lg shadow-lg"
      >
        <h1 className="text-2xl font-bold text-white">Box - 1</h1>
      </div>
    </div>
  );
}
