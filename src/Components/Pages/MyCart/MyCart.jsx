import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const MyCart = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const [userProducts, setUserProducts] = useState([]);
  console.log(userProducts);
  useEffect(() => {
    if (email) {
      // Fetch products associated with the user's email
      fetch(`http://localhost:5000/user?email=${email}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);

          // Find the user record for the logged-in user
          const currentUserRecord = data.find((userRecord) => userRecord.email === email);

          if (currentUserRecord) {
            // Check if 'product' is an object, and convert it to an array
            const userProductsArray = Array.isArray(currentUserRecord.product)
              ? currentUserRecord.product
              : [currentUserRecord.product];

            // Extract and set the user's products from the response
            setUserProducts(userProductsArray);
          }
        })
        .catch((error) => {
          console.error('Error fetching user products:', error);
        });
    }
  }, [email]);

  return (
    <div>
      <h2>My Cart</h2>
        {userProducts.map((product) => (
          <div key={product._id}>
            <Card className="w-96">
              <CardHeader shadow={false} floated={false} className="h-96">
                <img
                  src={product.photo}
                  alt="card-image"
                  className="h-full w-full object-cover"
                />
              </CardHeader>
              <CardBody>
                <div className="mb-2 flex items-center justify-between">
                  <Typography color="blue-gray" className="font-medium">
                    {product.name}
                  </Typography>
                  <Typography color="blue-gray" className="font-medium">
                    {product.price}
                  </Typography>
                </div>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal opacity-75"
                >
                  {product.description}
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button
                  ripple={false}
                  fullWidth={true}
                  className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                >
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          </div>
        ))}
    </div>
  );
};

export default MyCart;
