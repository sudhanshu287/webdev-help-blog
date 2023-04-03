import React, { useContext, useEffect } from "react";
import "./Footer.css";
import { Context } from "../../context/Context";
import { fetchDataFromApi } from "../../utils/api";
import LogoImg from '../../assets/wdh-small-logo.png';
const Footer = () => {
  const { tags, setTags } = useContext(Context);
  useEffect(() => {
    getTags();
  }, []);
  const getTags = () => {
    fetchDataFromApi(`/api/tags?populate=TagImage`).then((res) => {
      console.log("foooter", res);
      setTags(res);
    });
  };
  return (
    <footer>
      <div className="container">
        <div className="card footer">
          <div className="section footer-top">
            <div className="footer-brand">
              <a href="/" className="logo">
                <img
                  src={LogoImg}
                  width="119"
                  height="37"
                  loading="lazy"
                  alt="Wren logo"
                />
              </a>

              <p className="footer-text">
                WebDevHelp is a tech blog plateform.which provides top notch quality blog releted to web development.
              </p>

              <p className="footer-list-title">Address</p>

              <address className="footer-text address">
                Sanjeev Nagar <br />
                Kanpur Nagar,IN
              </address>
            </div>

            <div className="footer-list">
              <p className="footer-list-title">Tags</p>

              <ul>
                {tags?.data?.map((item) => {
                  return (
                    <li >
                      <a href={`/tag/${item.attributes.Slug}`} className="footer-link hover-2">
                        {item.attributes.Title}
                      </a>
                    </li>
                  );
                })}

                
              </ul>
            </div>

            <div className="footer-list">
              <p className="footer-list-title">Newsletter</p>

              <p className="footer-text">
                Sign up to be first to receive the latest tech blog Post.
              </p>

              <div className="input-wrapper">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="input-field"
                  autoComplete="off"
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
                  autoComplete="off"
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
                <a
                  href="https://instgram.com/sudhanshu_287/"
                  className="social-link"
                >
                  <i className="ri-instagram-line"></i>

                  <span className="span">Instagram</span>
                </a>
              </li>

              <li>
                <a
                  href="https://linkedin.com/in/sudhanshu287/"
                  className="social-link"
                >
                  <i className="ri-linkedin-fill"></i>

                  <span className="span">LinkedIn</span>
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/sudhanshu287/"
                  className="social-link"
                >
                  <i className="ri-github-fill"></i>

                  <span className="span">Github</span>
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
