import { useLoaderData, useParams } from "react-router-dom";
import BrandProductsCards from "./BrandProductsCards";

const BrandProducts = () => {
  const brandName = useParams().brandName;
  const brandProducts = useLoaderData();

  const filteredProducts = brandProducts.filter((product) => product.selectedBrand === brandName);

  return (
    <div className="relative">
      <div className="w-full h-screen bg-[url('https://i.postimg.cc/ncgPbRVX/5425537.png')] bg-cover grid md:grid-cols-2  justify-center">
        <div className="hidden md:block"></div>
        <div className="flex h-full w-full pr-60 lg:p-0 items-center text-[#6f6f6f] ">
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1200">
            <h3 className="text-xl  md:text-3xl">SALE UP TP</h3>
            <h1 className="text-7xl md:text-[200px] font-bold">70%</h1>
            <h3 className="text-xl md:text-3xl text-end">OFF</h3>
            <button className="bg-black hover:shadow-inner text-white hover:bg-base-200 font-semibold hover:text-black border-none btn btn-sm lg:btn-md lg:btn-wide">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="relative">
        <h1 className='text-3xl sm:text-4xl lg:text-[80px] text-[#e5e5e5] pt-10 font-bold text-center font-[Sarina]'>Products</h1>
        <h1 className='text-2xl lg:text-4xl absolute top-[45px] lg:top-[52px] left-[50%] transform -translate-x-1/2 text-black font-sans font-bold text-center'>FEATURED PRODUCTS</h1>
        <div className="grid lg:px-80 py-24 grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 px-4">
          {
            filteredProducts.map((product) => (
              <BrandProductsCards key={product._id} product={product} />
            ))
          }
        </div>

      </div>
    </div>
  );
};

export default BrandProducts;