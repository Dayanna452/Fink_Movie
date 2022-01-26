import React from 'react';

function CharacterCard(props) {
  return (
    <div className='mt-8 text-center font-roboto'>
      <img
        src={props.imagen}
        className='h-20 rounded-full border border-4 mx-auto border-brownLand'
        alt='character actor/actress'
      />
      <ul className='mt-2'>
        <li>
          <b>{props.realName}</b>
        </li>
        <li> {props.fakeName}</li>
      </ul>
    </div>
  );
}

export default CharacterCard;
