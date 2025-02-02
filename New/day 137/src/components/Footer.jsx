import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full p-6 bg-black text-white">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="text-2xl font-extrabold tracking-widest uppercase font-gaming">
            PlayStation Hub
        </div>
        <nav className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-lg font-medium">
                <li className="hover:text-gray-400 transition cursor-pointer">About</li>
                <li className="hover:text-gray-400 transition cursor-pointer">Privacy</li>
                <li className="hover:text-gray-400 transition cursor-pointer">Terms</li>
                <li className="hover:text-gray-400 transition cursor-pointer">Support</li>
            </ul>
        </nav>
    </div>
    <div className="mt-6 text-center text-sm text-gray-500 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} PlayStation Hub. All rights reserved.
    </div>
</footer>
  )
}
