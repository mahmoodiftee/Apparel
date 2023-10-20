import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import Navbar from '../../Home/Navbar/Navbar';

const AddProduct = () => {
  const navigate = useNavigate();
  const handleAddProduct = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const description = e.target.description.value;
    const photo = e.target.photo.value;
    const price = e.target.price.value;
    const rating = e.target.rating.value;
    const selectedBrand = e.target.brand.value;
    const selectedProductType = e.target.productType.value;
    const newProduct = { name, description, price, photo, rating, selectedBrand, selectedProductType }
    console.log(newProduct);

    //send data to server 
    fetch('https://apparel-server.vercel.app/product', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newProduct)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Product Successfully Added',
            showConfirmButton: false,
            timer: 1500
          })
          e.target.reset();
          navigate('/');
        }
      })

  }

  return (
    <div>
      <Navbar></Navbar>
      <div className='flex pt-4 pb-10 lg:pb-10 justify-center items-center px-6'>
        <div className="card flex-shrink-0 w-full  max-w-[1000px] shadow-2xl bg-base-100">
          <header className=" text-black mt-8 mb-4 text-center normal-case font-bold text-xl lg:text-3xl">Add New Product</header>
          <form onSubmit={handleAddProduct} className="card-body">
            <div className='flex flex-col lg:flex-row justify-between gap-6'>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[16px] text-black font-medium">Name</span>
                </label>
                <input type="text" name='name' placeholder="Enter Product Name" className="p-2 rounded-lg bg-base-200 input-bordered w-full lg:w-[400px]  pr-16" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[16px] text-black font-medium">Choose Brand</span>
                </label>
                <select name="brand" defaultValue="Pick One" className="select border-none text-[#9ca3af] font-medium p-2 rounded-lg bg-base-200 input-bordered w-full lg:w-[400px] pr-16">
                  <option value="Adidas">Adidas</option>
                  <option value="Chanel">Chanel</option>
                  <option value="Louis Vuitton">Louis Vuitton</option>
                  <option value="Nike">Nike</option>
                  <option value="Lacoste">Lacoste</option>
                  <option value="Zara">Zara</option>
                </select>
              </div>
            </div>
            <div className='flex flex-col lg:flex-row justify-between gap-6'>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[16px] text-black font-medium">Product Type</span>
                </label>
                <select name="productType" defaultValue="Pick One" className="select border-none text-[#9ca3af] font-medium p-2 rounded-lg bg-base-200 input-bordered w-full lg:w-[400px] pr-16">
                  <option value="Cloth">Cloth</option>
                  <option value="Shoe">Shoe</option>
                  <option value="Bag">Bag</option>
                  <option value="perfume">perfume</option>
                  <option value="watch">watch</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[16px] text-black font-medium">price</span>
                </label>
                <input type="text" name='price' placeholder="Enter Your Taste" className="p-2 rounded-lg bg-base-200 input-bordered w-full lg:w-[400px]  pr-16" required />
              </div>
            </div>
            <div className='flex flex-col lg:flex-row justify-between gap-6'>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[16px] text-black font-medium">Photo URL</span>
                </label>
                <input type="text" name='photo' placeholder="Enter the photo url" className="p-2 rounded-lg bg-base-200 input-bordered w-full lg:w-[400px]  pr-16" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[16px] text-black font-medium">Rating</span>
                </label>
                <input type="text" name='rating' placeholder="Enter Coffee Details" className="p-2 rounded-lg bg-base-200 input-bordered w-full lg:w-[400px]  pr-16" required />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[16px] text-black font-medium">Short Description About Product</span>
              </label>
              <input type="text" name='description' placeholder="Describe Your Product" className="p-2 rounded-lg bg-base-200 input-bordered w-full pr-16" required />
            </div>
            <div className='flex justify-center items-center mt-4'>
              <input type='submit' value="Add Product" className="bg-black hover:shadow-inner text-white hover:bg-base-200 font-semibold hover:text-black border-none btn btn-sm lg:btn-md lg:btn-wide" />
            </div>
          </form>
        </div>
      </div>
    </div >
  );
};

export default AddProduct;