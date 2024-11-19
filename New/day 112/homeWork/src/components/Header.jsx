import React from 'react'
import { PiFigmaLogoLight } from "react-icons/pi";
const Header = () => {
    const navLinks = [
    {name: 'Home'},
    {name: 'About Us'},
    {name: 'Features'},
    {name: 'How it works'}
]

  return (
    <header className='flex items-center justify-between px-8 py-4 text-center  bg-custom-gradient  shadow-lg shadow-black/10 '>
        <div className='flex'>        
            <div><PiFigmaLogoLight className='w-9 h-9'/></div>
            <div className=' flex text-center px-4 text-2xl font-black font-serif'>E Guru</div>
        </div>

        <nav className='flex '>
            <ul className='flex space-x-11 mt-5'>
                {navLinks.map(link => (
                    <li key={link.name}>
                        <a
                            href="#"
                            className="hover:scale-[1.1] transition-all duration-200 hover:text-[#f97316] font-semibold font-sans text-[#6b7280]"
                        >
                    {link.name}
                        </a>

                    </li>
                ))}
            </ul>
        </nav>
        <div>
            <button className='flex px-6 py-3 border-[#000]  text-center border-[1px]  hover:bg-[#f97316] font-medium hover:rounded-[6px] hover:scale-[1.1] transition-all hover:duration-200'>Sign Up</button>
        </div>
    </header>
  )
}

export default Header
