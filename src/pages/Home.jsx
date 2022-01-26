import React from 'react';
import MainCharacters from '../components/MainCharacters';
import MovieCard from '../components/MovieCard';
import MovieDescription from '../components/MovieDescription';
import MovieHeader from '../components/MovieHeader';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <>
      <div className='container mx-auto'>
        <Navbar />
        <main className='grid grid-cols-1 sm:grid-cols-2'>
          <section>
            <MovieCard />
          </section>
          <section>
            <MovieHeader
              time='10/25/2019'
              generos='Comedia, Crimen'
              duracion='1h 52min'
            />
            <MovieDescription />
            <hr className='bg-brownLand' />
            <MainCharacters />
          </section>
        </main>
      </div>
    </>
  );
}

export default Home;
