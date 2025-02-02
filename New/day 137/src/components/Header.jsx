import React from 'react'

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full p-6 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent z-10">
    <div className="text-white text-3xl font-extrabold tracking-widest uppercase font-gaming">
        PlayStation Hub
    </div>
    <nav>
        <ul className="flex space-x-8 text-white text-lg font-medium">
            <li className="hover:text-gray-300 transition cursor-pointer">Home</li>
            <li className="hover:text-gray-300 transition cursor-pointer">Games</li>
            <li className="hover:text-gray-300 transition cursor-pointer">News</li>
            <li className="hover:text-gray-300 transition cursor-pointer">Store</li>
            <li className="hover:text-gray-300 transition cursor-pointer">Contact</li>
        </ul>
    </nav>
    <button className="px-6 py-2 text-lg font-semibold text-black bg-white rounded-full shadow-lg hover:bg-gray-300 transition">
        Sign In
    </button>
    </header>

  )
}

export default Header
