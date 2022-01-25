import React from 'react';

function MovieHeader() {
  return (
    <header className='mt-16 h-44 bg-black'>
      <h1 className='font-bold text-xl capitalize bg-red-100'>titulo</h1>
      <div className='flex flex-wrap justify-between bg-pink-200 mt-4'>
        <h2>fecha</h2>
        <h2>generos</h2>
        <h2>duracion</h2>
        <button className='bg-red-800'>trailer</button>
      </div>
      <div className='mt-5 bg-orange-300 flex justify-between'>
        <a href='#'>ni idea buscarr :v</a>
        <span>valoracion</span>
      </div>
    </header>
  );
}

export default MovieHeader;
