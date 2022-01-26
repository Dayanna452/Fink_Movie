import React from 'react';

function MovieDescription() {
  return (
    <>
      <article className='mt-40 mx-10 font-roboto sm:mt-0'>
        <div>
          <h3 className='my-3 text-xl'>
            <b>Overview</b>
          </h3>
          <p className='text-base'>
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
        <div className='bg-gray-400 mt-5 '>
          <ul className='grid grid-cols-2'>
            <ul>
              <li>nombre</li>
              <li>cargo</li>
            </ul>
            <ul>
              <li>nombre</li>
              <li>cargo</li>
            </ul>
            <ul>
              <li>nombre</li>
              <li>cargo</li>
            </ul>
          </ul>
        </div>
      </article>
    </>
  );
}

export default MovieDescription;
