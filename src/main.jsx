import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from './Components/Root/Root';
import Start from './Start';
import Home from './Components/Home/Home';
import AddProduct from './Components/Pages/ADD PRODUCT/AddProduct';
import BrandProducts from './Components/Pages/BrandProducts/BrandProducts';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Start></Start>,
      },

      {
        path: "/Home",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/product')
      },
      {
        path: "/AddProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/brandProducts/:brandName",
        element: <BrandProducts></BrandProducts>,
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/product?selectedBrand=${params.brandName}`);
        }
      }


    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
