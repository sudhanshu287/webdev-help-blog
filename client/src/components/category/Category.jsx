import React from "react";
import "./Category.css";
import { useNavigate } from "react-router-dom";
const Category = ({ categories }) => {
  console.log(categories);
  const navigate=useNavigate();
  return (
    <section className="categories" >
      <div className="container">
        <h2 className="headline headline-2 section-title" >
          <span className="span">Category</span>
        </h2>
        <p className="section-text">Article By your choice of category</p>
        <ul className="grid-list">
          {categories?.data?.map((item) => {
            return (
              <li key={item.id} className="cat-item">
                <button className="card categories-btn" onClick={()=>navigate(`/category/${item.attributes.Slug}`)}>
                  <p className="btn-text">{item.attributes.Title}</p>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Category;
