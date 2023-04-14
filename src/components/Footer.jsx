import React from "react";
import "../pages/footer.css";
const Footer = () =>{
    return (
           <div className="footer-section">
                <div className="footer-title">PolarsDev</div>
                <div className="footer-catch">Your polaris for developement</div>
                 <div className="footer-social">
                    <a href="#" title=""><i className="bx bxl-facebook footer-social-button footer-social-fb"></i></a>
                    <a href="#" title="" ><i className="bx bxl-instagram footer-social-button footer-social-in"><div className="footer-ins-bg"></div></i></a>
                    <a href="#" title="" ><i className="bx bxl-linkedin  footer-social-button footer-social-tw"></i></a>
                 </div> 
                <div className="footer-divider"></div>
                <div className="footer-copyright">copyright 2023 © All rights reserved by PolarsDev</div>
           </div> 
        );
    }
    
    export default Footer; 