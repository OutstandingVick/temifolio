import React from 'react';

const About = () => {
  return (
    <div className='min-h-screen bg-blue-300 w-full h-full font-orbitron text-black flex flex-col items-center py-8 px-4 lg:px-24 overflow-hidden'>
      <div className='max-w-6xl w-full shadow-lg rounded-lg p-6 lg:p-12'>
        <h1 className='text-2xl lg:text-4xl font-rye text-center mb-6'>
          ABOUT ME
        </h1>
        <h2 className=' flex justify-center text-xl lg:text-3xl text-oxford font-poiret font-bold mb-2'>
          Hi, I'm Temi the Writer, nice to meet you
        </h2>
        <hr className='border-t-2 border-black my-2' />
        <p className='mb-2 pb-2 lg:text-2xl text-base font-nunito'>
          I am a skilled content writer and a Web 3 Project Ambassador
          passionate about creating concise, engaging, and educational content.
          With expertise in thread creation, and Web3 topics, I help brands
          connect with their audience through impactful words.
        </p>
        <p className='mb-2 pb-2 lg:text-2xl text-base font-nunito'>
          I offer the following services; Article Writing Social Media Content
          Creation (Twitter threads) Editing and Proofreading Research-Based
          Writing
        </p>
        <div className='text-center mt-4 md:mt-8'>
          <a
            href='mailto:faithakorede614@gmail.com'
            className='inline-block text-powder rounded-full px-4 md:px-12 mx-4 md:mx-8 py-1 md:py-3 text-base md:text-xl font-bold transition hover:border-2 hover:border-black hover:text-blue-300 hover:bg-black'
          >
            Email
          </a>
          <a
            href='https://x.com/TemiChronicles'
            className='inline-block text-powder rounded-full px-4 md:px-8 py-1 md:py-3 text-base md:text-xl font-bold transition hover:border-2 hover:border-black hover:text-blue-300 hover:bg-black'
          >
            X
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
