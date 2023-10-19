import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  console.log(location.pathname);
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <div className="flex justify-center items-center">
      <span className="loading loading-bars loading-lg"></span>
    </div>
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/signin"}></Navigate>;
};

export default PrivateRoute;
