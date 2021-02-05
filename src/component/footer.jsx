import React from "react";
import "./footer.css";
import wcs from "../image/wcs.png";
import facebook from "../image/facebook.png";
import twitter from "../image/twitter.png";
import instagram from "../image/insta.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <a href="https://www.wildcodeschool.com/fr-FR">
          <img src={wcs} alt="logo wcs" className="footer-wcs" />
        </a>
        <p>By: Fabien</p>
      </div>
      <div className="footer-right">
        <a href="https://fr-fr.facebook.com/">
          <img src={facebook} alt="Facebook" className="footer-rs" />
        </a>
        <a href="https://twitter.com/">
          <img src={twitter} alt="Twitter" className="footer-rs" />
        </a>
        <a href="https://www.instagram.com/">
          <img src={instagram} alt="Instagram" className="footer-rs" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
