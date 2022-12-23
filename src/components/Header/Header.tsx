import { Link } from "react-router-dom";

import Logo from "../Header/images/logo 1.svg";

function Header() {
  return (
    <div className="flex w-full items-center justify-between mx py-5">
      <Link to="/Home">
        <img src={Logo} className="h-9" alt="Logo" />
      </Link>
      <div className="">
        <ul className="flex gap-11">
          <li>
            <Link
              to="/Home"
              className="font-inter text-dark-grayish-blue font-medium text-xl hover:text-soft-red"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/New"
              className="font-inter text-dark-grayish-blue font-medium text-xl hover:text-soft-red"
            >
              New
            </Link>
          </li>
          <li>
            <Link
              to="/Popular"
              className="font-inter text-dark-grayish-blue font-medium text-xl hover:text-soft-red"
            >
              Popular
            </Link>
          </li>
          <li>
            <Link
              to="/Trending"
              className="font-inter text-dark-grayish-blue font-medium text-xl hover:text-soft-red"
            >
              Trending
            </Link>
          </li>
          <li>
            <Link
              to="/Categories"
              className="font-inter text-dark-grayish-blue font-medium text-xl hover:text-soft-red"
            >
              Categories
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
