import { Link } from 'react-router-dom';
const ErrorPage = () => {
  return (
    <div className='bg-white h-screen'>
      <img className='mx-auto' src='https://i.ibb.co/RHXVBMn/404.gif' alt="" />

      <div className='flex justify-center '>
        <Link to={"/Home"}><button className="btn btn-sm lg:btn-lg hover:shadow-inner bg-black text-white hover:bg-base-200 hover:text-black btn-ghost">GO TO HOME</button></Link>
      </div>
    </div>
  );
};

export default ErrorPage;