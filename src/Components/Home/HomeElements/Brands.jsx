import { useEffect, useState } from 'react';
import json from '../../../../public/brands.json';
import { Link } from 'react-router-dom';

const Brands = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setBrands(json);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='pb-10 px-4 sm:px-10 relative'>
      <h1 className='text-3xl sm:text-4xl lg:text-6xl text-[#e5e5e5] pt-10 font-bold text-center font-[Sarina]'>FashionBrands</h1>
      <h1 className='text-2xl lg:text-4xl absolute top-[45px] lg:top-[60px] left-[50%] transform -translate-x-1/2 text-black font-sans font-bold text-center'>Popular Brands</h1>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 my-8'>
        {brands.map(brand => (
          <Link to={`/brandProducts/${brand.name}`} key={brand.id}>
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
              <div className="relative overflow-hidden text-gray-700 bg-white shadow-lg rounded-xl bg-clip-border">
                <img className='w-full h-48 object-cover' src={brand.img} alt={brand.name} />
              </div>
              <h4 className="block my-2 text-center font-sans text-xl sm:text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                {brand.name}
              </h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Brands;
