import React from 'react'

export default function Header() {
  return (
    <div className="flex">
    <div className="flex items-center space-x-[150px] pt-14 pl-32">

      <div className="text-2xl font-bold text-black">nufruit</div>
      <button className="flex items-center gap-2 px-[30px] py-[20px] border border-gray-300 rounded-2xl bg-white text-[#0B0736] font-bold text-[18px] hover:bg-gray-100 transition">

        <div className="grid grid-cols-2 gap-1">
          <span className="w-2 h-2 bg-[#0B0736] rounded-full"></span>
          <span className="w-2 h-2 bg-[#0B0736] rounded-full"></span>
          <span className="w-2 h-2 bg-[#0B0736] rounded-full"></span>
          <span className="w-2 h-2 bg-[#0B0736] rounded-full"></span>
        </div>
        <span>Our app</span>
      </button>
    </div>
  </div>
  )
}
