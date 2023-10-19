const Banner = () => {
  return (
    <>
      <div className="w-full h-screen bg-[url('https://i.postimg.cc/ncgPbRVX/5425537.png')] bg-cover grid md:grid-cols-2  justify-center">
        <div className="hidden md:block"></div>
        <div className="flex h-full w-full pr-60 lg:p-0 items-center text-[#6f6f6f] ">
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1200">
            <h3 className="text-xl  md:text-3xl">SALE UP TP</h3>
            <h1 className="text-7xl md:text-[200px] font-bold">70%</h1>
            <h3 className="text-xl md:text-3xl text-end">OFF</h3>
            <button className="bg-black hover:shadow-inner text-white hover:bg-base-200 font-semibold hover:text-black border-none btn btn-sm lg:btn-md lg:btn-wide">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;