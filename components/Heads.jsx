import React from 'react';

const Heads = ({heading, message, para}) => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
      {/* Overlay */}
      <div className='absolute  top-0 left-0 right-0 bottom-0 bg-black/70 z-[2] flex justify-end items-center'>
      <div className='  p-5  text-[#f5f5f5] z-[2] '>
        <h2 className='text-5xl font-bold'>{heading}</h2>
        <p className='py-5 text-xl'>{message}</p>
        <button className='px-8 py-2 border text-semibold hover:bg-[#f5f5f5] hover:text-[#333333]'>
          {para}</button>
        </div>
      </div>
    </div>
  );
};

export default Heads;
