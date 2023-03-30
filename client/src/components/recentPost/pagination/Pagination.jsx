import React from "react";
import './Pagination.css'
const Pagination = () => {
  return (
    <nav aria-label="pagination" className="pagination">
      <a href="#" className="pagination-btn" aria-label="previous page">
        <i className="ri-arrow-left-line"></i>
      </a>

      <a href="#" className="pagination-btn">
        1
      </a>
      <a href="#" className="pagination-btn">
        2
      </a>
      <a href="#" className="pagination-btn">
        3
      </a>
      <a href="#" className="pagination-btn" aria-label="more page">
        ...
      </a>

      <a href="#" className="pagination-btn" aria-label="next page">
        <i className="ri-arrow-right-line"></i>
      </a>
    </nav>
  );
};

export default Pagination;
