import React,{Component} from 'react';
import "../pages/about.css";


const About = () =>{
    return (
        
        <div className="about-section">
            <div className="content">
            <h3 className="content-heading">ABOUT POLARSDEV</h3>
            <h3 className="content-catch">PASSIONATELY CREATIVE</h3>
                <div class="card-container">
                    <div class="card">
                        <h2>Background</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ipsum voluptatem unde laboriosam iure suscipit vero minus, nemo architecto, facere asperiores labore facilis perspiciatis quidem corrupti natus maiores eveniet eum. Numquam sint velit minima in illo exercitationem omnis, veniam odio facere, totam ipsam impedit voluptatibus. Corporis nobis possimus at dolor.</p>
                    </div>
                    <span className="divider"></span>
                    <div class="card">
                        <h2>Goals</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quas placeat minima corporis quae tenetur nemo earum optio, corrupti quibusdam obcaecati! Maiores, commodi. Cum recusandae tempore iure ex blanditiis eaque?</p>
                        <ul class="goals">
                        <li>Goal 1</li>
                        <li>Goal 2</li>
                        <li>Goal 3</li>
                
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      
        );
    }
    
    export default About; 