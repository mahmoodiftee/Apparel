import logo from '../../../assets/Logos/file.png'
const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <nav>
         <img className='w-16' src={logo} alt="" />
         <p className="font-bold">
            APPAREL <br />Providing Luxury since 2023
          </p>
          <p>Copyright © 2023 - All right reserved by apparel</p>
        </nav>
        <form>
          <header className="footer-title">Newsletter</header>
          <fieldset className="form-control w-96">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input type="text" placeholder="username@site.com" className="input input-bordered pr-16" />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
    </div>
  );
};

export default Footer;