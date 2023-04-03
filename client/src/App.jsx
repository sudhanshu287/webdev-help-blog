import React from 'react'
import Home from './pages/home/Home'
import AppContext from './context/Context';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import CategoryPost from './pages/categoryPost/CategoryPost';
import TagPost from './pages/tagPost/TagPost';
import SinglePost from './pages/singlePost/SinglePost';
const App = () => {
  return (
   <BrowserRouter>
   <AppContext>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/category/:slug" element={<CategoryPost/>} />
      <Route path="/tag/:slug" element={<TagPost/>} />
      <Route path="/article/:slug" element={<SinglePost/>} />
    </Routes>
    <Footer/>
   </AppContext>
   </BrowserRouter>
  )
}

export default App;