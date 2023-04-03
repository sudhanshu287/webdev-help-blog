import React, { useContext, useEffect } from 'react';
import Category from '../../components/category/Category';
import { Context } from '../../context/Context';
import { fetchDataFromApi } from '../../utils/api';
import ArticleList from '../../components/articleList/ArticleList';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import PopularPost from '../../components/recentPost/popularPost/PopularPost';
import LastComment from '../../components/recentPost/lastComment/LastComment';
import SocialsCard from '../../components/socialsCard/SocialsCard';
const CategoryPost = () => {
    const {slug}=useParams();
    const {data}=useFetch(`/api/articles?populate=*&[filters][category][Slug]=${slug}`);
    console.log('data',data);
    const {categories,setCategories}=useContext(Context);
    useEffect(()=>{
        getCategories();
    },[]);
    const getCategories=()=>{
        fetchDataFromApi('/api/categories').then((res)=>{
            setCategories(res);
        })
    }
  return (
    <>
        <Category categories={categories}/>

        <section
      className="section recent-post"
    >
      <div className="container">
        <ArticleList articles={data} title="Category" />
        <div className="post-aside grid-list">
          {/* <PopularPost /> */}
          {/* <LastComment /> */}
          <SocialsCard />
        </div>
      </div>
    </section>
    </>
  )
}

export default CategoryPost;