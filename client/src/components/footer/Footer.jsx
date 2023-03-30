import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="card footer">
          <div className="section footer-top">
            <div className="footer-brand">
              <a href="#" className="logo">
                <img
                  src="./assets/images/logo.svg"
                  width="119"
                  height="37"
                  loading="lazy"
                  alt="Wren logo"
                />
              </a>

              <p className="footer-text">
                When an unknown prnoto sans took a galley and scrambled it to
                make specimen book not only five When an unknown prnoto sans
                took a galley and scrambled it to five centurie.
              </p>

              <p className="footer-list-title">Address</p>

              <address className="footer-text address">
                123 Main Street <br />
                New York, NY 10001
              </address>
            </div>

            <div className="footer-list">
              <p className="footer-list-title">Categories</p>

              <ul>
                <li>
                  <a href="#" className="footer-link hover-2">
                    Action
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link hover-2">
                    Business
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link hover-2">
                    Adventure
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link hover-2">
                    Canada
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link hover-2">
                    America
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link hover-2">
                    Curiosity
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link hover-2">
                    Animal
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link hover-2">
                    Dental
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link hover-2">
                    Biology
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link hover-2">
                    Design
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link hover-2">
                    Breakfast
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link hover-2">
                    Dessert
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-list">
              <p className="footer-list-title">Newsletter</p>

              <p className="footer-text">
                Sign up to be first to receive the latest stories inspiring us,
                case studies, and industry news.
              </p>

              <div className="input-wrapper">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="input-field"
                  autocomplete="off"
                />

                <i className="ri-user-line"></i>
              </div>

              <div className="input-wrapper">
                <input
                  type="email"
                  name="email_address"
                  placeholder="Emaill address"
                  required
                  className="input-field"
                  autocomplete="off"
                />

                <i className="ri-mail-line"></i>
              </div>

              <a href="#" className="btn btn-primary">
                <span className="span">Subscribe</span>

                <i className="ri-arrow-right-line"></i>
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="copyright">
              &copy; Developed by{" "}
              <a
                href="https://sudhanshupatel.vercel.app/"
                className="copyright-link"
              >
                Sudhanshu Patel
              </a>
            </p>

            <ul className="footer-social-list">
              <li>
                <a href="#" className="social-link">
                  <i className="ri-instagram-line"></i>

                  <span className="span">Instagram</span>
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  <i className="ri-linkedin-fill"></i>

                  <span className="span">LinkedIn</span>
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  <i className="ri-github-fill"></i>

                  <span className="span">Instagram</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
