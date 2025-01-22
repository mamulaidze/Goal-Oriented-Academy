import React, { useEffect } from 'react';
import gsap from 'gsap';

export default function Header() {
  useEffect(() => {
    gsap.fromTo(
      "#name1",
      { x: "80px", scale: 9 },
      { x: "0px", scale: 1, duration: 1.5, 
        ease: "elastic.out(1, 0.3)"
      }
    );

    gsap.fromTo(
      ".nav-links",
      { x: "80px", opacity: 0 },
      { x: "0px", opacity: 1, duration: 4, stagger: 0.2 }
    );



  }, []);

  return (
    <header className="flex justify-between p-5">
      <h2 id="name1">Gela</h2>
      <nav>
        <ul className="flex gap-4">
          <li><a href="/" className="nav-links">Home</a></li>
          <li><a href="/about" className="nav-links">About</a></li>
          <li><a href="/contact" className="nav-links">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
