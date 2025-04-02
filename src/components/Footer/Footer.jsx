import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer(){
    return(
        <>
        <main>
            <div className="footer-body">
                <div className="footer-top">
                    <div className="footer-left">
                        <img src="./images/background2.png" alt="" className="footer-logo" />
                    </div>
                    <div className="footer-right">
                        <div className="first-col">
                            <h3>RESOURCES</h3>
                            <NavLink className={"footer-link"} to="/">Home</NavLink>
                            <NavLink className={"footer-link"}  to="/about">About Us</NavLink>
                                                     
                        </div>
                        <div className="second-col">
                        <h3>FOLLOW US</h3>
                        <NavLink className={"footer-link"}  to="">Privacy Policy</NavLink> 
                        <NavLink className={"footer-link"} to="/contact">Contact Us</NavLink>
                        </div>
                        <div className="third-col">
                            <h3>LEGAL</h3>
                            <NavLink className={"footer-link"} to="/github">Github</NavLink>
                            <NavLink className={"footer-link"} to="">Terms</NavLink>
                        </div>
                        </div>                    
                </div>
                <div className="footer-bottom">
                    <p>Copyright © 2023 All rights reserved </p>
                    <div className="socials">
                        <img src="./images/facebook.png" alt="" className="social-icon" />
                        <img src="./images/instagram.png" alt="" className="social-icon" />
                        <img src="./images/twitter.png" alt="" className="social-icon" />
                        <img src="./images/linkedin.png" alt="" className="social-icon" />
                    </div>


                </div>
            </div>
        </main>
        
        
        </>
    )
}
export default Footer;