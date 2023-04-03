import React, { useState,useEffect } from 'react'
import './Navbar.css';
import LogoImg from '../../assets/wdh-small-logo.png';
import AuthorImg from '../../assets/author-1.png';
import DarkMode from './darkModeButton/DarkMode';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    const [openNav,setOpenNav]=useState(false);
    const [scrolled,setScrolled]=useState(false);
    const navigate=useNavigate();
    const handleScroll=()=>{
      const offset = window.scrollY;
      if (offset > 200) {
          setScrolled(true);
      }
      else {
          setScrolled(false);
      }
    }
    useEffect(() => {
      window.addEventListener('scroll', handleScroll)
  }, []);
  return (
    <header className={`header ${scrolled? "active":""}`} >
    <div className="container">

      <a href="/" className="logo">
        <img src={LogoImg} width="119" height="37" alt="Wren logo" />
      </a>

      <nav className={`navbar ${openNav?"active":""}`}>

        <div className="navbar-top">
          <a href="/" className="logo">
            <img src={LogoImg} width="119" height="37" alt="webdevhelp logo" />
          </a>

          <button className="nav-close-btn" aria-label="close menu" onClick={()=>setOpenNav(false)} >
            <i className="ri-close-fill"></i>
          </button>
        </div>

        <ul className="navbar-list">

          <li>
            <a href="/" className="navbar-link hover-1" >Home</a>
          </li>

          <li>
            <a href="/privacy-policy" className="navbar-link hover-1" >Privacy Policy</a>
          </li>

          <li>
            <a href="/featured" className="navbar-link hover-1" >Disclaimer</a>
          </li>
          <li>
            <a href="/contact" className="navbar-link hover-1" >Contact</a>
          </li>

        </ul>

        <div className="navbar-bottom">

          <div className="profile-card">
            <img src={AuthorImg} width="48" height="48" alt="Steven" className="profile-banner" />

            <div>
              <p className="card-title">Hello Steven !</p>

              <p className="card-subtitle">
                You have 3 new messages
              </p>
            </div>
          </div>

          <ul className="link-list">

            <li>
              <a href="#" className="navbar-bottom-link hover-1">Profile</a>
            </li>

            <li>
              <a href="#" className="navbar-bottom-link hover-1">Articles Saved</a>
            </li>

            <li>
              <a href="#" className="navbar-bottom-link hover-1">Add New Post</a>
            </li>

            <li>
              <a href="#" className="navbar-bottom-link hover-1">My Likes</a>
            </li>

            <li>
              <a href="#" className="navbar-bottom-link hover-1">Account Setting</a>
            </li>

            <li>
              <a href="#" className="navbar-bottom-link hover-1">Sign Out</a>
            </li>

          </ul>

        </div>

        <p className="copyright-text">
          Copyright 2023 © WebDevHelp.
          Developed by <a href="https://sudhanshupatel.vercel.app">Sudhanshu Patel</a>
        </p>

      </nav>
      <DarkMode/>
      <a href="#" className="btn btn-primary">Subscribe</a>

      <button className="nav-open-btn" aria-label="open menu" onClick={()=>setOpenNav(true)} >
        <i className="ri-menu-line" ></i>
      </button>

    </div>
  </header>
  )
}

export default Navbar