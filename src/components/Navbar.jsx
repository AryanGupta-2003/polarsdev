import "../pages/navbar.css";
import React, { useState } from "react";


const Navbar = () => {
    const jQueryCode=()=>{
        setShowMediaIcons(!showMediaIcons);
        setnavanim(!navanim);
        console.log(navanim);
    }
    
    
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [navanim, setnavanim] = useState(true);
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
          } onMouseLeave={jQueryCode}>
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
         

          {/* hamburget menu start  */}
          <div className="hamburger-menu ">
            <a href="#" className="ham-color" onMouseEnter={jQueryCode} onClick={jQueryCode}>
              {/* <GiHamburgerMenu /> */}
              <div className={navanim?"nav-icon1":"nav-icon1 open"}>
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