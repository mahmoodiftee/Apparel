import { Outlet } from "react-router-dom";
import Navbar from "../Home/Navbar/Navbar";

const Root = () => {
  return (
    <div className="heros min-h-screen mx-auto" style={{ backgroundImage: 'url(https://i.postimg.cc/5yNyWNBp/bg-1.jpg)' }}>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;