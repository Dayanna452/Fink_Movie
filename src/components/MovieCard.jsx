import React from 'react';

function MovieCard() {
  return (
    <>
      <section>
        <div className='bg-yellow-300 h-96 mt-8'>
          <img src='' className='h-4/5' alt='movie' />
          <div className='bg-green-500 h-1/5'>nexflix</div>
        </div>
        <button className='bg-red-400 text-center h-14 mt-5 w-full'>
          Another Suggestion
        </button>
      </section>
    </>
  );
}

export default MovieCard;
