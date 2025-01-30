import React, { useEffect, useState } from "react";
import Phones from "./Items/Phones";
export default function ListItems() {
  const [data, setData] = useState([])
  useEffect(()=>{
    fetch('http://localhost:8000/api/user')
    .then(res => res.json())
    .then(data => setData(data))
  },[])
  return (
    <div className="pt-[30px] pb-[60px] flex bg-black gap-[60px] flex-wrap justify-center">
      <div className="w-[225px] h-[300px] bg-black text-white p-2 rounded-lg">
        <div className="bg-white p-2 rounded-lg">
          <img 
            src={data.img2}
            alt="iPhone 13"
            className="w-full rounded-lg "
          />
        </div>
        <div className="mt-2">
          <span className="bg-orange-400 text-white px-2 py-1 text-xs rounded-md">
            Best Price
          </span>
          <h2 className="text-lg font-bold">999$</h2>
          <p className="text-sm">iPhone 13</p>        
          <button className="bg-orange-400 text-white w-full py-2 mt-2 rounded-lg hover:scale-110 transition-all hover:bg-orange-300">
            buy
        </button>
        </div>
      </div>
      <Phones/>
      <Phones/>
      <Phones/>
      <Phones/>
      <Phones/>
      <Phones/>
      <Phones/>
      <Phones/>
      <Phones/>
      <Phones/>
      <Phones/>
      <Phones/>
    </div>
  );
}
