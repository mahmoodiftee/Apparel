import { BiSolidCart } from 'react-icons/bi';
import { BsFillPersonFill } from 'react-icons/bs';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = <>
    <li> <NavLink to={"/"}> Home </NavLink> </li>
    <li> <NavLink to={"/About"}> About</NavLink> </li>
    <li> <NavLink to={"/blog"}> Blog</NavLink> </li>
    <li> <NavLink to={"/products"}> Add Product </NavLink> </li>
  </>
  const user = true
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
                      <button className="btn btn-primary btn-block">View cart</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <BsFillPersonFill className='text-4xl text-white'></BsFillPersonFill>
                  </div>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li><a>Settings</a></li>
                  <li><a>Logout</a></li>
                </ul>
              </div>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn btn-sm hover:shadow-inner text-white hover:bg-white hover:text-black btn-ghost">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;