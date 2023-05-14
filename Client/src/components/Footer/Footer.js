import React from "react";

import "./Footer.css";
const Footer = () => {
  return (
    <footer className="page-footer font-small  bg-secondary">
      <div className="overlay"></div>
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-3">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">About Us</h2>
              <p>
                We are team of problem solvers, who are trying to contribute
                towards Zero Hunger mission.
              </p>
            </div>
          </div>

          <div className="col-md-2">
            <div className="ftco-footer-widget mb-4 ml-md-4">
              <h2 className="ftco-heading-2">Site Links</h2>
              <ul className="list-unstyled">
                <li>
                  <a href="/" className="py-2 d-block">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="py-2 d-block">
                    About
                  </a>
                </li>
                <li>
                  <a href="/contact" className="py-2 d-block">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Have a Questions?</h2>
              <div className="block-23 mb-3">
                <ul className="xyz">
                  <li>
                    <a href="#">
                      <span className="text">&#9743; +91 9876543210</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="text">&#x2709; example@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>
              Copyright &copy;
              {new Date().getFullYear()} All rights reserved | This application
              is made with ☕ by <b>Us</b>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
