import React from 'react';
import { Link } from 'react-router-dom';

const SingleProduct = ({ product }) => {
  const { _id, name, photo, rating, price, selectedBrand, selectedProductType } = product;
  // console.log(_id, name, photo, rating, price, selectedBrand, selectedProductType);
  // Function to generate the star rating based on the rating value
  const generateStarRating = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <input
          key={i}
          type="radio"
          name={`rating-${_id}`}
          className="mask mask-star-2 bg-orange-400"
          defaultChecked={i <= rating} // Set 'checked' to true for stars up to the rating value
        />
      );
    }
    return stars;
  };

  return (
    <div>

      {/* <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={photo} alt={name} className="rounded-xl" />
        </figure>
        <div className="card-bodys px-4 h-96 items-start text-left">
          <h2 className="card-title">{name}</h2>
          <p>Name:  {name} </p>
          <p>Brand: {selectedBrand} </p>
          <p>Product Type: {selectedProductType}</p>
          <p>Price: ${price}</p>
          <p>Rating: <div className="rating ml-2 rating-xs">  {generateStarRating()} </div> </p>
          <Link to={`/details/${_id}`} className="card-actions pt">
            <button className="btn btn-primary">DETAILS</button>
          </Link>
        </div>
      </div> */}

      <div className="card bg-base-100 shadow-xl">
        <figure className="h-[200px] lg:h-[200px]">
          <img className="h-full w-full object-contain" src={photo} alt="car" />
        </figure>
        <div className="card-bodys px-4 lg:pt-4 h-[210px] lg:h-[220px] items-start text-left">
          <div className='h-12 lg:h-7'>
            <h2 className="flex items-center gap-1 text-[16px] font-semibold">{name}</h2>
          </div>
          <p>Brand: {selectedBrand} </p>
          <p>Product Type: {selectedProductType}</p>
          <p>Price: ${price}</p>
          <p>Rating: <div className="rating ml-2 rating-xs">  {generateStarRating()} </div> </p>
          <Link to={`/details/${_id}`} className="card-actions my-4 lg:my-8 justify-center items-center pt">
            <button className="btn btn-sm lg:w-5/6">DETAILS</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
