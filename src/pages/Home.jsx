import React from 'react';
import MainCharacters from '../components/MainCharacters';
import MovieCard from '../components/MovieCard';
import MovieDescription from '../components/MovieDescription';
import MovieHeader from '../components/MovieHeader';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section>
          <MovieCard />
        </section>
        <section>
          <MovieHeader />
          <MovieDescription />
          <MainCharacters />
        </section>
      </main>
    </>
  );
}

export default Home;
