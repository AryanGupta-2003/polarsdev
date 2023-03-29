import "../pages/navbar.css";
import React, { useState } from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import $ from 'jquery';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const jQueryCode=()=>{
        // $(document).ready(function(){
        //     $('#nav-icon1').click(function(){
        //         $(this).toggleClass('open');
        //     });
        // });
        $(document).click(function(){
            $('#nav-icon1').click(function(){
                $(this).toggleClass('open');
            });
        });
        setShowMediaIcons(!showMediaIcons);
    }
    
    
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>P</span>olars
            <span>D</span>ev
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">about</a>
            </li>
            <li>
              <a href="#">services</a>
            </li>
            <li>
              <a href="#">contact</a>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="#"
                target="_blank">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank">
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu ">
            <a href="#" className="ham-color" onClick={jQueryCode}>
              {/* <GiHamburgerMenu /> */}
              <div id="nav-icon1">
                <span></span>
                <span></span>
                <span></span>
            </div>
            </a>
          </div>
        </div>
      </nav>

      
    </>
  );
};

export default Navbar;