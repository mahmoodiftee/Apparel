import { useLoaderData, useNavigate } from "react-router-dom";
import { BsCart4 } from 'react-icons/bs';
import Swal from 'sweetalert2';
const Detail = () => {
  const product = useLoaderData();
  const {_id} = product;
const navigate = useNavigate();
  const handleDelete = _id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/product/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'Your Product has been deleted.',
                'success'
              )
            }
            navigate('/Home');
          })
      }
    })
  }


  return (
    <div className="hero min-h-screen bg-white">
      <div className="hero-content flex-col lg:gap-40 lg:flex-row">
        <div className="max-w-md lg:-ml-20 lg:max-w-[550px] flex-shrink-0">
          <img src={product.photo} className="w-full h-full object-cover" />
        </div>
        <div className="flex-grow gap-4">
          <p className="text-xl mb-4 font-thin">{product.name}</p>
          <p className="text-4xl mb-4 text-red-500  font-bold">$ {product.price}</p>
          <p className="text-sm mb-4 text-gray-600 font-thin"> <span className="text-sm text-gray-700  font-bold">Brand:</span> {product.selectedBrand}</p>
          <p className="text-sm mb-4 text-gray-600 font-thin"><span className="text-sm  text-gray-700 font-bold">Rating: </span> {product.rating}</p>
          <p className="text-sm mb-4 max-w-[650px] text-gray-600 font-thin"><span className="text-sm  text-gray-700 font-bold">Details: </span> {product.description}</p>

          <div className="flex flex-col md:flex-row justify-start gap-4">
            <button className="bg-black rounded-none flex justify-center items-center gap-2 hover:shadow-inner text-white hover:bg-base-200 font-semibold hover:text-black border-none btn btn-sm lg:btn-md lg:btn-wide">
              <BsCart4 className="h-6 w-6"></BsCart4>
              ADD TO CART</button>
            <button
              onClick={() => handleDelete(_id)}
              className="bg-black rounded-none hover:shadow-inner text-white hover:bg-base-200 font-semibold hover:text-black border-none btn btn-sm lg:btn-md lg:btn-wide">
              DELETE PRODUCT</button>
          </div>

        </div>
      </div>
    </div>

  );
};

export default Detail;