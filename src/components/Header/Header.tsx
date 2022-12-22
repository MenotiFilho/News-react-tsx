import Logo from "../Header/images/logo 1.svg";
import styles from "./index.css";

function Header() {
  return (
    <div>
      <nav className=" mx-20 my-4 w-1440px">
        <div className="container flex items-center justify-between mx-auto">
          <img src={Logo} className="h-9 flex items-center" alt="Logo" />

          <div className="w-auto">
            <ul className="flex gap-11">
              <li>
                <p className="">Home</p>
              </li>
              <li>
                <p className="">About</p>
              </li>
              <li>
                <p className="">Services</p>
              </li>
              <li>
                <p className="">Pricing</p>
              </li>
              <li>
                <p className="">Contact</p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;

/*<div className="flex place-content-between mx-20 my-14 w-full">
      <img src={Logo} alt="Logo" className="flex content-center" />

      <div className="flex gap-11">
        <p className="">Home</p>
        <p>New</p>
        <p>Popular</p>
        <p>Trending</p>
        <p>Categories</p>
      </div>
    </div>*/
