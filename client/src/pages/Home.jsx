import React from 'react'
import Category from '../components/category/Category'
import EditorsPicked from '../components/editorsPicked/EditorsPicked'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Navbar from '../components/navbar/Navbar'
import RecentPost from '../components/recentPost/RecentPost'
import Slider from '../components/slider/Slider';

const Home = () => {
  return (
    <>
        <Navbar/>
        <Header/>
        <Slider/>
        <EditorsPicked/>
        <Category/>
        <RecentPost/>
        <Footer/>
    </>
  )
}

export default Home