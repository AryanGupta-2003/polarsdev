import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "../pages/wedo.css";
import { motion } from "framer-motion"
import {useInView} from 'react-intersection-observer'
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

const Wedo = () =>{


    const {ref,inView}=useInView({
        threshold: 0.3
    });
    const head = useAnimation();
    const title = useAnimation();
    const describe = useAnimation();
    const card_left = useAnimation();
    const card_right= useAnimation();
    const card_middle= useAnimation();
    useEffect(()=>{
        if(inView){
            head.start({
                y:0,
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
            describe.start({
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
            card_middle.start({
                y:0,
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
            

        }
        if(!inView){
            head.start({y:'-200vw',transition:{
                    type: 'spring' , duration:2,bounce:0.15
                }});
            title.start({x:'200vw',transition:{
                    type: 'spring' , duration:2,bounce:0.15
                }});
            describe.start({x:'-200vw',transition:{
                    type: 'spring' , duration:2,bounce:0.15
                }});
            card_right.start({x:'200vw',transition:{
                    type: 'spring' , duration:2,bounce:0.15
                }});
            card_left.start({x:'-200vw',transition:{
                    type: 'spring' , duration:2,bounce:0.15
                }});
            card_middle.start({y:'200vw',transition:{
                    type: 'spring' , duration:2,bounce:0.15
                }});

        }
    },[inView]);


    return (
        <div ref={ref}className="wedo-section">
            <motion.div className="title" animate={head}>WHAT WE DO</motion.div>
            <motion.div className="catch" animate={title}>WE FOCUS ON</motion.div>
            <motion.div className="describe" animate={describe} >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo quis repellat ipsa dolorem reiciendis distinctio quidem</motion.div>

            <ul class="cards-wedo" >
                <motion.li class="cards__item" animate={card_left}>
                    <div class="card-wedo card-odd">
                    <div class="card__content">
                        <img class="head-img" src="https://gtkit.rometheme.pro/gangsta/wp-content/uploads/sites/19/2023/02/3-Service.png"></img>
                        <div class="card__title">Flex Grow</div>
                        <p class="card__text">This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.</p>
                    </div>
                    </div>
                </motion.li>
                <motion.li class="cards__item" animate={card_middle}>
                    <div class="card-wedo card-even">
                    <div class="card__content">
                    <img class="head-img" src="https://gtkit.rometheme.pro/gangsta/wp-content/uploads/sites/19/2023/02/4-Service.png"></img>

                        <div class="card__title">Flex Grow</div>
                        <p class="card__text">This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.</p>
                    </div>
                    </div>
                </motion.li>
                <motion.li class="cards__item" animate={card_right}>
                    <div class="card-wedo card-odd">
                    <div class="card__content">
                    <img class="head-img" src="https://gtkit.rometheme.pro/gangsta/wp-content/uploads/sites/19/2023/02/5-Service.png"></img>

                        <div class="card__title">Flex Grow</div>
                        <p class="card__text">This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.</p>
                    </div>
                    </div>
                </motion.li>
                </ul>
        </div>
        );
    }
    
    export default Wedo; 