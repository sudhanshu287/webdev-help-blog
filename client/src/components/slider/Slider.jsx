import React from 'react'
import './Slider.css';
import TopicImg from '../../assets/topic-1.png';
const Slider = () => {
  return (
    <section className="topics" id="topics" aria-labelledby="topic-label">
        <div className="container">

          <div className="card topic-card">

            <div className="card-content">

              <h2 className="headline headline-2 section-title card-title" id="topic-label">
                Hot topics
              </h2>

              <p className="card-text">
                Don't miss out on the latest news about Travel tips, Hotels review, Food guide...
              </p>

              <div className="btn-group">
                <button className="btn-icon" aria-label="previous" data-slider-prev>
                <i className="ri-arrow-left-line"></i>
                </button>

                <button className="btn-icon" aria-label="next" data-slider-next>
                <i className="ri-arrow-right-line"></i>
                </button>
              </div>

            </div>

            <div className="slider" data-slider>
              <ul className="slider-list" data-slider-container>

                <li className="slider-item">
                  <a href="#" className="slider-card">

                    <figure className="slider-banner img-holder" >
                      <img src={TopicImg} width="507" height="618" loading="lazy" alt="Sport"
                        className="img-cover" />
                    </figure>

                    <div className="slider-content">
                      <span className="slider-title">Sport</span>

                      <p className="slider-subtitle">38 Articles</p>
                    </div>

                  </a>
                </li>

                <li className="slider-item">
                  <a href="#" className="slider-card">

                    <figure className="slider-banner img-holder" >
                      <img src={TopicImg} width="507" height="618" loading="lazy" alt="Travel"
                        className="img-cover" />
                    </figure>

                    <div className="slider-content">
                      <span className="slider-title">Travel</span>

                      <p className="slider-subtitle">63 Articles</p>
                    </div>

                  </a>
                </li>

                <li className="slider-item">
                  <a href="#" className="slider-card">

                    <figure className="slider-banner img-holder" >
                      <img src={TopicImg} width="507" height="618" loading="lazy" alt="Design"
                        className="img-cover" />
                    </figure>

                    <div className="slider-content">
                      <span className="slider-title">Design</span>

                      <p className="slider-subtitle">78 Articles</p>
                    </div>

                  </a>
                </li>

                <li className="slider-item">
                  <a href="#" className="slider-card">

                    <figure className="slider-banner img-holder">
                      <img src={TopicImg} width="507" height="618" loading="lazy" alt="Movie"
                        className="img-cover" />
                    </figure>

                    <div className="slider-content">
                      <span className="slider-title">Movie</span>

                      <p className="slider-subtitle">125 Articles</p>
                    </div>

                  </a>
                </li>

                <li className="slider-item">
                  <a href="#" className="slider-card">

                    <figure className="slider-banner img-holder" >
                      <img src={TopicImg} width="507" height="618" loading="lazy" alt="Lifestyle"
                        className="img-cover" />
                    </figure>

                    <div className="slider-content">
                      <span className="slider-title">Lifestyle</span>

                      <p className="slider-subtitle">78 Articles</p>
                    </div>

                  </a>
                </li>

              </ul>
            </div>

          </div>

        </div>
      </section>
  )
}

export default Slider