import React from 'react'
import Nature1 from '../public/nature1.jpg';
import Nature2 from '../public/nature2.jpg';
import Nature3 from '../public/nature3.jpg';
import Nature4 from '../public/nature4.jpg';
import Nature5 from '../public/nature5.jpg';
import Nature6 from '../public/nature6.jpg';
import SocialsImg from './SocialsImg';


const Social = () => {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
        <p className='text-4xl font-bold text-[#222222]'>Follow us on Instagram</p>
        <p className='pb-4 text-lg'>@Earth-Frame</p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
            <SocialsImg socialImg={Nature1} />
            <SocialsImg socialImg={Nature2} />
            <SocialsImg socialImg={Nature3} />
            <SocialsImg socialImg={Nature4} />
            <SocialsImg socialImg={Nature5} />
            <SocialsImg socialImg={Nature6} />
        </div>
    </div>
  )
}

export default Social