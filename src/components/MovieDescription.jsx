import React from 'react';
import Author from './Author';

function MovieDescription() {
  return (
    <>
      <article className='mt-28 mx-auto w-78  font-roboto sm:mt-0 sm:mx-0 xl:w-120 lg:w-104'>
        <div>
          <h3 className='my-3 text-xl lg:text-lg'>
            <b>Overview</b>
          </h3>
          <p className='text-base lg:text-sm lg:pr-16'>
            Istanbul Police Department homicide detectives encounter a murder
            nothing like they’ve seen before.Commissioners Emin, Salih, Asuman
            and deputy Alaattin begin investigating.But strange murders keep
            happening. They don’t have any evidence or any clues. Day by day,
            tempers flare and the police chiefs grow annoyed.As the murders keep
            piling up, the public’s interest rises. The pressure on Emin and his
            colleagues get intense. At last, the chief of police assigns “crime
            expert” Dizdar Koşu, who has recently come back from the US, to the
            team.Overwhelmed with panic, pressure and disdain, Emin and his
            friends try to solve the strangest series of murders with the most
            unusual methods.This fast race against time immediately turns into a
            tragicomedy.
          </p>
        </div>
        <div className='grid grid-cols-2 mx-auto w-78 justify-items-center place-content-center my-10  border border-black sm:justify-items-start sm:place-content-start sm:grid-cols-3 sm:my-3'>
          <Author name='Ali Atay' occupation='Director, Writer' />
          <Author name='Aziz Kedi' occupation='Writer' />
          <div className='col-span-2 sm:col-span-1'>
            <Author name='Feyyaz Yiğit' occupation='Writer' />
          </div>
        </div>
      </article>
    </>
  );
}

export default MovieDescription;
