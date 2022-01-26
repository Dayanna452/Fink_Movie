import React from 'react';

function Author(props) {
  return (
    <ul className='text-center my-2'>
      <li>
        <b>{props.name}</b>
      </li>
      <li>{props.occupation}</li>
    </ul>
  );
}

export default Author;
