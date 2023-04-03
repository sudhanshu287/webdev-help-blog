import React from "react";
import LastComment from "./lastComment/LastComment";
import Pagination from "../pagination/Pagination";
import PopularPost from "./popularPost/PopularPost";
import "./RecentPost.css";
import SocialsCard from "../socialsCard/SocialsCard";
import ArticleList from "../articleList/ArticleList";
const RecentPost = ({articles} ) => {
  return (
    <section
      className="section recent-post"
    >
      <div className="container">
        <ArticleList articles={articles} title="Recent"/>
        <div className="post-aside grid-list">
          {/* <PopularPost /> */}
          {/* <LastComment /> */}
          <SocialsCard />
        </div>
      </div>
    </section>
  );
};

export default RecentPost;
