import { Link, useLoaderData, useParams } from "react-router-dom";
import BrandProductsCards from "./BrandProductsCards";
import gif from '../../../assets/n.gif'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image'
import shadow from '../../../assets/shadow.png'
const BrandProducts = () => {


  const brandName = useParams().brandName;
  const brandProducts = useLoaderData();

  const filteredProducts = brandProducts.filter((product) => product.selectedBrand === brandName);
  return (
    filteredProducts?.length > 0 ? (

      <div className="relative">
        <div className="px-2 lg:px-10">
          <Slide images={filteredProducts.map((product) => product.photo)}>
            {filteredProducts.map((product, index) => (
              <div key={index} className="flex flex-col lg:flex-row items-center justify-center lg:h-[600px] gap-x-4 gap-y-4">
                <div className="lg:w-1/4 md:w-1/2">
                  <h3 className="text-xl md:text-3xl">{product.name}</h3>
                </div>
                <div className="lg:w-1/4 md:w-1/2">
                  <img className="w-96" src={product.photo} alt={product.name} />
                  <img className="w-96 h-24" src={shadow} alt="" />
                </div>
                <div className="lg:w-1/4 md:w-1/2">
                  <h3 className="text-xl md:text-3xl">SALE UP TO</h3>
                  <h1 className="text-7xl text-center text-red-600 md:text-[100px] font-bold">{product.discount}</h1>
                  <h3 className="text-xl md:text-3xl text-end">OFF</h3>
                  <div className="flex justify-center lg:justify-start">
                    <button className="bg-black hover:shadow-inner text-white hover:bg-base-200 font-semibold hover:text-black border-none btn btn-sm lg:btn-md lg:btn-wide">Buy Now</button>
                  </div>
                </div>
              </div>
            ))}
          </Slide>


        </div>

        <div className="relative">
          <h1 className='text-4xl sm:text-4xl lg:text-[80px] text-[#e5e5e5] pt-10 font-bold text-center font-[Sarina]'>Products</h1>
          <h1 className='text-xl lg:text-4xl absolute top-[50px] lg:top-[52px] left-[50%] transform -translate-x-1/2 text-black font-sans font-bold text-center'>FEATURED PRODUCTS</h1>
          <div className="grid lg:px-80 py-24 grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 px-4">
            {
              filteredProducts.map((product) => (
                <BrandProductsCards key={product._id} product={product} />
              ))
            }
          </div>
        </div>
      </div>
    ) : (

      <div className="flex flex-col lg:h-[700px]  justify-center items-center">
        <img className="w-60" src={gif} alt="" />
        <Link to={"/Home"}>
          <button className="ml-10 mt-10  bg-black rounded-none flex justify-center items-center gap-2 hover:shadow-inner text-white hover:bg-base-200 font-semibold hover:text-black border-none btn btn-sm lg:btn-md lg:btn-wide">
            GO BACK</button>
        </Link>
      </div>
    )
  );
};

export default BrandProducts;

