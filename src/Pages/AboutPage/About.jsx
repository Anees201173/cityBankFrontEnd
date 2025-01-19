import React from 'react';
import AboutPageComp_1 from '../../Components/AboutPageComponents/AboutPageComp_1';
import AboutPageComp_2 from '../../Components/AboutPageComponents/AboutPageComp_2';

import AboutPageComp_3 from '../../Components/AboutPageComponents/AboutPageComp_3';

function About() {
  return (
    <>
    <div className='w-full h-screen'>

   
    <div className='bg-black w-full'>
      <AboutPageComp_1 />

      <div className='relative bottom-[600px]'>
        <AboutPageComp_2 />
      </div>
      <div className='relative bottom-[500px]'>
        <AboutPageComp_3 />
      </div>
    </div>
    </div>
    </>
  );
}

export default About;
