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
import SignIn from './Components/Pages/SignIn/SignIn';
import SignUp from './Components/Pages/SignUp/SignUp';
import AuthProvider from './Components/AuthProvider/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
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
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/AddProduct",
        element: <PrivateRoute> <AddProduct></AddProduct></PrivateRoute>,
      },
      {
        path: "/brandProducts/:brandName",
        element: <PrivateRoute> <BrandProducts></BrandProducts></PrivateRoute>,
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/product?selectedBrand=${params.brandName}`);
        }
      },
      {
        path: "/details/:id",
        element: <PrivateRoute> <Detail></Detail></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`)
      },
      {
        path: "/edit/:id",
        element: <Update></Update>,
        loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`)
      }


    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
