import React from 'react';

const Pow = () => {
  return (
    <div className='min-h-screen bg-blue-300 text-black font-nunito w-full h-full items-center px-4 lg:px-24 overflow-hidden'>
      <h2 className='text-2xl md:text-6xl font-semibold mb-6 mt-4 flex justify-center font-nunito'>
        MY LATEST WORKS
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-1 text-lg lg:text-xl  shadow-lg rounded-lg text-center place-items-center'>
        {/* 1st Project */}
        <div className='flex justify-center flex-col'>
          <a
            href='https://x.com/TemiChronicles/status/1873778839907959255?t=ChAb8BCv9UpTF3GgRs7njQ&s=19'
            className='mb-2 pt-4 text-xl md:text-3xl font-bold text-powder font-rye hover:underline'
          >
            1. Huma Finance
          </a>
        </div>
        {/* 2nd Project */}
        <div className='flex justify-center flex-col'>
          <a
            href='https://x.com/TemiChronicles/status/1843280801389240793?t=ChAb8BCv9UpTF3GgRs7njQ&s=19'
            className='mb-2 pt-4 text-xl md:text-3xl font-bold text-powder font-rye hover:underline'
          >
            2. KAST
          </a>
        </div>
        {/* 3rd Project */}
        <div className='flex justify-center flex-col'>
          <a
            href='https://x.com/TemiChronicles/status/1879417279542382893?t=goK_YkYdOB1aoF2Pgq2j0w&s=19'
            className='mb-2 pt-4 text-xl md:text-3xl font-bold text-powder font-rye hover:underline'
          >
            3. 5Cs of Content Writing
          </a>
        </div>
        {/* 4th Project */}
        <div className='flex justify-center flex-col'>
          <a
            href='https://x.com/TemiChronicles/status/1877325554933739718?t=D-_1LyqNXwTouC-2iQi4Xw&s=19'
            className='mb-2 pt-4 text-xl md:text-3xl font-bold text-powder font-rye hover:underline'
          >
            4. Arka Markets
          </a>
        </div>
        <div className='flex justify-center flex-col'>
          <a
            href='https://x.com/TemiChronicles/status/1848087655898063127?t=wmOpzw80Y644tAPfTL3X3Q&s=19'
            className='mb-2 pt-4 text-xl md:text-3xl font-bold text-powder font-rye hover:underline'
          >
            5. Code Wallet
          </a>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Pow;
