import React from "react";
import "../Components/Navbar.css";
import Logo from "/Users/saefullah/padel-app/src/Padel-app-Assets/Logo.png";

function Navbar() {
  return (
    <div id="navBody">
      <div className="thinBar"></div>
      <div className="thickBar"></div>
      <div className="Container">
        <div className="homebutton">
          <button>Home</button>
        </div>

        <div className="Shop">
          <button>Shop</button>
        </div>

        <div className="About">
          <button>About</button>
        </div>

        <div className="Contact">
          <button>Contact</button>
        </div>

        <img className="Logo" src={Logo} alt="Logo" />

        <div className="Cart">
          <button>Cart</button>
          {/* to add cart modal sidebar */}
        </div>
      </div>
      <div className="thickBar"></div>
      <div className="thinBar"></div>
    </div>
  );
}

export default Navbar;
