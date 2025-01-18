import React from 'react';

const Home = () => {
  return (
    <div className='bg-blue-300 text-british h-full w-full pt-2 md:pt-14'>
      <div className='relative md:flex md:justify-center lg:py-20 lg:pl-6 gap-2 font-orbitron'>
        <div className='font-bold text-black pl-4 md:pt-6 pr-10 md:pr-20 pb-12 md-pb-0'>
          <h2 className='pb-1 lg:pb-3 text-2xl lg:text-6xl'>
            Bringing ideas to
          </h2>
          <h2 className='pb-4 lg:pb-6 text-2xl lg:text-6xl'>
            life with written words
          </h2>
          <h2 className='pb-1 lg:pb-2 text-lg font-nunito lg:text-3xl'>
            I craft words that inspire, engage,
          </h2>
          <h2 className='pb-1 lg:pb-2 text-lg font-nunito lg:text-3xl'>
            and deliver Results.
          </h2>
          <div className='text-center mt-4 md:mt-8'>
            <a
              href='https://x.com/TemiChronicles'
              className='inline-block text-powder rounded-full px-4 md:px-8 py-1 md:py-3 text-base md:text-xl font-bold transition hover:border-2 hover:border-black hover:text-blue-300 hover:bg-black'
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className='rounded-2xl border-2 border-blue-300 overflow-hidden'>
          <img
            src={`${process.env.PUBLIC_URL}/img/temi.jpg`}
            alt='Temi'
            className='object-cover w-full md:w-96 h-full md:h-96'
          />
        </div>
      </div>
      <div className='invisible relative flex place-items-center py-6 lg:py-12 px-10 lg:px-8 gap-2'>
        <div className='lg:text-xl font-rubik font-bold text-white'>
          <h2 className='pb-1 lg:pb-2'>Hello, I'm</h2>
          <h1 className='pb-1 lg:pb-2'>Phantom Hex</h1>
          <h1 className='pb-1 lg:pb-2'>manager and a Blockchain</h1>
          <h1 className='pb-0 lg:pb-2'>Tester. I live in Nigeria.</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
