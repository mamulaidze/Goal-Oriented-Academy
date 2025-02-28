import React, { useRef, useState, useEffect } from 'react';

export default function App() {
  const userName = useRef();
  const [names, setNames] = useState(() => {
    const savedNames = localStorage.getItem('names');
    return savedNames ? JSON.parse(savedNames) : [];
  });

  const handleClick = () => {
    const name = userName.current.value.trim()
    if (name) {
      const updatedNames = [...names, name]
      setNames(updatedNames);
      localStorage.setItem('names', JSON.stringify(updatedNames))
      userName.current.value = '';
    }
  }
  const handleDelete =() => {
    localStorage.removeItem('names')
  }

  return (
    <div>
      <h1 className="text-3xl">TO DO</h1>
      <input ref={userName} placeholder="GUD BOY" />
      <button onClick={handleClick}>დამატება</button>
      <button className='pl-[30px]' onClick={handleDelete}>გასუფთავება</button>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
