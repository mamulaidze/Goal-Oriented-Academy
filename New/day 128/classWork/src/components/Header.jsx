import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const navlist = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav>
      <ul className="flex gap-4">
        {navlist.map((item, index) => (
          <li key={index}>
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
