import React from 'react';
import Card from '../../components/Card/Card.jsx';
import { NavLink } from 'react-router-dom';

function Project(){
    return(
        <>
        <div className="project-container">
        <h1>Latest Project</h1>

         <Card  image="./images/project3.png"
             title="Travel Agency Website"
             description=" Building a travel agency website’s
              where users can view tour plans all details. I using HTML, CSS, and React.js
               for structure, styling, and interactivity.
                "
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

               <Card  image="./images/erds-website.png"
             title="Result publishing Website"
             description=" Building a result publishing static website’s
               using HTML, CSS, Bootstrap and JavaScript
               for structure, styling, and interactivity.
                The UI will include a home page, result page, about page and a contact 
                 ensuring a responsive and smooth user experience. "
             />
                <button onClick={() => window.open("https://erdstalent.netlify.app/", "_blank")} className="view-project">View Project</button>  
             
        </div>

        
       
        
        </>
    );
}
export default Project;