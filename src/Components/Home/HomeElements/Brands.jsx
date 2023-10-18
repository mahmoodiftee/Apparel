import { SiNike } from 'react-icons/si';
import { CgAdidas } from 'react-icons/cg';
import { SiZara } from 'react-icons/si';
import { CgChanel } from 'react-icons/cg';
const Brands = () => {
  return (
    <div className='bg-black'>
      <h1 className='text-3xl lg:text-6xl text-gray-200 pt-10 font-bold text-center font-[Sarina]'>Popular Brands</h1>
    <hr className='border w-[350px] lg:w-[600px] mx-auto border-red-500' />
    
    <div className="grid grid-cols-4 md:grid-cols-4">
        <div className='flex gap-4 flex-col hover:text-red-600 justify-center text-white min-h-[200px] lg:min-h-[300px] items-center'><SiNike className='text-5xl hover:text-6xl lg:text-8xl lg:hover:text-9xl border-b-2 hover:border-white border-red-500'>
        </SiNike>
          <p className='' >Nike</p>
        </div>
        <div className='flex gap-4 flex-col hover:text-red-600 justify-center text-white min-h-[200px] lg:min-h-[300px] items-center'><CgChanel className='text-5xl hover:text-6xl  pb-[12px] lg:text-8xl lg:hover:text-9xl border-b-2 hover:border-white border-red-500'>
        </CgChanel>
          <p className='' >Chanel</p>
        </div>
        <div className='flex gap-4 flex-col hover:text-red-600 justify-center text-white min-h-[200px] lg:min-h-[300px] items-center'><SiZara className='text-5xl hover:text-6xl lg:text-8xl lg:hover:text-9xl border-b-2 hover:border-white border-red-500'>
        </SiZara>
          <p className='' >Zara</p>
        </div>
        <div className='flex gap-4 flex-col hover:text-red-600  justify-center text-white min-h-[200px] lg:min-h-[300px] items-center'><CgAdidas className='text-5xl pb-[6px] hover:text-6xl lg:text-8xl lg:hover:text-9xl border-b-2 hover:border-white border-red-500'>
        </CgAdidas>
          <p className='' >Adidas</p>
        </div>
      </div>
    </div>
  );
};

export default Brands;