import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from '../src/assets/Logos/file.png';
import { Button } from "@material-tailwind/react";
import { BsArrowRightShort } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const Start = () => {
  const [logoVisible, setLogoVisible] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const logoAnimationDuration = 1200;

    const showLogo = () => {
      setLogoVisible(true);
    };

    setTimeout(showLogo, logoAnimationDuration);
  }, []);

  return (
    <div className='w-full absolute min-h-screen flex flex-col justify-center items-center bg-white'>
      <img
        data-aos={logoVisible ? '' : 'fade-up'}
        data-aos-easing="linear"
        data-aos-duration="1200"
        className={`mx-auto h-1/4 w-1/4 ${logoVisible ? 'opacity-100' : 'opacity-0'} transition-opacity`}
        src={logo}
        alt="logo"
      />
      {logoVisible && (
        <Link to={'/Home'}>
          <Button data-aos="fade-up" size="lg" color="white" className="flex text-[10px] lg:text-xl font-semibold hover:bg-[#47403e] hover:text-white items-center lg:gap-2 relative px-2 lg:px-4 lg:py-1 rounded-lg btn-ghost -top-[20px] left-[90px] lg:left-[180px]  lg:-top-[72px]">
            Click To Enter The Website
            <BsArrowRightShort className='text-xl font-extrabold'></BsArrowRightShort>
          </Button>
        </Link>
      )}
    </div>
  );
};

export default Start;
