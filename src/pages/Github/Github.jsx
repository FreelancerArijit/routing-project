import React from 'react';
import { useEffect } from 'react';
import {useState} from 'react';

function Github(){

    const [data, setData] = React.useState([]);
    useEffect(() =>{
        fetch("https://api.github.com/users/FreelancerArijit")
            .then((response) => response.json())
            .then(data =>  { 
                console.log(data)           
                 setData(data)
    })
    }, []);

    return(
        <>

        <div className="github-body">
            <div className="left">
            <img src={data.avatar_url} width={300} alt="" className="src" />
            </div>

            <div className="right">
            <h1>{data.name}</h1>
            <h2>Github followers: {data.followers}</h2>
            <h3>Total projects: {data.public_repos}</h3>
            <h4>Projects: {data.repos_url}</h4>
       
            </div>
             </div>

       
        
        </>
    );
}
export default Github;