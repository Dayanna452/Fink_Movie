import React from 'react';
import { BsTriangleFill } from 'react-icons/bs';

function MovieHeader(props) {
  return (
    <header className='mt-56 h-44 sm:mt-0 '>
      <h1 className='font-average text-4xl py-4 sm:py-0 sm:pb-4 capitalize text-center'>
        you’ve got murder
      </h1>
      <div className='grid grid-cols-3 mx-auto gap-y-4 text-center text-xs  w-78 sm:grid-cols-4 sm:w-104'>
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
        <button className='bg-brownLand h-8 rounded-xl place-self-start px-2 sm:place-self-end'>
          <a
            href='https://www.youtube.com/watch?v=yhg8tQbzi34'
            className='flex text-redLight justify-center items-center'
          >
            <BsTriangleFill className=' text-lg rotate-90 mr-2' />
            <b className='capitalize'>play trailer</b>
          </a>
        </button>
      </div>
      <div className='mt-7 bg-orange-300 flex justify-between'>
        <a href='/'>ni idea buscarr :v</a>
        <span>valoracion</span>
      </div>
    </header>
  );
}

export default MovieHeader;
