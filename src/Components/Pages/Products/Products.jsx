import { useLoaderData } from "react-router-dom";
import SingleProduct from "./SingleProduct";

const Products = () => {
  const products = useLoaderData();
  console.log(products);
  return (
    <div>
      <div className="relative ">
        <h1 className='text-3xl sm:text-4xl lg:text-[80px] text-[#e5e5e5] pt-10 font-bold text-center font-[Sarina]'>Products</h1>
        <h1 className='text-2xl lg:text-4xl absolute top-[45px] lg:top-[52px] left-[50%] transform -translate-x-1/2 text-black font-sans font-bold text-center'>BEST PRODUCTS</h1>
        <div className="grid py-24 grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 px-4">
          {
            products.map((product) => (
              <SingleProduct key={product._id} product={product} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Products;