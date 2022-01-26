import React from 'react';
import { Link } from 'react-router-dom';
import movie from '../images/movie.jpg';
import netflix from '../images/netflix.png';

function MovieCard() {
  return (
    <section className='container grid grid-cols-1 justify-items-center h-120 font-roboto mx-auto pr-0'>
      <div className='h-110 text-center'>
        <img src={movie} className='h-98 rounded-t-xl xl:h-102' alt='movie' />
        <div className='bg-greenLight flex justify-center items-center h-1/5 mx-auto rounded-b-xl xl:h-20'>
          <img
            src={netflix}
            className='bg-white h-14 rounded-lg'
            alt='logo netflix'
          />
          <div className='ml-4 text-sm text-white text-justify'>
            <h5>Now Streaming</h5>
            <Link to='/'>
              <b>Watch Now</b>
            </Link>
          </div>
        </div>
      </div>
      <button className='bg-redLight text-white text-xl text-center w-78 h-14 self-end rounded-xl lg:text-base xl:w-92'>
        <b>Another Suggestion</b>
      </button>
    </section>
  );
}

export default MovieCard;
