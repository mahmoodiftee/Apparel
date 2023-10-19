import { useContext } from 'react';
import { BiSolidCart } from 'react-icons/bi';
import { BsFillPersonFill } from 'react-icons/bs';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Navbar = () => {
  const navigate = useNavigate();
  const { user, SignOut, } = useContext(AuthContext)
  if (user) {
    console.log(user.name);
    console.log(user.email);
    console.log(user.photoURL);
  }
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
    <li> <NavLink to={"/cart"}> My Cart </NavLink> </li>
  </>
  return (
    <div>
      <div className="navbar bg-black lg:px-8">
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

          {user && user.email ? (
            <div className="flex-none">
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn mr-3 btn-ghost btn-circle">
                  <div className="indicator">
                    <BiSolidCart className='text-white text-4xl'></BiSolidCart>
                    <span className="badge badge-sm indicator-item">8</span>
                  </div>
                </label>
                <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                  <div className="card-body">
                    <span className="font-bold text-lg">8 Items</span>
                    <span className="text-info">Subtotal: $999</span>
                    <div className="card-actions">
                      <button className="btn btn-primary btn-block">My Cart</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dropdown dropdown-end">
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
  );
};

export default Navbar;