import React, { useState } from "react";
import Cart from "../Storeinfo/Cart";

const Navbar = () => {
  // dropdown
  const [dropshow, setDropshow] = useState(false);
  const dropshownew = () => {
    setDropshow(!dropshow);
  };

  const openset = () => {
    window.open("/", "_self");
  };

  const [showdiv, setShowdiv] = useState("false");

  const opencart = () => {
    setShowdiv(!showdiv);
  };

  return (
    <div>
      <div className="container">
        <div className="textalig">
          <h1 className="h1tag" onClick={openset}>
            ontheshelf
          </h1>
        </div>
        <div className="searchbox">
          <input type="text" placeholder="Search product" className="search" />
        </div>
        <img
          src="123.png"
          alt="img"
          onClick={opencart}
          className="image185"></img>
        <img src="12455.png" alt="img" className="image"></img>
        <select name="user" id="">
          <option value="">Profile</option>
          <option value="">Setting</option>
          <option value="">About</option>
          <option value="">Contact US</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
