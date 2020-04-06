import React from "react";
import Insta from "../src/Padel-app-Assets/Instagram_logo.png";
import FB from "../src/Padel-app-Assets/Facebook_logo.png";
import Twitter from "../src/Padel-app-Assets/Twitter_logo.png";
import Logo from "../src/Padel-app-Assets/Pad'elle-Logo.png";
import "../Components/Footer.css";

function Footer() {
  return (
    <div id="footerbody">
      <div className="border"></div>
      <div className="container">
        <div className="left">
          <h1>PAD'ELLE</h1>
          <p>Contact: email@email.com</p>
          <p>Address</p>
        </div>
        <div className="middle">
          <img className="Footer_img_Logo" src={Logo} alt="Logo" />
        </div>
        <div className="right">
          <h1>Our social media</h1>
          <div className="img_container">
            <img className="Footer_img" src={Insta} alt="Logo" />
            <img className="Footer_img" src={FB} alt="Logo" />
            <img className="Footer_img" src={Twitter} alt="Logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
