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
    <div className='pb-4 px-4 sm:px-10 relative'>
      {/* <h1 className='text-3xl sm:text-4xl lg:text-5xl text-[#e5e5e5] pt-10 font-bold text-center font-[Sarina]'>FashionBrands</h1> */}
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl sm:text-3xl lg:text-3xl font-bold">Top Fashion Brands</h2>
        <div className='border-2 my-2 border-base-200 w-[250px]'></div>
      </div>
      {/* <h1 className='text-2xl lg:text-4xl absolute top-[45px] lg:top-[45px] left-[50%] transform -translate-x-1/2 text-black font-sans font-bold text-center'>Popular Brands</h1> */}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 my-8'>
        {brands.map(brand => (
          <Link to={`/brandProducts/${brand.name}`} key={brand.id}>
            <div className="card bg-base-100 shadow-xl">
              <figure className="px-10 pt-10 w-full h-48">
                <img src={brand.img} alt={brand.name} className="rounded-xl " />
              </figure>
              <div className="card-body items-center h-[120px] text-center">
                <h2 className="card-title">{brand.name}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Brands;
