import React from 'react';
import CharacterCard from './CharacterCard';
import photo1 from '../images/ugur-yucel.jpg';
import photo2 from '../images/binnur-kaya.jpg';
import photo3 from '../images/cengiz-bozkurt.png';
import photo4 from '../images/feyyaz-yigit.jpg';

function MainCharacters() {
  return (
    <>
      <section className='grid grid-cols-2 mt-5 mb-20 w-78 mx-auto justify-items-center lg:grid-cols-4 lg:mx-0 lg:my-4 lg:w-104 xl:w-120'>
        <CharacterCard
          imagen={photo1}
          realName='Uğur Yücel'
          fakeName='Kaşkomiser Emin'
        />
        <CharacterCard
          imagen={photo2}
          realName='Binnur Kaya'
          fakeName='Komiser Asuman'
        />
        <CharacterCard
          imagen={photo3}
          realName='Cengiz Bozkurt'
          fakeName='Komiser Salih'
        />
        <CharacterCard
          imagen={photo4}
          realName='Feyyaz Yiğit'
          fakeName='Suç Uzmani Dizdar Koşu'
        />
      </section>
    </>
  );
}

export default MainCharacters;
