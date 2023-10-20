import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { auth } from "../../Firebase/Firebase.config";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";


const SignUp = () => {

  const { createUser } = useContext(AuthContext)
  const navigate = useNavigate();
  const handleSignUp = async (e) => {
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    console.log(email, password, name, photoURL);
    if (password.length < 6 || !/[A-Z]/.test(password) || !/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
      Swal.fire({
        icon: 'error',
        text: 'Password must be at least 6 characters, contain one uppercase letter, and one special character',
      })
      return;
    }

    try {
      const result = await createUser(email, password);
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoURL,
      });

      const createdAt = result.user?.metadata?.createdAt;
      const user = { email, createdAt };

      Swal.fire({
        icon: 'success',
        text: 'user created successfully',
      });
      console.log('user created successfully');
      navigate("/Home");

      fetch('http://localhost:5000/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        text: `${error.message}`,
      });
      console.log(error.message);
    }


  }

  return (
    <div>
      <div className="h-screen flex justify-center items-center">
        <form onSubmit={handleSignUp} className="inset-0 backdrop-filter backdrop-blur-md bg-opacity-40">
          <div className='flex justify-center items-center'>
            <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-gray-800 to-gray-600 bg-clip-border text-white shadow-lg shadow-gray-400">
                <h3 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
                  Sign Up
                </h3>
              </div>
              <div className="flex flex-col gap-4 pt-6 pl-6 pr-6">
                <div className="relative h-11 w-full min-w-[200px]">
                  <div className="form-control">
                    <input type="text" name="name" required placeholder="Your Name" className="input input-bordered" />
                  </div>
                </div>
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
                <div className="relative h-11 w-full min-w-[200px]">
                  <div className="form-control">
                    <input type="text" name="photoURL" required placeholder="Your Photo url" className="input input-bordered" />
                  </div>
                </div>
                <button
                  className="block mt-4 w-full select-none rounded-lg bg-gradient-to-tr from-gray-800 to-gray-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-400/20 transition-all hover:shadow-lg hover:shadow-gray-400 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="submit"
                  data-ripple-light="true"
                >
                  Sign Up
                </button>
              </div>
              <div className="pb-6 pl-6 pr-6 pt-0">
                <p className="mt-6 flex justify-center font-sans text-sm font-normal text-black leading-normal text-inherit antialiased">
                  Already have an account?
                  <Link to={'/signin'}
                    href="#signup"
                    className="ml-1 block font-sans text-sm font-bold leading-normal text-black antialiased"
                  >
                    Sign In
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;