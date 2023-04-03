import React from 'react'
import './Tags.css';
import { useNavigate } from 'react-router-dom';
const Tags = ({tags}) => {
  const navigate=useNavigate();
  console.log(tags);
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
            {tags?.data?.map((item)=>{
              return (
                <li key={item.id}>
                <button className="card tag-btn" onClick={()=>navigate(`/tag/${item.attributes?.Slug}`)}>
                  <img src={import.meta.env.VITE_APP_BACKEND_URL + item?.attributes?.TagImage?.data?.attributes?.url} width="32" height="32"  alt={item?.attributes?.Title} /> 
                  <p className="btn-text">{item.attributes?.Title}</p>
                </button>
              </li>
              )
            })}
          </ul>
        </div>
      </section>
  )
}

export default Tags;