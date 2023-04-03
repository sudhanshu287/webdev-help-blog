import React, { useContext, useEffect } from 'react'
import SocialsCard from '../../components/socialsCard/SocialsCard'
import './SinglePost.css'
import { Context } from '../../context/Context'
import { fetchDataFromApi } from '../../utils/api'
import { useParams } from 'react-router-dom'
import Avatar from '../../components/avatar/Avatar'
const SinglePost = () => {
    const {singleArticle,setSingleArticle}=useContext(Context);
    const {slug}=useParams();
    useEffect(()=>{
        getSingleArticle();
    },[]);
    const getSingleArticle=()=>{
        fetchDataFromApi(`/api/articles?populate=ArticleImage&&populate=author&&populate=authorAvatar&&filters[slug][$eq]=${slug}`).then(res=>{
            console.log(res);
            setSingleArticle(res);
        })
    }
  return (
    <section className="section">
        <div className="container article-container">
            <div className="article-body">
                <h1 className='article-title'>{singleArticle?.data[0].attributes.Title}</h1>
                <p>
                    <Avatar avatarImg={singleArticle?.data[0].attributes.authorAvatar.data.attributes.url} firstname={singleArticle?.data[0].attributes.firstname} lastname={singleArticle?.data[0].attributes.lastname} createdDate={singleArticle?.data[0].attributes.createdAt} />
                </p>
                <div className="article-img">
                    <img src={import.meta.env.VITE_APP_BACKEND_URL+singleArticle?.data[0].attributes.ArticleImage.data.attributes.url} alt="" />
                </div>
                <div className="article-details">
                {singleArticle?.data[0].attributes.body}
                </div>
            </div>
            <div>
                <SocialsCard/>
            </div>
        </div>
    </section>
  )
}

export default SinglePost