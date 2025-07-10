import React from 'react';
import Card from '../../components/Card/Card.jsx';
import { NavLink } from 'react-router-dom';

function Project(){
    return(
        <>
        <div className="project-container">
        <h1>Latest Project</h1>

         <Card  image="./images/project1.png"
             title="Food Delivering Website"
             description=" Building a food ordering website’s
              front-end using HTML, CSS, and React.js
               for structure, styling, and interactivity.
                The UI will include a home page, 
                 ensuring a responsive and smooth user experience. "
             />
                <button onClick={() => window.open("https://jade-bombolone-2adebb.netlify.app/", "_blank")} className="view-project">View Project</button>
        
            <Card  image="./images/project1.png"
             title="Food Delivering Website"
             description=" Building a food ordering website’s
              front-end using HTML, CSS, and React.js
               for structure, styling, and interactivity.
                The UI will include a home page, 
                 ensuring a responsive and smooth user experience. "
             />
                <button onClick={() => window.open("https://jade-bombolone-2adebb.netlify.app/", "_blank")} className="view-project">View Project</button>
                
                <Card  image="./images/project2.png"
             title="Brand Landing Page"
             description=" Building a brand landing page using HTML, CSS, and JavaScript.
              The UI will include a home page, Location page and contact page
               ensuring a responsive and smooth user experience. "
             />
                <button onClick={() => window.open("https://dazzling-duckanoo-902281.netlify.app/", "_blank")} className="view-project">View Project</button>

               <Card  image="./images/project1.png"
             title="Food Delivering Website"
             description=" Building a food ordering website’s
              front-end using HTML, CSS, and React.js
               for structure, styling, and interactivity.
                The UI will include a home page, 
                 ensuring a responsive and smooth user experience. "
             />
                <button onClick={() => window.open("https://jade-bombolone-2adebb.netlify.app/", "_blank")} className="view-project">View Project</button>  
             
        </div>

        
       
        
        </>
    );
}
export default Project;