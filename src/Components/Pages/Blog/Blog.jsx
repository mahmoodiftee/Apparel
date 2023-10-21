import { useEffect, useState } from 'react';
import json from '../../../../public/blog.json';
import Navbar from '../../Home/Navbar/Navbar';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  console.log(blogs);

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
      <div className='grid grid-cols-2 md:grid-cols-3 gap-4 lg:my-8 px-4 lg:px-16 py-6'>
        {blogs.map(blog => (
          <div key={blog.id} className='flex justify-center items-center'>
            <div className="relative grid lg:h-[30rem] w-full lg:max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
              <div
                className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-clip-border bg-center text-gray-700 shadow-none"
                style={{ backgroundImage: `url(${blog.bg})` }}
              >
                <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
              </div>
              <div className="relative p-2 lg:p-6 lg:px-6 py-14 md:px-12">
                <div className='lg:h-[160px] mb-10'>
                  <h2 className="mb-6 block font-sans lg:text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                    {blog.title}
                  </h2>
                </div>
                <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-200">
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