import React from 'react'

export default function App() {
 
  function handleClick(){ 
    const mefe1 = {name:"Giorgi",surname:"Mamulaidze"}
    localStorage.setItem("mefe",JSON.stringify(mefe1))
  }
  return (
    <div>
      <button onClick={()=>handleClick()} className='cursor-pointer'>click to see who is king</button>
    </div>
  )
}
