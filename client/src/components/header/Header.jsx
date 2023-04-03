import React from 'react'
import './Header.css';
import HeroBannerImg from '../../assets/hero-banner.png';
import PatternImg2 from '../../assets/pattern-2.svg';
import PatternImg3 from '../../assets/pattern-3.svg';
import ShadowImg1 from '../../assets/shadow-1.svg';
import ShadowImg2 from '../../assets/shadow-2.svg';
const Header = () => {
  return (
    <section className="hero" id="home" aria-label="home">
        <div className="container">

          <div className="hero-content">

            <p className="hero-subtitle">Hello Everyone!</p>

            <h1 className="headline headline-1 section-title">
              I’m <span className="span">Sudhanshu</span>
            </h1>

            <p className="hero-text">
              I use animation as a third dimension by which to simplify experiences and kuiding thro each and every
              interaction. I’m not adding motion just to spruce things up, but doing it in ways that.
            </p>

            <div className="input-wrapper">

              <input type="email" name="email_address" placeholder="Type your email address" required
                className="input-field" autocomplete="off" />

              <button className="btn btn-primary">
                <span className="span">Subscribe</span>
                <i className="ri-arrow-right-line"></i>
              </button>

            </div>

          </div>

          <div className="hero-banner">

            <img src={HeroBannerImg} width="327" height="490" alt="Wren Clark" className="w-100" />

            <img src={PatternImg2} width="27" height="26" alt="shape" className="shape shape-1" />

            <img src={PatternImg3} width="27" height="26" alt="shape" className="shape shape-2" />

          </div>

          <img src={ShadowImg1} width="500" height="800" alt="" className="hero-bg hero-bg-1" />

          <img src={ShadowImg2} width="500" height="500" alt="" className="hero-bg hero-bg-2" />

        </div>
      </section>
  )
}

export default Header