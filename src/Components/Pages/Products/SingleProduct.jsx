const SingleProduct = ({ product }) => {
  const { name, photo, rating, price, selectedBrand, selectedProductType } = product;
  // console.log(product);
  return (
    <div>
      <div className="card  bg-white  card-compact shadow-xl">
        {/* <div className="badge bg-red-600 text-white m-1">50% off</div> */}
        <figure className="h-[200px] lg:h-[200px]">
          <img className="h-full object-cover" src={photo} alt="car" />
        </figure>
        <div className="cards h-[160px]">
          <h2 className="text-sm font-medium">Name: <span className="text-[12px] font-normal"> {name}</span>  </h2>
          <h2 className="text-sm font-medium">Brand: <span className="text-[12px] font-normal"> {selectedBrand}</span> </h2>
          <h2 className="text-sm font-medium">Product Type: <span className="text-[12px] font-normal"> {selectedProductType}</span> </h2>
          <h2 className="text-sm font-medium">Price: <span className="text-[12px] font-normal"> {price} </span></h2>
          <h2 className="text-sm font-medium">Rating: <span className="text-[12px] font-normal"> {rating} </span></h2>
        </div>
          <div className="card-actions pb-4 justify-center">
            <button className="btn btn-neutral btn-sm">Details!</button>
          </div>
      </div>
    </div>
  );
};

export default SingleProduct;