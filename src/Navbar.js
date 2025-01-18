import React from 'react';

const Navbar = () => {
  return (
    <div className='overflow-hidden bg-blue-300 flex justify-center'>
      <nav className='w-full h-24 flex justify-between items-center p-4 bg-powder text-oxford bg-blue-300 text-black font-bold'>
        <div className='no-underline p-2 pl-4 lg:pl-40 text-base md:text-2xl  font-orbitron'>
          TEMI-CHRONICLES
        </div>

        <div className='hidden md:flex space-x-8 font-orbitron text-2xl pr-60'>
          <a href='/' className='no-underline'>
            HOME
          </a>
          <a href='/pow' className='no-underline'>
            PROOF OF WORK
          </a>
          <a href='/about' className='no-underline'>
            ABOUT
          </a>
        </div>
        {/* Footer navigation, only visible on mobile */}
        <div className='md:hidden visible space-x-3 flex text-xl'>
          <a href='/' className='no-underline'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='w-6 h-6 mb-1'
            >
              <path d='m21.743 12.331-9-10c-.379-.422-1.107-.422-1.486 0l-9 10A1 1 0 0 0 3 14h2v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .743-1.669zM12 16a3 3 0 1 1 0-6 3 3 0 0 1 0 6z'></path>
            </svg>
          </a>
          <a href='/pow' className='no-underline'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='w-6 h-6 mb-1'
            >
              <path d='M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v4h5v-2h2v2h6v-2h2v2h5V8c0-1.103-.897-2-2-2zM9 4h6v2H9V4zm8 11h-2v-2H9v2H7v-2H2v6c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-6h-5v2z'></path>
            </svg>
          </a>
          <a href='/about' className='no-underline'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='w-6 h-6 mb-1'
            >
              <path d='M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z'></path>
            </svg>
          </a>
        </div>
      </nav>

      {/* Footer navigation, only visible on mobile */}
    </div>
  );
};

export default Navbar;
