import { MdVerified } from 'react-icons/md';
import { FaAngellist } from 'react-icons/fa';
import { FaPeopleGroup } from 'react-icons/fa6';
import bg from '../../../assets/bg.jpg';
import Navbar from '../../Home/Navbar/Navbar';
const About = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="carousel overflow-hidden h-screen w-full">
        <div className="carousel-item relative w-full">
          <img
            src={bg}
            className="w-full h-screen md:h-full object-cover"
            alt="Image 1"
          />
          {/* Black overlay with 70% opacity */}
          <div className="absolute inset-0 bg-black opacity-[80%]"></div>
          {/* Text overlay */}
          <div className="absolute inset-0 mt-16 lg:my-20 lg:pt-16 flex flex-col items-center">
            <h1
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="0"
              className="text-2xl lg:text-4xl text-white text-center font-bold">About us</h1>
            <p
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="0"
              className='mb-1 lg:my-2 px-4 lg:px-56 font-thin lg:text-base text-[10px] text-white text-center'>"Discover APPAREL, where fashion meets sustainability. Our journey began in 2023, founded with a mission to inspire confidence and self-expression. We curate quality and eco-conscious fashion, making a statement through style. Join us on this exciting fashion journey, redefining your wardrobe, one piece at a time.</p>
            <span
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="0"
              className='text-yellow-400 lg:text-base text-[10px] font-semibold'> “Unveiling Luxury, Redefining Fashion"”.</span>

            <div className="grid grid-cols-3 mb-16 lg:mb-0 mt-16 lg:mt-24 md:grid-cols-3 lg:gap-80 gap-16">
              <div
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
                className="single-shipping text-center">
                <MdVerified className='text-center text-white font-bold text-2xl lg:text-5xl mx-auto' />
                <h3 className='text-[8px] lg:text-sm  mt-2 uppercase text-white'>Quality and Sustainability</h3>
              </div>
              <div
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
                className="single-shipping text-center">
                <FaAngellist className='text-center  text-white font-bold text-2xl lg:text-5xl mx-auto' />
                <h3 className='text-[8px] lg:text-sm mt-2 uppercase text-white'>Providing Luxury</h3>
              </div>
              <div
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
                className="single-shipping text-center">
                <FaPeopleGroup className='text-center text-white font-bold text-2xl lg:text-5xl mx-auto' />
                <h3 className='text-[8px] lg:text-sm mt-2 uppercase text-white'>Customer-Centric Approach</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;