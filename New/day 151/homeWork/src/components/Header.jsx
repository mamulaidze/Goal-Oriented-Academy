import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='flex h-14 items-center px-2.5 justify-between'>
      <div className='flex items-center'>
        <span className='pr-2.5 cursor-pointer'><GiHamburgerMenu /></span>
        <h1 className='text-2xl font-extrabold cursor-pointer'>Games</h1>
      </div>
      <div>
        <button className="font-semibold  bg-black text-white px-3 py-1 text-center w-full flex items-center justify-center">Subscribe</button>
      </div>
    </div>
  );
}
