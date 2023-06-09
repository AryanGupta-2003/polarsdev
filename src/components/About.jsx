import React,{Component} from 'react';
import "../pages/about.css";
import { motion } from "framer-motion"
import {useInView} from 'react-intersection-observer'
import { useEffect, useState } from 'react';
import { useAnimation } from 'framer-motion';
import {useRef} from 'react';



const About = () =>{

    const [width, setWidth] = useState(0);
    const elementRef = useRef(null);

    useEffect(() => {
        setWidth(elementRef.current.getBoundingClientRect().width);
    }, []);

    const {ref,inView}=useInView({
        threshold: 0.45
    });
    const head = useAnimation();
    const title = useAnimation();
    const card_left = useAnimation();
    const card_right= useAnimation();
    const buttonz= useAnimation();
    const divider= useAnimation();
    var setflag=true;
    useEffect(()=>{
        if(inView){
            setflag=false;
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
        if(setflag && !inView){
            head.start({x:'-100vw',transition:{
                    type: 'spring' , duration:1.5,bounce:0.15
                }});
            title.start({x:'100vw',transition:{
                    type: 'spring' , duration:1.5,bounce:0.15
                }});
            divider.start({y:'-100vw',transition:{
                    type: 'spring' , duration:1.5,bounce:0.15
                }});
            buttonz.start({y:'100vw',transition:{
                    type: 'spring' , duration:1.5,bounce:0.15
                }});
            card_right.start({x:'100vw',transition:{
                    type: 'spring' , duration:1.5,bounce:0.15
                }});
            card_left.start({x:'-100vw',transition:{
                    type: 'spring' , duration:1.5,bounce:0.15
                }});
        }
    },[inView]);

    return (
        
        <div ref={ref} className="about-section">
        <div ref={elementRef} className='for-reference'></div>
            <div className="content">
            <motion.div className="content-heading" animate={head}>
            WE ARE
            </motion.div>
                <motion.div className="content-catch" animate={title}>PASSIONATELY CREATIVE</motion.div>
                <motion.div className="content-para" animate={title}><div className="para-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste recusandae obcaecati aliquid perspiciatis dolor. Nulla placeat exercitationem incidunt adipisci fugiat, modi, veniam consectetur rerum quia esse iusto quae, accusamus voluptate neque reiciendis quaerat totam impedit pariatur ducimus odio alias facere consequuntur. Quam ea officia iste omnis eveniet velit dolores dolore molestias? Distinctio nisi amet illo culpa consequatur blanditiis, ratione, commodi ab necessitatibus accusamus earum repudiandae consequuntur debitis, repellendus tempora itaque.</div></motion.div>

                <div class="card-container">
                    <motion.div class="card" animate={card_left}>
                        <h2 className="card-heading">BACKGROUND</h2>
                        <p className="card-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ipsum voluptatem unde laboriosam iure suscipit vero minus, nemo architecto, facere asperiores labore facilis perspiciatis quidem corrupti natus maiores eveniet eum. Numquam sint velit minima in illo exercitationem omnis, veniam odio facere, totam ipsam impedit voluptatibus. Corporis nobis possimus at dolor.</p>
                    </motion.div>
                    <motion.span animate={divider} className="divider"></motion.span>
                    <motion.div class="card" animate={card_right}>
                        <h2 className="card-heading">GOALS</h2>
                        <p className="card-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quas placeat minima corporis quae tenetur nemo earum optio, corrupti quibusdam obcaecati! Maiores, commodi. Cum recusandae tempore iure ex blanditiis eaque?</p>
                        
                    </motion.div>
                    
                </div>
                <motion.button className="btn btn-darken btn-inline btn-about" animate={buttonz}>
                        Our Projects<i className="bx bx-right-arrow-alt"></i>
                    </motion.button>
            </div>
        </div>
        );
    }
    
    export default About; 