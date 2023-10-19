import Products from "../Pages/Products/Products";
import Banner from "./HomeElements/Banner";
import Brands from "./HomeElements/Brands";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Banner></Banner>
      <Brands></Brands>
      <Products></Products>
    </div>
  );
};

export default Home;