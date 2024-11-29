import { CiMenuBurger } from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
export default function Header() {
    const navList = [
        {
            name: "Home"
        },
        {
            name: "Contacts"
        },
        {
            name: "About"
        },
        {
            name: "FAQS"
        },
    ]
    const [click, setClick] = useState(true)

    const handleClick = () => {
        setClick(!click)
    }
    return (
        <div className=" bg-[#464646]  sm:py-4">
            <nav className="flex justify-between container sm:items-center">
                <h2 className=" py-2 sm:text-2xl">Barkalaia</h2>
                <div
                    onClick={() => handleClick()}
                    className="text-2xl sm:hidden z-[9] cursor-pointer font-bold relative flex items-center">
                    <CiMenuFries className={`absolute transition-all ${click ? "opacity-0  " : "opacity-1"}`} />
                    <CiMenuBurger className={`ab transition-all ${!click ? "opacity-0  " : "opacity-1"}`} />
                </div>
                <div className={`sm:hidden transition-all absolute right-0 w-screen h-screen ${click ? "opacity-0" : "opacity-1"}`}>
                    <ul className="absolute z-[4] flex flex-col right-0 top-0 h-screen bg-slate-300 px-2 pt-9 sm:hidden gap-2">
                        {navList.map(item => (
                            <li key={item} className=""><a href="#">{item.name}</a></li>
                        ))}
                    </ul>
                    <div onClick={() => handleClick()} className={`${click && "hidden"} w-screen h-screen absolute top-0 right-0 bg-slate-800 opacity-40`} />
                </div>
                <ul className="sm:flex sm:text-2xl hidden">
                    {navList.map(item => (
                        <li key={item} className="px-4"><a href="#">{item.name}</a></li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}