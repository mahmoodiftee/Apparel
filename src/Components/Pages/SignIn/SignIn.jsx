import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import SocialLogin from "./SocialLogin/SocialLogin";
import Swal from "sweetalert2";


const SignIn = () => {
  const location = useLocation();
  console.log(location);
  const { LoginUser } = useContext(AuthContext)
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await LoginUser(email, password);
      Swal.fire({
        icon: 'success',
        text: 'user logged in successfully',
      })
      navigate(location?.state ? location.state : '/Home');
    }

    catch (error) {
      Swal.fire({
        icon: 'error',
        text: `${error.message}`,
      })
    }
  };

  return (
    <div>
      <div className="h-screen flex justify-center items-center">
        <form onSubmit={handleSignIn} className="inset-0 backdrop-filter backdrop-blur-md bg-opacity-40">
          <div className='flex justify-center items-center'>
            <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-gray-800 to-gray-600 bg-clip-border text-white shadow-lg shadow-gray-400">
                <h3 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
                  Sign In
                </h3>
              </div>
              <div className="flex flex-col gap-4 pt-6 pl-6 pr-6">
                <div className="relative h-11 w-full min-w-[200px]">
                  <div className="form-control">
                    <input type="email" name="email" required placeholder="email" className="input input-bordered" />
                  </div>
                </div>
                <div className="relative h-11 w-full min-w-[200px]">
                  <div className="form-control">
                    <input type="password" name="password" required placeholder="password" className="input input-bordered" />
                  </div>
                </div>
                <button
                  className="block mt-4 w-full select-none rounded-lg bg-gradient-to-tr from-gray-800 to-gray-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-400/20 transition-all hover:shadow-lg hover:shadow-gray-400 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="submit"
                  data-ripple-light="true"
                >
                  Sign In
                </button>
              </div>
              <div className="pb-6 pl-6 pr-6 pt-0">

                <p className="mt-6 font-normal flex justify-center font-sans text-sm leading-normal text-inherit antialiased">
                  Don't have an account?
                  <Link to={'/signup'}
                    href="#signup"
                    className="ml-1 block font-sans text-sm font-bold leading-normal text-black antialiased"
                  >
                    Sign Up
                  </Link>
                </p>
                <SocialLogin></SocialLogin>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;