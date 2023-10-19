import { FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const SocialLogin = () => {


  const { GoogleSignIn } = useContext(AuthContext)
  const location = useLocation();
  const navigate = useNavigate()
  const handleGoogleLogIn = () => {
    GoogleSignIn()
      .then(() => {
        toast.success('user logged in successfully');
        navigate(location?.state ? location.state : '/');
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }
  return (
    <div>
      <div className="divider text-black"> continue with</div>
      <div className="flex gap-6 justify-center items-center">
        <FaGoogle onClick={() => handleGoogleLogIn()} className="btn btn-circle bg-white border-none hover:bg-white text-[41px] cursor-pointer" ></FaGoogle>
      </div>
    </div>
  );
};

export default SocialLogin;