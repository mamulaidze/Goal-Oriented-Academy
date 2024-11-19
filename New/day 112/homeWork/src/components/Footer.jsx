import React from 'react'
import { GiTeacher } from "react-icons/gi";
import { FaLightbulb } from "react-icons/fa";
import { Ri24HoursFill } from "react-icons/ri";
const Footer = () => {
    const h2Style = 'text-[#ffff] text-[23px] font-medium pb-[20px] '
    const divsP = ' font-sans text-[#c8d3e8] '
  return (
    <footer className='flex justify-around  bg-[#222140] items-center pt-[10px]'>
        <div className='py-12'>
            <h2 className='font-semibold text-[#ffff] text-[32px] pb-9'>WHY WE ARE <br></br>THE BEST</h2>
            <p className={divsP}>a learning system based on <br></br>formalised teaching with help of...</p>
        </div>
        {/* div 2 */}
        <div>
            <GiTeacher  size={50} className='text-[#00b3ff] pb-[10px]'/>
            <h2 className={h2Style}>EXPERT TEACHER</h2>
            <p className={divsP}>a learning system based<br></br> on formalised teaching</p>
        </div>
        {/* div 3 */}
        <div>
            <FaLightbulb size={50}  className='text-[#00db16] pb-[10px]'/>
            <h2 className={h2Style}>ONLINE COURSES</h2>
            <p className={divsP}>a learning system based<br></br> on formalised teaching</p>
        </div>
        {/* div 3 */}
        <div>
            <Ri24HoursFill size={50} className='text-[#5895fd] pb-[10px]'/>
            <h2 className={h2Style}>24/7 SUPPORT</h2>
            <p className={divsP}>a learning system based<br></br> on formalised teaching</p>
        </div>
    </footer>
  )
}

export default Footer
