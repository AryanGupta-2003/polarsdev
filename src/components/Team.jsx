import React,{Component} from 'react';
import "../pages/team.css";
import { motion } from "framer-motion"
import {useInView} from 'react-intersection-observer'
import { useEffect , useState }  from 'react';
import { useAnimation } from 'framer-motion';
import {useRef} from 'react';

const Team = () =>{
    
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
    const desc = useAnimation();
    const cardleft = useAnimation();
    const cardright= useAnimation();
    const cardup= useAnimation();
    const carddown= useAnimation();
    var setflag=true;
    useEffect(()=>{
        if(inView){
            console.log(width);
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
            desc.start({
                x:0,
                transition:{
                    type: 'spring' , duration:4,bounce:0.15
                }
            });
            cardleft.start({
                x:0,
                transition:{
                    type: 'spring' , duration:4,bounce:0.15
                }
            });
            cardup.start({
                y:0,
                transition:{
                    type: 'spring' , duration:4,bounce:0.15
                }
            });
            carddown.start({
                y:0 ,
                transition:{
                    type: 'spring' , duration:4,bounce:0.15
                }
            });
            cardright.start({
                x:0,
                transition:{
                    type: 'spring' , duration:4,bounce:0.15
                }
            });
            

        }
        if(setflag && !inView && width>800){
            
            head.start({x:'-100vw',transition:{
                    type: 'spring' , duration:1.5,bounce:0.15
                }});
            title.start({x:'100vw',transition:{
                    type: 'spring' , duration:1.5,bounce:0.15
                }});
            desc.start({x:'-100vw',transition:{
                    type: 'spring' , duration:1.5,bounce:0.15
                }});    
           
            cardleft.start({x:'-100vw',transition:{
                    type: 'spring' , duration:1.5,bounce:0.15
                }});
            cardright.start({x:'100vw',transition:{
                    type: 'spring' , duration:1.5,bounce:0.15
                }});
            carddown.start({y:'100vw',transition:{
                    type: 'spring' , duration:1.5,bounce:0.15
                }});
            cardup.start({y:'-100vw',transition:{
                    type: 'spring' , duration:1.5,bounce:0.15
                }});
        }
    },[inView]);
    

    return (
        <div ref={ref}>
        <div ref={elementRef}  className='team-section'>

        <motion.div className='team-title' animate={head} >THE TEAM</motion.div>
        <motion.div className='team-catch' animate={title}>OUR DEVELOPEMENT WIZARDS</motion.div>
        <motion.div className='team-desc' animate={desc}>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sunt quibusdam deserunt corrupti expedita quos repellat, cupiditate dolores voluptatum quasi!</motion.div>

            <ul class="cards-team">
            <motion.li animate={cardleft}>
                <a href="" class="card-team">
                <img src="https://wallpapercave.com/wp/wp4975694.jpg" class="card-team__image" alt="" />
                <div class="card-team__overlay">
                    <div class="card-team__header">
                    <svg class="card-team__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
                    <img class="card-team__thumb" src="https://gtkit.rometheme.pro/gangsta/wp-content/uploads/sites/19/2023/02/3-Service.png" alt="" />
                    <div class="card-team__header-text">
                        <h3 class="card-team__title">Aryan Gupta</h3>
                        <span class="card-team__status">C.E.O</span>
                    </div>          
                    </div>
                    <p class="card-team__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
                </div>
                </a>
            </motion.li>
            <motion.li animate={carddown}>
                <a href="" class="card-team">
                <img src="https://wallpapercave.com/wp/wp4975694.jpg" class="card-team__image" alt="" />
                <div class="card-team__overlay">        
                    <div class="card-team__header">
                    <svg class="card-team__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
                    <img class="card-team__thumb" src="https://gtkit.rometheme.pro/gangsta/wp-content/uploads/sites/19/2023/02/3-Service.png" alt="" />
                    <div class="card-team__header-text">
                        <h3 class="card-team__title">Ashish Gutpa</h3>
                        <span class="card-team__status">C.E.O</span>
                    </div>
                    </div>
                    <p class="card-team__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
                </div>
                </a>
            </motion.li>
            <motion.li animate={cardup}>
                <a href="" class="card-team">
                <img src="https://wallpapercave.com/wp/wp4975694.jpg" class="card-team__image" alt="" />
                <div class="card-team__overlay">
                    <div class="card-team__header">
                    <svg class="card-team__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
                    <img class="card-team__thumb" src="https://gtkit.rometheme.pro/gangsta/wp-content/uploads/sites/19/2023/02/3-Service.png" alt="" />
                    <div class="card-team__header-text">
                        <h3 class="card-team__title">Rupesh Shandilya</h3>
                        <span class="card-team__status">C.E.O</span>
                    </div>          
                    </div>
                    <p class="card-team__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
                </div>
                </a>
                </motion.li>
            <motion.li animate={carddown}>
                <a href="" class="card-team">
                <img src="https://wallpapercave.com/wp/wp4975694.jpg" class="card-team__image" alt="" />
                <div class="card-team__overlay">
                    <div class="card-team__header">
                    <svg class="card-team__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
                    <img class="card-team__thumb" src="https://gtkit.rometheme.pro/gangsta/wp-content/uploads/sites/19/2023/02/3-Service.png" alt="" />
                    <div class="card-team__header-text">
                        <h3 class="card-team__title">Aryan Bansal</h3>
                        <span class="card-team__status">C.E.O</span>
                    </div>          
                    </div>
                    <p class="card-team__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
                </div>
                </a>
            </motion.li> 
            <motion.li animate={cardright}>
                <a href="" class="card-team">
                <img src="https://wallpapercave.com/wp/wp4975694.jpg" class="card-team__image" alt="" />
                <div class="card-team__overlay">
                    <div class="card-team__header">
                    <svg class="card-team__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
                    <img class="card-team__thumb" src="https://gtkit.rometheme.pro/gangsta/wp-content/uploads/sites/19/2023/02/3-Service.png" alt="" />
                    <div class="card-team__header-text">
                        <h3 class="card-team__title">Avnee Goyal</h3>
                        <span class="card-team__status">C.E.O</span>
                    </div>          
                    </div>
                    <p class="card-team__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
                </div>
                </a>
            </motion.li>    
            </ul>
        </div>
            
        </div>
        );
    }
    
    export default Team; 