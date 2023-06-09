import React from 'react'
import './Slide.css';

import TopicImg from '../../assets/topic-1.png';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
const Slide = () => {
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
              <Swiper className="slider-list" data-slider-container
              cssMode={true}
              navigation={true}
              pagination={true}
              mousewheel={true}
              keyboard={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              >

                <SwiperSlide className="slider-item">
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
                </SwiperSlide>

                <SwiperSlide className="slider-item">
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
                </SwiperSlide>

                <SwiperSlide className="slider-item">
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
                </SwiperSlide>

                <SwiperSlide className="slider-item">
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
                </SwiperSlide>

                <SwiperSlide className="slider-item">
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
                </SwiperSlide>

              </Swiper>
            </div>

          </div>

        </div>
      </section>
  )
}

export default Slide