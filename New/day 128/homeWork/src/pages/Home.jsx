import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <ul>
          <li>
            <Link to="homeone">Home One</Link>
          </li>
          <li>
            <Link to="hometwo">Home Two</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Home;
