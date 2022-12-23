import { Link } from "react-router-dom";

import Image3 from "../images/image-gaming-growth 1.svg";
import Image1 from "../images/image-retro-pcs 1.svg";
import Image2 from "../images/image-top-laptops 1.svg";

function Articles() {
  return (
    <div className="flex flex-auto font-inter mt-16">
      <div className=" flex w-full gap-5">
        <div>
          <Link to="/">
            <img src={Image1} className=" flex items-center" alt="Image1" />{" "}
          </Link>
        </div>
        <div className="flex flex-col w-8/12 gap-4">
          <Link to="/">
            <div className="text-3xl font-bold text-grayish-blue">01</div>{" "}
          </Link>
          <Link to="/">
            <div className="text-xl font-bold hover:text-soft-red">
              Reviving Retro PCs
            </div>
          </Link>
          <Link to="/">
            <div className="text-base text-dark-grayish-blue">
              What happens when old PCs are given modern upgrades?
            </div>
          </Link>
        </div>
      </div>
      <div className="flex w-full gap-5">
        <div>
          <Link to="/">
            <img src={Image2} className=" flex items-center" alt="Image2" />{" "}
          </Link>
        </div>
        <div className="flex flex-col w-8/12 gap-4">
          <Link to="/">
            <div className="text-3xl font-bold text-grayish-blue">02</div>{" "}
          </Link>
          <Link to="/">
            <div className="text-xl font-bold hover:text-soft-red">
              Top 10 laptops of 2022
            </div>
          </Link>
          <Link to="/">
            <div className="text-base text-dark-grayish-blue">
              Our best picks for various needs and budgets.
            </div>
          </Link>
        </div>
      </div>
      <div className="flex w-full gap-5">
        <div>
          <Link to="/">
            <img src={Image3} className=" flex items-center" alt="Image" />{" "}
          </Link>
        </div>
        <div className="flex flex-col w-8/12 gap-4">
          <Link to="/">
            <div className="text-3xl font-bold text-grayish-blue">03</div>{" "}
          </Link>
          <Link to="/">
            <div className="text-xl font-bold hover:text-soft-red">
              The Growth of Gaming
            </div>
          </Link>
          <Link to="/">
            <div className="text-base text-dark-grayish-blue">
              How the pandemic has sparked fresh oportunities.
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Articles;
