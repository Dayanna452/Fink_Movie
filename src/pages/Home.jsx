import React from 'react';
import MainCharacters from '../components/MainCharacters';
import MovieCard from '../components/MovieCard';
import MovieDescription from '../components/MovieDescription';
import MovieHeader from '../components/MovieHeader';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <>
      <div className='container mx-auto px-0 xl:px-24'>
        <Navbar />
        <main className='grid grid-cols-1 sm:grid-cols-2'>
          <section>
            <MovieCard />
          </section>
          <section className='grid grid-cols-1'>
            <MovieHeader
              time='10/25/2019'
              generos='Comedia, Crimen'
              duracion='1h 52min'
              valoracion='7.0'
            />
            <MovieDescription />
            <hr className='bg-brownLand w-78 mx-auto h-1 lg:w-104 xl:w-120 lg:mx-0' />
            <MainCharacters />
          </section>
        </main>
      </div>
    </>
  );
}

export default Home;
