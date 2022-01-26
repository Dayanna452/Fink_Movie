import React from 'react';
import { Link } from 'react-router-dom';
import movie from '../images/movie.jpg';
import netflix from '../images/netflix.png';

function MovieCard() {
  return (
    <section className='container grid grid-cols-1 justify-items-center h-120 font-roboto'>
      <div className='h-100 text-center'>
        <img src={movie} className='h-98 mx-auto rounded-t-xl' alt='movie' />
        <div className='bg-greenLight flex justify-center items-center h-1/5 mx-auto rounded-b-xl'>
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
      <button className='bg-redLight text-white text-xl text-center w-78 h-14 self-end rounded-xl'>
        <b>Another Suggestion</b>
      </button>
    </section>
  );
}

export default MovieCard;
