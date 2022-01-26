import React, { useRef } from 'react';
import { BsTriangleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Navbar() {
  const span1 = useRef(null);
  const span2 = useRef(null);
  const span3 = useRef(null);
  const btn2 = useRef(null);
  const btn3 = useRef(null);

  const handleClick = (e) => {
    switch (e.target.id) {
      case 'span1':
        span2.current.classList.remove('font-bold');
        btn2.current.classList.remove('border-b-[2px]', 'border-greenLand');
        span3.current.classList.remove('font-bold');
        btn3.current.classList.remove('border-b-[2px]', 'border-greenLand');
        break;
      case 'span2':
        span2.current.classList.add('font-bold');
        btn2.current.classList.add('border-b-[2px]', 'border-greenLand');
        span3.current.classList.remove('font-bold');
        btn3.current.classList.remove('border-b-[2px]', 'border-greenLand');
        break;
      case 'span3':
        span3.current.classList.add('font-bold');
        btn3.current.classList.add('border-b-[2px]', 'border-greenLand');
        span2.current.classList.remove('font-bold');
        btn2.current.classList.remove('border-b-[2px]', 'border-greenLand');
        break;

      default:
        break;
    }
  };

  return (
    <nav className='h-14 my-6 ml-6 mr-4 xl:ml-36 xl:mr-24'>
      <ul className='flex items-center'>
        <div className='flex-1'>
          <Link to='/' className='flex text-justify items-center w-20'>
            <strong
              id='span1'
              ref={span1}
              onClick={handleClick}
              className='mr-1 font-rambla text-3xl'
            >
              fink
            </strong>
            <BsTriangleFill className='text-greenLogo text-xl rotate-90' />
          </Link>
        </div>
        <li>
          <Link
            to='/'
            className='mx-1 py-1.5 h-10 hover:border-b-[2px] hover:border-greenLand'
            ref={btn2}
          >
            <span
              id='span2'
              ref={span2}
              onClick={handleClick}
              className='font-roboto text-base'
            >
              Movies
            </span>
          </Link>
        </li>

        <li>
          <Link
            to='/'
            className='mx-1 py-1.5 h-10 hover:border-b-[2px] hover:border-greenLand'
            ref={btn3}
          >
            <span
              id='span3'
              ref={span3}
              onClick={handleClick}
              className='font-roboto text-base'
            >
              Tv Show
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
