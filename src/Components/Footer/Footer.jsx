import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Omar Kasera</h1>

        <span className="footer__copy">
          <a href="#" className="footer__link">
            &#169; Omar Kasera. All rigths reserved.
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
