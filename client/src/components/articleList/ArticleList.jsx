import React from 'react'
import './ArticleList.css';
import Pagination from '../pagination/Pagination';
import Avatar from '../avatar/Avatar';
const ArticleList = ({articles,title}) => {
  console.log('art',articles)
  return (
    <div className="post-main">
          <h2 className="headline headline-2 section-title">
            <span className="span">{title} posts</span>
          </h2>

          <p className="section-text">Don't miss the latest trends</p>

          <ul className="grid-list">
            {articles?.data?.map((article) => {
              return (
                <li key={article.id}>
                  <div className="recent-post-card">
                    <figure className="card-banner img-holder">
                      <img
                        src={import.meta.env.VITE_APP_BACKEND_URL + article.attributes.ThumbnailImage.data.attributes.url}
                        width="271"
                        height="258"
                        loading="lazy"
                        alt="Helpful Tips for Working from Home as a Freelancer"
                        className="img-cover"
                      />
                    </figure>

                    <div className="card-content">
                      <a href={`/category/${article.attributes.category.data.attributes.Slug}`} className="card-badge">
                        {article.attributes.category.data?.attributes.Title}
                      </a>

                      <h3 className="headline headline-3 card-title">
                        <a href={`/article/${article.attributes.Slug}`} className="link hover-2">
                          {article.attributes.Title}
                        </a>
                      </h3>
                      <p>
                        <Avatar avatarImg={article.attributes.authorAvatar.data.attributes.url} firstname={article.attributes.author.data.attributes.firstname} lastname={article.attributes.author.data.attributes.lastname} createdDate={article.attributes.createdAt} />
                      </p>

                      <p className="card-text">
                        {article.attributes.shortDescription.slice(0, 250)}{" "}
                        {article.attributes.shortDescription.length > 250
                          ? "...."
                          : ""}
                       
                      </p>

                      <div className="card-wrapper">
                        <div className="card-tag">
                          {article?.attributes?.tags?.data?.map((tag) => {
                            return (
                              <a href={`/tag`} className="span hover-2" key={tag.id}>
                                # {tag.attributes?.Title} &nbsp;
                              </a>
                            );
                          })}
                        </div>
                        <div className="wrapper">
                          <i className="ri-time-line"></i>

                          <span className="span">
                            {article.attributes.ReadTimeInMinutes} mins read
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <Pagination/>
        </div>
  )
}

export default ArticleList