import React from 'react';

import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App (): JSX.Element {
  return (
    <div className="App">
      <nav>
        <Link className='Label' to={'/Home'}>Home</Link>
        <Link className='Label' to={'/Sample'}>Test</Link>
      </nav>
      <Outlet/>
    </div>
  );
}

export default App;