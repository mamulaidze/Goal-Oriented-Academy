import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();

  const handleChange = (event) => {
    const selectedRoute = event.target.value;
    if (selectedRoute) {
      navigate(selectedRoute);
    }
  };

  return (
    <div>
      <select onChange={handleChange}>
        <option value="">Select an option</option>
        <option value="/about/kino1">gela</option>
        <option value="/about/kino2">guja</option>
      </select>

      <h1>About</h1>

      <Outlet />
    </div>
  );
}
