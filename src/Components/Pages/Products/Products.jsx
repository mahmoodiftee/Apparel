import { useLoaderData } from "react-router-dom";
import SingleProduct from "./SingleProduct";
import React, { useState } from 'react';

const Products = () => {
  const products = useLoaderData();
  const [showAll, setShowAll] = useState(false);

  const visibleProducts = showAll ? products : products.slice(0, 12);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div>
      <div className="relative pb-32">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl sm:text-3xl lg:text-3xl font-bold">Products</h2>
          <div className='border-2 my-2 border-base-200 w-[250px]'></div>
        </div>
        <div className="grid pt-8 pb-12 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-2 lg:px-10">
          {
            visibleProducts.map((product) => (
              <SingleProduct key={product._id} product={product} />
            ))
          }
        </div>
        <div className="flex justify-center">
          {products.length > 10 && (
            <button onClick={toggleShowAll} className="btn w-1/8 h-10 btn-sm rounded-none hover:shadow-inner bg-black text-white hover:bg-base-200 hover:text-black btn-ghost">{showAll ? 'Show Less' : 'Show All'}</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
