import React from 'react';
import { Link } from 'react-router-dom';

function HeroSection(){
    return(
        <>
        <main>
            <div className="image">
                <img src="./images/heroimage.jpeg" alt="" className="heroimage" />
            </div>
            <div className="content">
                <h1>Arijit Chattopadhyay <br /> <span>Front-End Web Developer</span></h1>
             <Link to="https://drive.google.com/file/d/1cAHzwq2GgUx2FquHYEUK8CjMKhV22z6y/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                <button className="download-button">Resume</button>
            </Link>
            </div>
        </main>
       
       
       
       </>
    );
}
export default HeroSection;