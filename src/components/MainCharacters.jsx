import React from 'react';
import CharacterCard from './CharacterCard';

function MainCharacters() {
  return (
    <>
      <div className='grid grid-cols-2 mt-5 mb-10'>
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
      </div>
    </>
  );
}

export default MainCharacters;
