import { Link } from "react-router-dom";

function New() {
  return (
    <div className="flex flex-col justify-start w-fit gap-3 font-inter">
      <div className="flex flex-col bg-very-dark-blue py-6 gap-12 p-5 py-9">
        <div className="text-soft-orange font-bold text-5xl">New</div>
        <div className="flex flex-col gap-9">
          <Link to="/#">
            <div className="border-b-grayish-blue border-b pb-9 gap-2 flex flex-col">
              <div className="text-off-white font-bold text-xl hover:text-soft-orange">
                Hydrogen VS Electric Cars
              </div>
              <div className="text-grayish-blue">
                Will hydrogen-fueled cars ever catch up to EVs?
              </div>
            </div>
          </Link>
          <Link to="/#">
            <div className="border-b-grayish-blue border-b pb-9 gap-2 flex flex-col">
              <div className="text-off-white font-bold text-xl hover:text-soft-orange">
                The Downsides of AI Artistry
              </div>
              <div className="text-grayish-blue">
                What are thye possible adverse effects of on-demand AI image
                generation?
              </div>
            </div>
          </Link>
          <Link to="/#">
            <div className="gap-2 flex flex-col">
              <div className="text-off-white font-bold text-xl hover:text-soft-orange">
                Is VC Funding Drying Up?
              </div>
              <div className="text-grayish-blue">
                Private funding by VC firms is dows 50% YOY. We take a look at
                what that means.
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default New;
