import React from 'react';
import AboutPageComp_1 from '../../Components/AboutPageComponents/AboutPageComp_1';
import AboutPageComp_2 from '../../Components/AboutPageComponents/AboutPageComp_2';
import AboutPageComp_3 from '../../Components/AboutPageComponents/AboutPageComp_3';
import Contact from '../Contact/Contact';
import HomeCom_9 from '../../Components/HomePageComponents/HomeCom_9';


function About() {
  return (
    <>
    <div className='w-full '>
    <div className='bg-black w-full'>
      <AboutPageComp_1 />

      <div className='relative bottom-[600px]'>
        <AboutPageComp_2 />
      </div>
      <div className='relative bottom-[500px]'>
        <AboutPageComp_3 />
      </div>
      <div className='relative bottom-[400px]'>
        <Contact />
      </div>
      <div>
        <HomeCom_9 />
      </div>
    </div>
    </div>
    </>
  );
}

export default About;
