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
import ErrorPage from '../ErrorPage';
import Detail from './Components/Pages/Details/Detail';
import Update from './Components/Pages/Update/Update';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
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
      },
      {
        path: "/details/:id",
        element: <Detail></Detail>,
        loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`)
      },
      {
        path: "/edit/:id",
        element:<Update></Update>,
        loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`)
      }


    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
