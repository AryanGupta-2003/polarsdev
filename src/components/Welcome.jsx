import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "../pages/welcome.css";
import { motion } from "framer-motion"
import {useInView} from 'react-intersection-observer'
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import CountUp from 'react-countup';


const Welcome = () =>{  

        const {ref,inView}=useInView({
            threshold: 0
        });
        const head = useAnimation();
        const title = useAnimation();
        const card_left = useAnimation();
        const card_right= useAnimation();
        const buttonz= useAnimation();
        const divider= useAnimation();
        useEffect(()=>{
            if(inView){
                head.start({
                    x:0,
                    transition:{
                        type: 'spring' , duration:4,bounce:0.15
                    }
                });
                title.start({
                    x:0,
                    transition:{
                        type: 'spring' , duration:4,bounce:0.15
                    }
                });
                card_left.start({
                    x:0,
                    transition:{
                        type: 'spring' , duration:4,bounce:0.15
                    }
                });
                card_right.start({
                    x:0,
                    transition:{
                        type: 'spring' , duration:4,bounce:0.15
                    }
                });
                buttonz.start({
                    y:0,
                    transition:{
                        type: 'spring' , duration:2,bounce:0.15
                    }
                });
                divider.start({
                    y:0,
                    transition:{
                        type: 'spring' , duration:4,bounce:0.15
                    }
                });
    
            }
            if( !inView){
                head.start({x:'-100vw',transition:{
                        type: 'spring' , duration:1.5,bounce:0.15
                    }});
                
                buttonz.start({y:'-100vw',transition:{
                        type: 'spring' , duration:1.5,bounce:0.15
                    }});
                card_right.start({x:'-300vw',transition:{
                        type: 'spring' , duration:1.5,bounce:0.15
                    }});
                card_left.start({x:'-100vw',transition:{
                        type: 'spring' , duration:1.5,bounce:0.15
                    }});
            }
            console.log(inView);
        },[inView]);
    
    
    
        return (
            <div ref={ref} className='welcome-section'>
            <div id="video-overlay" class="video-overlay">
                <a class="video-overlay-close">&times;</a>
            </div>

            <main className="main">
                <section className="section banner banner-section">
                    <div className="container banner-column">
                        <div className="banner-inner">
                            <motion.div className="welcome-head" animate={head}>PolarsDev</motion.div>
                            <motion.div className="paragraph" animate={head}>Your Polaris for Developement</motion.div>
                            <motion.div className="welcome-desc" animate={head}>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ad sed deserunt distinctio earum commodi, odit eos reiciendis sit pariatur accusamus aut iusto porro quam modi delectus at! Ad, accusamus!</motion.div>
                            <motion.div animate={buttonz} className='welcome-bt-pl'>
                            <button className="btn btn-darken btn-inline">
                                Our Projects<i className="bx bx-right-arrow-alt"></i>
                                </button>    
                                <a id="play-video" class="video-play-button" href="#"> <span></span></a>
                            </motion.div>
                        </div>
                        
                       

                        {/* <div className="itemWrapper  "><div className="wordContainerdup"><div className="itemdright">
                        <img className="banner-image" src="https://media.tenor.com/x8v1oNUOmg4AAAAd/rickroll-roll.gif" alt="banner"></img>
                        </div></div></div> */}
                        
                        <motion.div className="banner-links" animate={card_right}>
                            <a href="#" title=""><i className="bx bxl-facebook banner-fb"></i></a>
                            <a href="#" title=""><i className="bx bxl-instagram banner-ins"></i></a>
                            <a href="#" title=""><i className="bx bxl-twitter banner-tw"></i></a>
                        </motion.div>

                     </div>
                           
            {/* -----------------counter------------------- */}
                <motion.div animate={card_right} className="wrapper">
                    <div className="counter col_fourth" >
                    <i className="fa fa-code fa-2x"></i>
                    <div className="inos">
                        <CountUp end={5} duration={3} start={-1} className="timer count-title count-number" ></CountUp><h3 className="info">+</h3>
                    </div>
                    <p className="count-text ">Projects Done</p>
                    </div>

                    <div className="counter col_fourth">
                        <i className="fa fa-coffee fa-2x"></i>
                        <div className="inos">
                            <CountUp end={5} duration={3} start={-1} className="timer count-title count-number" ></CountUp><h3 className="info">months</h3>
                        </div>
                         <p className="count-text ">Experience</p>
                    </div>

                    <div className="counter col_fourth">
                    <i className="fa fa-lightbulb-o fa-2x"></i>
                    <div className="inos">
                    <CountUp end={5} duration={3} start={-1} className="timer count-title count-number" ></CountUp><h3 className="info">+</h3>
                    </div>
                    <p className="count-text ">People under us</p>
                    </div>                
                </motion.div>
                {/* -----------------counter------------------- */}
                
                    </section>
                </main>
            </div>

        );
    }


export default Welcome;