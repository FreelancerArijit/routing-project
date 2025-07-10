import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header(){
    return(
        <>
       <header>
        <div className="logo">
            <Link to = "/">
            <img src="./images/background2.png" alt="" className="primary-logo" />
           
        </Link>
        </div>
        <div className="menu">
           <NavLink to="/" className={"navlink"}>  <li>Home</li> </NavLink>
           <NavLink to="/about" className={"navlink"}> <li>About</li></NavLink>
           <NavLink to="/Contact" className={"navlink"} ><li>Contact</li> </NavLink>
           <NavLink to="/github" className={"navlink"} ><li>Github</li></NavLink>
          <NavLink to="/project" className={"navlink"} ><li>Projects</li></NavLink>
        </div>
        <div className="action-button">            
           <NavLink to="/contact"> <button className="secondary-btn"> Hire Me</button></NavLink>
        </div>
       </header>
        
        </>
    )
}
export default Header;