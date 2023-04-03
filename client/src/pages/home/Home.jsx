import React, { useContext, useEffect } from "react";
import Tags from "../../components/tags/Tags";
import Header from "../../components/header/Header";
import RecentPost from "../../components/recentPost/RecentPost";
import Slider from "../../components/slider/Slider";
import { fetchDataFromApi } from "../../utils/api";
import Category from "../../components/category/Category";
import { Context } from "../../context/Context";

const Home = () => {
  const { categories, setCategories, tags, setTags, articles, setArticles } =
    useContext(Context);

  useEffect(() => {
    getCategories();
    getTags();
    getArticles();
  }, []);
  const getCategories = () => {
    fetchDataFromApi("/api/categories").then((res) => {
      console.log(res);
      setCategories(res);
    });
  };
  const getTags = () => {
    fetchDataFromApi("/api/tags?populate=TagImage").then((res) => {
      console.log("tag", res);
      setTags(res);
    });
  };
  const getArticles = () => {
    fetchDataFromApi("/api/articles?populate=*").then((res) => {
      console.log(res);
      setArticles(res);
    });
  };

  return (
    <>
      <Header />
      <Slider />
      <Category categories={categories} />
      <Tags tags={tags} />
      <RecentPost articles={articles} title="Recent" />
    </>
  );
};

export default Home;
