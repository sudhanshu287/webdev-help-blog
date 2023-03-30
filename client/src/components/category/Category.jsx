import React from 'react'
import './Category.css';
import CatImg from '../../assets/tag1.png';
const Category = () => {
  return (
    <section className="tags" aria-labelledby="tag-label">
        <div className="container">

          <h2 className="headline headline-2 section-title" id="tag-label">
            <span className="span">Popular Tags</span>
          </h2>

          <p className="section-text">
            Most searched keywords
          </p>

          <ul className="grid-list">

            <li>
              <button className="card tag-btn">
                <img src={CatImg} width="32" height="32" loading="lazy" alt="Travel" />

                <p className="btn-text">Travel</p>
              </button>
            </li>

            <li>
              <button className="card tag-btn">
                <img src={CatImg} width="32" height="32" loading="lazy" alt="Culture" />

                <p className="btn-text">Culture</p>
              </button>
            </li>

            <li>
              <button className="card tag-btn">
                <img src={CatImg} width="32" height="32" loading="lazy" alt="Lifestyle" />

                <p className="btn-text">Lifestyle</p>
              </button>
            </li>

            <li>
              <button className="card tag-btn">
                <img src={CatImg} width="32" height="32" loading="lazy" alt="Fashion" />

                <p className="btn-text">Fashion</p>
              </button>
            </li>

            <li>
              <button className="card tag-btn">
                <img src={CatImg} width="32" height="32" loading="lazy" alt="Food" />

                <p className="btn-text">Food</p>
              </button>
            </li>

            <li>
              <button className="card tag-btn">
                <img src={CatImg} width="32" height="32" loading="lazy" alt="Space" />

                <p className="btn-text">Space</p>
              </button>
            </li>

            <li>
              <button className="card tag-btn">
                <img src={CatImg} width="32" height="32" loading="lazy" alt="Animal" />

                <p className="btn-text">Animal</p>
              </button>
            </li>

            <li>
              <button className="card tag-btn">
                <img src={CatImg} width="32" height="32" loading="lazy" alt="Minimal" />

                <p className="btn-text">Minimal</p>
              </button>
            </li>

            <li>
              <button className="card tag-btn">
                <img src={CatImg} width="32" height="32" loading="lazy" alt="Interior" />

                <p className="btn-text">Interior</p>
              </button>
            </li>

            <li>
              <button className="card tag-btn">
                <img src={CatImg} width="32" height="32" loading="lazy" alt="Plant" />

                <p className="btn-text">Plant</p>
              </button>
            </li>

            <li>
              <button className="card tag-btn">
                <img src={CatImg} width="32" height="32" loading="lazy" alt="Nature" />

                <p className="btn-text">Nature</p>
              </button>
            </li>

            <li>
              <button className="card tag-btn">
                <img src={CatImg} width="32" height="32" loading="lazy" alt="Business" />

                <p className="btn-text">Business</p>
              </button>
            </li>

          </ul>

        </div>
      </section>
  )
}

export default Category