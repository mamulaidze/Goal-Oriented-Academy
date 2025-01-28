import React, { useEffect } from "react";
import { FaBars } from "react-icons/fa6";
import gsap from "gsap";

export default function Header() {
  const navList = [
    { name: "Catalog", icon: <FaBars /> },
    { name: "Contacts" },
    { name: "About" },
    { name: "FAQS" },
  ];

  useEffect(() => {
    gsap.fromTo(
      "#ulid li",
      { y: -100 },
      {
        y: 1,
        stagger: 0.2,
        duration: 0.5,
        ease: "power1.out",
      }
    );
  }, []);

  return (
    <header className="flex justify-between items-center bg-[black] text-white h-[80px] w-[100%]">
      <div>
        <h2 id="title" className="text-[30px] pl-10 hover:scale-110 transition-all">iOS</h2>
      </div>
      <nav className="mr-11">
        <ul id="ulid" className="flex">
          {navList.map((item, index) => (
            <li key={index} className="flex items-center px-4">
              <a href="#" className="flex items-center gap-2 hover:text-[#3592fc] hover:scale-105 transition-all">
                {item.icon && item.icon}
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
