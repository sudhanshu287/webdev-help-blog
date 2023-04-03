import React, { useContext,useEffect } from 'react'
import Tags from '../../components/tags/Tags';
import ArticleList from '../../components/articleList/ArticleList';
import PopularPost from '../../components/recentPost/popularPost/PopularPost';
import LastComment from '../../components/recentPost/lastComment/LastComment';
import SocialsCard from '../../components/socialsCard/SocialsCard';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { Context } from '../../context/Context';
import { fetchDataFromApi } from '../../utils/api';

const TagPost = () => {
    const {slug}=useParams();
    const {data}=useFetch(`/api/articles?populate=*&[filters][tags][Slug]=${slug}`);
    console.log('data',data);
    const {tags,setTags}=useContext(Context);
    useEffect(()=>{
        getTags();
    },[]);
    const getTags=()=>{
        fetchDataFromApi('/api/tags?populate=*').then((res)=>{
            setTags(res);
        })
    }
  return (
    <>
        <Tags tags={tags}/>

        <section
      className="section recent-post"
    >
      <div className="container">
        <ArticleList articles={data} title="Tag" />
        <div className="post-aside grid-list">
          <PopularPost />
          <LastComment />
          <SocialsCard />
        </div>
      </div>
    </section>
    </>
  )
}

export default TagPost