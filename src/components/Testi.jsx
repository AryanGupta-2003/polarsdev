import React,{Component} from 'react';
import "../pages/testi.css";
import { motion } from "framer-motion"
import {useInView} from 'react-intersection-observer'
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import quote from "../assets/img/quote.png";

const Testi = () =>{
    return (
        <div className='testi-section'>
        <div className='team-title'  >TESTIMONIALS</div>
        <div className='team-catch' >Review's of people we have worked with</div>
        <Carousel
        showArrows={false}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={3050}
        preventMovementUntilSwipeScrollTolerance={true} 
        swipeScrollTolerance={50}
      >
        <div>
          
          <div className="myCarousel">
            <img className='icon-quote' src={quote}></img>
            <p className='testi-para'>
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
            </p>
          </div>
          <img className='testi-img' src="https://wallpapercave.com/wp/wp4975694.jpg" />
          <h3 className='testi-name'>randi raju</h3>
            <h4 className='testi-desg'>Coder</h4>
        </div>

        <div>
        <div className="myCarousel">
        <img className='icon-quote' src={quote}></img>
            <p className='testi-para'>
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
            </p>
          </div>
          <img className='testi-img' src="https://wallpapercave.com/wp/wp4975694.jpg" />
          <h3 className='testi-name'>randi raju</h3>
            <h4 className='testi-desg'>Coder</h4>
        </div>

        <div>
        <div className="myCarousel">
        <img className='icon-quote' src={quote}></img>
            <p className='testi-para'>
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
            </p>
          </div>
          <img className='testi-img' src="https://wallpapercave.com/wp/wp4975694.jpg" />
          <h3 className='testi-name'>randi raju</h3>
            <h4 className='testi-desg'>Coder</h4>
        </div>
      </Carousel>
      </div>
        );
    }
    
    export default Testi; 