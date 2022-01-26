import React from 'react';
import { BsTriangleFill } from 'react-icons/bs';
import logo from '../Images/Imdb-Logo.png';

function MovieHeader(props) {
  return (
    <header className='mt-56 h-44 sm:mt-0 w-78 lg:w-104 mx-auto '>
      <h1 className='font-average text-4xl py-4 sm:py-0 sm:pb-4 capitalize text-center'>
        you’ve got murder
      </h1>
      <div className='grid grid-cols-3 sm:grid-cols-4 gap-y-4 text-center text-xs '>
        <time
          dateTime={props.time}
          className='bg-brownLand h-8 p-2 place-self-start rounded-xl'
        >
          {props.time}
        </time>
        <h2 className='bg-brownLand h-8 px-1 py-2 place-self-center rounded-xl'>
          {props.generos}
        </h2>
        <h2 className='bg-brownLand h-8 p-2 place-self-center rounded-xl'>
          {props.duracion}
        </h2>
        <button className='bg-brownLand h-8 rounded-xl place-self-start px-1.5 sm:place-self-end'>
          <a
            href='https://www.youtube.com/watch?v=yhg8tQbzi34'
            className='flex text-redLight justify-center items-center'
          >
            <BsTriangleFill className=' text-lg rotate-90 mr-2' />
            <b className='capitalize'>play trailer</b>
          </a>
        </button>
      </div>
      <div className='mt-7 flex h-8 '>
        <img src={logo} alt='IMBd logo' />
        <span className='ml-2 py-0.5'>
          <b>{props.valoracion}</b> <small>/10</small>
        </span>
      </div>
    </header>
  );
}

export default MovieHeader;
