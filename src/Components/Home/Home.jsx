import Products from "../Pages/Products/Products";
import Testimonial from "../Pages/Testimonial/Testimonial";
import Footer from "./Footer/Footer";
import Banner from "./HomeElements/Banner";
import Brands from "./HomeElements/Brands";
import Navbar from "./Navbar/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar></Navbar>
      <Banner></Banner>
      <Brands></Brands>
      <Products></Products>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </div>
  );
};

export default Home;