import React,{Component} from 'react';
import "../pages/hireus.css";
import { motion } from "framer-motion"
import {useInView} from 'react-intersection-observer'
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';


const Hireus = () =>{
    return (
        <div className='hireus-section'>
            <div className='content-hire'>
                <div className='title-hire'>LET'S MAKE SOMETHING COOL WITH US !</div>
                <div className='desc-hire'>    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident odit quod voluptate. Impedit culpa nisi molestias beatae iste suscipit dolorum officiis, odio, nulla doloremque voluptate aperiam dolor laudantium hic ullam!</div>
                <button className="hire_btn hire_btn-darken hire_btn-hire ">
                    Our Projects<i className="bx bx-right-arrow-alt"></i>
                </button> 
             </div>
        </div>
        );
    }
    
export default Hireus; 