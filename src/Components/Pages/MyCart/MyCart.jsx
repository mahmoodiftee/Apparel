import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import Navbar from "../../Home/Navbar/Navbar";
import Swal from "sweetalert2";

const MyCart = () => {

  const { user } = useContext(AuthContext);
  const email = user?.email;
  const [userProducts, setUserProducts] = useState([]);

  useEffect(() => {
    if (email) {
      // Fetch products associated with the user's email
      fetch(`https://apparel-server.vercel.app/user?email=${email}`)
        .then((response) => response.json())
        .then((data) => {
          // Filter the data to keep only the items that match the user's email
          const filteredData = data.filter((item) => item.email === email);

          // Set the userProducts state with the filtered data
          setUserProducts(filteredData);
        })
        .catch((error) => {
          console.error('Error fetching user products:', error);
        });
    }
  }, [email]);



  const handleDelete = _id => {
    console.log(_id)
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
        fetch(`https://apparel-server.vercel.app/user/${_id}`, {
          method: 'DELETE'
        }

        )
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'Your Product has been deleted.',
                'success'
              )
              const remainingUsers = userProducts.filter(userProduct => userProduct._id !== _id);
              setUserProducts(remainingUsers);
            }
          })
      }
    })
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 px-4 lg:px-16 py-16">
        {userProducts.map((product) => (
          <div key={product.product._id} className="flex-1">
            <Card className="">
              <CardHeader shadow={false} floated={false} className="h-80 flex justify-center item-center">
                <img
                  src={product.product.photo}
                  alt="card-image"
                  className="h-full w-full object-contain"
                />
              </CardHeader>
              <CardBody className="lg:-24 px-2 lg:h-[145px] lg:px-8">
                <div className="mb-2 flex items-center justify-between">
                  <Typography className="font-medium">
                    {product.product.name}
                  </Typography>
                  <Typography color="blue-gray" className="font-medium">
                    {product.product.price}
                  </Typography>
                </div>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal opacity-75 lg:w-5/6"
                >
                  {product.product.description}
                </Typography>
              </CardBody>
              <CardFooter className="pt-4 ">
                <button
                  onClick={() => handleDelete(product._id)}
                  className="bg-black rounded-none hover:shadow-inner w-full text-white hover:bg-base-200 font-semibold hover:text-black border-none btn">
                  DELETE</button>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCart;

