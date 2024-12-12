import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  const navLinks = [
    {name: 'Home', path: '/home'},
    {name: 'About', path: '/about'},
    {name: 'GelaDzia', path: '/geladzia'},
  ]
    return (
    <header className="header">
         <ul className="nav-list">
             {navLinks.map((link, index) => (
                <li key={index} className="nav-item">
                 <Link to={link.path}>{link.name}</Link>
            </li>
            ))}
         </ul>
    </header>

  )
}
