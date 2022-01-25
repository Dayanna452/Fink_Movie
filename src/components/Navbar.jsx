import React from 'react';

function Navbar() {
  return (
    <nav className='flex bg-red-500 h-16 mt-6'>
      <button className='flex-1'>
        Fink <i>react-icon</i>
      </button>
      <button>Movies</button>
      <button>Tv Shows</button>
    </nav>
  );
}

export default Navbar;
