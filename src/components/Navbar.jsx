import React from 'react';

function Navbar() {
  return (
    <header className='flex bg-red-500 h-16 mt-6'>
      <div className='flex-1'>
        <h2>Fink</h2>
        <h2>react-icon</h2>
      </div>
      <nav>
        <a href='#'>Movies</a>
        <a href='#'>Tv Shows</a>
      </nav>
    </header>
  );
}

export default Navbar;
