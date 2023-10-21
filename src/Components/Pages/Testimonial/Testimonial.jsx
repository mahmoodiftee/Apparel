import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useEffect, useState } from 'react';
import json from '../../../../public/blog.json';
const Testimonial = () => {
  const [tests, setTests] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setTests(json);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  const generateStarRating = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <input
          key={i}
          type="radio"
          name={`rating-${rating}`}
          className={`mask mask-star-2 bg-orange-400 ${i <= rating ? 'bg-orange-400' : 'bg-gray-300'}`}
        />
      );
    }
    return stars;
  };
  return (
    <div className="hidden md:block relative">
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl sm:text-3xl lg:text-3xl font-bold">Testimonials</h2>
        <div className='border-2 my-2 border-base-200 w-[250px]'></div>
      </div>
      <div className='lg:py-20 lg:px-20'>
        <Swiper className='' spaceBetween={40} slidesPerView={3} onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)} >
          {tests.map(test => (
            <div key={test.id} className=''>
              <SwiperSlide className='flex justify-center bg-base-200 rounded-xl items-center '>

                <div className="relative flex w-full h-[212px]  px-4 max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border shadow-none">

                  <div className="relative flex items-center   pt-0 pb-8 px-4 mt-4 overflow-hidden bg-transparent shadow-none rounded-xl bg-clip-border">
                    <img
                      src={test.bg}
                      alt="tania andrew"
                      className="relative h-[58px] w-[70px] rounded-full object-cover object-center"
                    />
                    <div className="flex w-full flex-col ml-4 gap-2">
                      <div className="flex items-center justify-between">

                        <h5 className="block font-sans text-xl antialiased font-semibold leading-snug">
                          {test.author}
                        </h5>

                        <div className="rating ml-2 rating-xs">
                          {generateStarRating(test.rating)}
                        </div>

                      </div>
                      <div className='flex gap-4 items-center'> 
                        <p className=" font-sans text-base antialiased font-normal leading-relaxed text-blue-gray-900">
                          {test.nickname}
                        </p>
                        <p className=" font-sans text-sm antialiased font-light leading-relaxed text-blue-gray-900">
                          {test.date}
                        </p>
                      </div>
                      
                    </div>
                  </div>

                  <div className="p-0 mb-6  px-4">
                    <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                      {test.test}
                    </p>
                  </div>

                </div>

              </SwiperSlide>
            </div>
          )
          )}
        </Swiper>
      </div>

    </div>
  );
};

export default Testimonial;