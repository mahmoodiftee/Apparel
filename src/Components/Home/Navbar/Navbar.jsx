import { useContext, useEffect, useState } from 'react';
import { BiSolidCart } from 'react-icons/bi';
import {
  Typography,
} from "@material-tailwind/react";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Navbar = () => {

  // use theme from local storage if available or set light theme
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  // update state on toggle
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("business");
    } else {
      setTheme("light");
    }
  };

  // set theme state in localstorage on mount & also update localstorage on state change
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);


  const navigate = useNavigate();
  const { user, SignOut, } = useContext(AuthContext)
  const email = user?.email;
  const [userProducts, setUserProducts] = useState([]);

  useEffect(() => {
    if (email) {
      // Fetch products associated with the user's email
      fetch(`https://apparel-server.vercel.app/user?email=${email}`)
        .then((response) => response.json())
        .then((data) => {
          const filteredData = data.filter((item) => item.email === email);
          setUserProducts(filteredData);
        })
        .catch((error) => {
          console.error('Error fetching user products:', error);
        });
    }
  }, [email]);


  const handleSignOut = () => {
    SignOut()
    Swal.fire({
      icon: 'success',
      text: 'user signed out successfully',
    })
    navigate('/signin')
  }



  const links = <>
    <li> <NavLink to={"/Home"}> Home </NavLink> </li>
    <li> <NavLink to={"/About"}> About</NavLink> </li>
    <li> <NavLink to={"/blog"}> Blog</NavLink> </li>
    <li> <NavLink to={"/AddProduct"}> Add Product </NavLink> </li>
    <li> <NavLink to={"/mycart"}> My Cart </NavLink> </li>
  </>
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {links}
            </ul>
          </div>
          <Link to={"/Home"} className='flex justify-center items-center lg:ml-4 gap-2'>
            <img className="w-[40px] h-[40px] lg:w-[60px] lg:h-[60px]" src="https://i.ibb.co/3NZRJyH/file.png" alt="" />
            <p className="normal-case text-xl">APPAREL</p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <div>
            <label className="swap swap-rotate pt-[6px] mr-3">
              <input
                type="checkbox"
                onChange={handleToggle}
                // show toggle image based on localstorage theme
                checked={theme === "light" ? false : true}
              />
              <svg className="swap-on fill-current w-9 h-9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
              <svg className="swap-off fill-current w-9 h-9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
            </label>
          </div>
          <div>
            {user && user.email ? (
              <div className="flex-none">
                <div className="dropdown dropdown-end  pr-3">
                  <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <div className="indicator ">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                      <span className="badge badge-sm indicator-item">{userProducts.length}</span>
                    </div>
                  </label>
                  <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-60 md:w-96 bg-base-100 shadow">
                    <div className="card-body">
                      <span className="font-bold text-center text-lg">
                        {
                          userProducts.map((product) => (
                            <div key={product.product._id} >
                              <div className="mb-2 flex gap-2 items-center justify-between">
                                <Typography className="text-sm font-normal  lg:font-medium text-left ">
                                  {product.product.name}
                                </Typography>

                                <Typography color="blue-gray" className="text-sm font-normal  lg:font-medium text-right ">
                                  ${product.product.price}
                                </Typography>
                              </div>
                              <div className='border-2 my-2 border-base-200 w-full'></div>
                            </div>
                          ))
                        }
                      </span>
                      <div className="">
                        <Link to={'/mycart'}>
                          <button className="btn w-full btn-sm btn-block">My Cart</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dropdown dropdown-end ">
                  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                      <img src={user.photoURL} alt="" />
                    </div>
                  </label>
                  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-64">
                    <li><p className="">{user.displayName}</p></li>
                    <li><a>{user.email}</a></li>
                    <li><a onClick={() => handleSignOut()}>Logout</a></li>
                  </ul>
                </div>
              </div>
            ) : (
              <Link to="/signin">
                <button className="btn btn-sm hover:shadow-inner text-white hover:bg-white hover:text-black btn-ghost">Login</button>
              </Link>
            )}
          </div>
        </div>
      </div>
      {/* <div className="navbar lg:px-8">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost text-white lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm text-black dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {links}
            </ul>
          </div>
          <Link to={"/Home"}>
            <img className="w-[60px] h-[60px]" src="https://i.postimg.cc/c45npSXS/1file.png" alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-white  px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <div>
            <label className="swap swap-rotate mr-3">
              <input
                type="checkbox"
                onChange={handleToggle}
                // show toggle image based on localstorage theme
                checked={theme === "light" ? false : true}
              />
              <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
              <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
            </label>
          </div>
          <div>
            {user && user.email ? (
              <div className="flex-none">
                <div className="dropdown dropdown-end pr-3">
                  <label tabIndex={0} className="btn mr-3 btn-ghost btn-circle">
                    <div className="indicator">
                      <BiSolidCart className='text-white text-4xl'></BiSolidCart>
                      <span className="badge badge-sm bg-red-600 border-none text-white indicator-item">{userProducts.length}</span>
                    </div>
                  </label>
                  <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-60 md:w-96 bg-base-100 shadow">
                    <div className="card-body">
                      <span className="font-bold text-center text-lg">
                        {
                          userProducts.map((product) => (
                            <div key={product.product._id} >
                              <div className="mb-2 flex gap-2 items-center justify-between">
                                <Typography className="text-sm font-normal  lg:font-medium text-left ">
                                  {product.product.name}
                                </Typography>

                                <Typography color="blue-gray" className="text-sm font-normal  lg:font-medium text-right ">
                                  ${product.product.price}
                                </Typography>
                              </div>
                              <div className='border-2 my-2 border-base-200 w-full'></div>
                            </div>
                          ))
                        }
                      </span>
                      <div className="">
                        <Link to={'/mycart'}>
                          <button className="btn w-full btn-sm btn-block">My Cart</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dropdown dropdown-end ">
                  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                      <img src={user.photoURL} alt="" />
                    </div>
                  </label>
                  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-64">
                    <li><p className="">{user.displayName}</p></li>
                    <li><a>{user.email}</a></li>
                    <li><a onClick={() => handleSignOut()}>Logout</a></li>
                  </ul>
                </div>
              </div>
            ) : (
              <Link to="/signin">
                <button className="btn btn-sm hover:shadow-inner text-white hover:bg-white hover:text-black btn-ghost">Login</button>
              </Link>
            )}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Navbar;