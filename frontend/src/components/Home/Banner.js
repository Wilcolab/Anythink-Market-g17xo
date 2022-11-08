import React, { useState } from "react";
import logo from "../../imgs/logo.png";
import SearchBox from "./SearchBox";

const Banner = () => {
  const [showSearchBox, setShowSearchBox] = useState(false);

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span id="get-part">A place to </span>
          <span
            onClick={() => {
              setShowSearchBox(true);
            }}
          >
            get
          </span>
          {showSearchBox && <SearchBox />}
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
