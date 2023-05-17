import Image from 'next/image';
import React from 'react';

const Info = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 text-center'>
      <h1 className='font-bold text-2xl p-4'>Capture. Connect. Conserve.</h1>
      <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4'>
        <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
          <Image
            src='https://images.unsplash.com/photo-1501879779179-4576bae71d8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGFuaW1hbCUyMHdhbGxwYXBlcnxlbnwwfDB8MHx8&auto=format&fit=crop&w=2070&q=80'
            alt='/'
            layout='responsive'
            width='677'
            height='451'
          />
        </div>
        <div className='w-full h-full object-cover'>
          <Image
            src='https://images.unsplash.com/photo-1511300636408-a63a89df3482?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG5hdHVyZSUyMHdhbGxwYXBlcnxlbnwwfDB8MHx8&auto=format&fit=crop&w=2070&q=80'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            object-fit='cover'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src='https://images.unsplash.com/photo-1571599711343-1023784dd0bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG5hdHVyZSUyMHdhbGxwYXBlcnxlbnwwfDB8MHx8&auto=format&fit=crop&w=2070&q=80'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            object-fit='cover'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src='https://images.unsplash.com/photo-1558819645-3a734936270d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZSUyMHdhbGxwYXBlcnxlbnwwfDB8MHx8&auto=format&fit=crop&w=2070&q=80'
            alt='/'
            width='215'
            height='217'
            layout="responsive"
            object-fit='cover'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src='https://images.unsplash.com/photo-1557163967-48f17ae1d65a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fG5hdHVyZSUyMHdhbGxwYXBlcnxlbnwwfDB8MHx8&auto=format&fit=crop&w=2070&q=80'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            object-fit='cover'
          />
        </div>
      </div>
    </div>
  );
};

export default Info;
