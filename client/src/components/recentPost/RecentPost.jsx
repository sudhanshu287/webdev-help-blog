import React from "react";
import LastComment from "./lastComment/LastComment";
import Pagination from "./pagination/Pagination";
import PopularPost from "./popularPost/PopularPost";
import "./RecentPost.css";
import SocialsCard from "./socialsCard/SocialsCard";
const RecentPost = () => {
  return (
    <section
      className="section recent-post"
      id="recent"
      aria-labelledby="recent-label"
    >
      <div className="container">
        <div className="post-main">
          <h2 className="headline headline-2 section-title">
            <span className="span">Recent posts</span>
          </h2>

          <p className="section-text">Don't miss the latest trends</p>

          <ul className="grid-list">
            <li>
              <div className="recent-post-card">
                <figure className="card-banner img-holder">
                  <img
                    src="./assets/images/recent-post-1.jpg"
                    width="271"
                    height="258"
                    loading="lazy"
                    alt="Helpful Tips for Working from Home as a Freelancer"
                    className="img-cover"
                  />
                </figure>

                <div className="card-content">
                  <a href="#" className="card-badge">
                    Working Tips
                  </a>

                  <h3 className="headline headline-3 card-title">
                    <a href="#" className="link hover-2">
                      Helpful Tips for Working from Home as a Freelancer
                    </a>
                  </h3>

                  <p className="card-text">
                    Gosh jaguar ostrich quail one excited dear hello and bound
                    and the and bland moral misheard roadrunner flapped lynx far
                    that and jeepers giggled far and far
                  </p>

                  <div className="card-wrapper">
                    <div className="card-tag">
                      <a href="#" className="span hover-2">
                        # Travel
                      </a>

                      <a href="#" className="span hover-2">
                        # Lifestyle
                      </a>
                    </div>

                    <div className="wrapper">
                      <i className="ri-time-line"></i>

                      <span className="span">3 mins read</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="recent-post-card">
                <figure className="card-banner img-holder">
                  <img
                    src="./assets/images/recent-post-2.jpg"
                    width="271"
                    height="258"
                    loading="lazy"
                    alt="Helpful Tips for Working from Home as a Freelancer"
                    className="img-cover"
                  />
                </figure>

                <div className="card-content">
                  <a href="#" className="card-badge">
                    Working Tips
                  </a>

                  <h3 className="headline headline-3 card-title">
                    <a href="#" className="link hover-2">
                      Helpful Tips for Working from Home as a Freelancer
                    </a>
                  </h3>

                  <p className="card-text">
                    Gosh jaguar ostrich quail one excited dear hello and bound
                    and the and bland moral misheard roadrunner flapped lynx far
                    that and jeepers giggled far and far
                  </p>

                  <div className="card-wrapper">
                    <div className="card-tag">
                      <a href="#" className="span hover-2">
                        # Travel
                      </a>

                      <a href="#" className="span hover-2">
                        # Lifestyle
                      </a>
                    </div>

                    <div className="wrapper">
                      <i className="ri-time-line"></i>

                      <span className="span">3 mins read</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="recent-post-card">
                <figure className="card-banner img-holder">
                  <img
                    src="./assets/images/recent-post-3.jpg"
                    width="271"
                    height="258"
                    loading="lazy"
                    alt="Helpful Tips for Working from Home as a Freelancer"
                    className="img-cover"
                  />
                </figure>

                <div className="card-content">
                  <a href="#" className="card-badge">
                    Working Tips
                  </a>

                  <h3 className="headline headline-3 card-title">
                    <a href="#" className="link hover-2">
                      Helpful Tips for Working from Home as a Freelancer
                    </a>
                  </h3>

                  <p className="card-text">
                    Gosh jaguar ostrich quail one excited dear hello and bound
                    and the and bland moral misheard roadrunner flapped lynx far
                    that and jeepers giggled far and far
                  </p>

                  <div className="card-wrapper">
                    <div className="card-tag">
                      <a href="#" className="span hover-2">
                        # Travel
                      </a>

                      <a href="#" className="span hover-2">
                        # Lifestyle
                      </a>
                    </div>

                    <div className="wrapper">
                      <i className="ri-time-line"></i>

                      <span className="span">3 mins read</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="recent-post-card">
                <figure className="card-banner img-holder">
                  <img
                    src="./assets/images/recent-post-4.jpg"
                    width="271"
                    height="258"
                    loading="lazy"
                    alt="Helpful Tips for Working from Home as a Freelancer"
                    className="img-cover"
                  />
                </figure>

                <div className="card-content">
                  <a href="#" className="card-badge">
                    Working Tips
                  </a>

                  <h3 className="headline headline-3 card-title">
                    <a href="#" className="link hover-2">
                      Helpful Tips for Working from Home as a Freelancer
                    </a>
                  </h3>

                  <p className="card-text">
                    Gosh jaguar ostrich quail one excited dear hello and bound
                    and the and bland moral misheard roadrunner flapped lynx far
                    that and jeepers giggled far and far
                  </p>

                  <div className="card-wrapper">
                    <div className="card-tag">
                      <a href="#" className="span hover-2">
                        # Travel
                      </a>

                      <a href="#" className="span hover-2">
                        # Lifestyle
                      </a>
                    </div>

                    <div className="wrapper">
                      <i className="ri-time-line"></i>

                      <span className="span">3 mins read</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="recent-post-card">
                <figure className="card-banner img-holder">
                  <img
                    src="./assets/images/recent-post-5.jpg"
                    width="271"
                    height="258"
                    loading="lazy"
                    alt="Helpful Tips for Working from Home as a Freelancer"
                    className="img-cover"
                  />
                </figure>

                <div className="card-content">
                  <a href="#" className="card-badge">
                    Working Tips
                  </a>

                  <h3 className="headline headline-3 card-title">
                    <a href="#" className="link hover-2">
                      Helpful Tips for Working from Home as a Freelancer
                    </a>
                  </h3>

                  <p className="card-text">
                    Gosh jaguar ostrich quail one excited dear hello and bound
                    and the and bland moral misheard roadrunner flapped lynx far
                    that and jeepers giggled far and far
                  </p>

                  <div className="card-wrapper">
                    <div className="card-tag">
                      <a href="#" className="span hover-2">
                        # Travel
                      </a>

                      <a href="#" className="span hover-2">
                        # Lifestyle
                      </a>
                    </div>

                    <div className="wrapper">
                      <i className="ri-time-line"></i>

                      <span className="span">3 mins read</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>

          <Pagination />
        </div>

        <div className="post-aside grid-list">
          <PopularPost />

          <LastComment />

          <SocialsCard />
        </div>
      </div>
    </section>
  );
};

export default RecentPost;
