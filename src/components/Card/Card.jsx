import React from 'react';

function Project({image, title, description}){
    return(
        <>
         <div className="card">            
            <div className="card-image">
                <img src={image} alt="" className="project-image" />
            </div>
            <div className="card-content">
                <h1>{title}</h1>
                <p>{description}</p>

            </div>
        </div>
        
        </>
    );
}
export default Project;