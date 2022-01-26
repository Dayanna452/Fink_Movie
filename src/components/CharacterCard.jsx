import React from 'react';

function CharacterCard(props) {
  return (
    <div className='mt-8 text-center font-roboto lg:mt-0'>
      <img
        src={props.imagen}
        className='h-20 rounded-full border-4 mx-auto border-brownLand sm:h-12'
        alt='character actor/actress'
      />
      <ul className='mt-2 text-base lg:text-xs'>
        <li>
          <b>{props.realName}</b>
        </li>
        <li> {props.fakeName}</li>
      </ul>
    </div>
  );
}

export default CharacterCard;
