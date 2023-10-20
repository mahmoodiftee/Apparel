import { useEffect, useState } from 'react';
import json from '../../../../public/blog.json';
import Navbar from '../../Home/Navbar/Navbar';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setBlogs(json);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-4 my-8'>
        {blogs.map(blog => (
          <div key={blog.id}>
            <div className="relative grid h-[25rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
            <div className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('${blog.bg}')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none`}>
                <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
              </div>
              <div className="relative p-6 px-6 py-14 md:px-12">
                <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                  {blog.title}
                </h2>
                <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
                  {blog.author}
                </h5>
                <img
                  alt="tania andrew"
                  src={blog.authorImage}
                  className="relative inline-block h-[74px] w-[74px] rounded-full border-2 border-white object-cover object-center"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;