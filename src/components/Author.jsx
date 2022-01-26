import React from 'react';

function Author(props) {
  return (
    <ul className='text-center my-2 text-lg lg:text-xs lg:my-0'>
      <li className='mb-2 '>
        <b>{props.name}</b>
      </li>
      <li>{props.occupation}</li>
    </ul>
  );
}

export default Author;
