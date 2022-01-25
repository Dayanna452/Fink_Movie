import React from 'react';
import CharacterCard from './CharacterCard';

function MainCharacters() {
  return (
    <>
      <section className='grid grid-cols-2 mt-5 mb-10'>
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
      </section>
    </>
  );
}

export default MainCharacters;
