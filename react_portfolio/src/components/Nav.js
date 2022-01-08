import React from "react";
import { Outlet, Link } from "react-router-dom";

import logo from "../images/logo192.png";

const Nav = () => {
  return (
    <>
      <nav className="  navbar navbar-expand-sm bg-dark navbar-dark sticky-top ">
          <div className="ms-5 navbar-brand ">
              
          <img src={logo} alt="" width="30" height="24"   />
          
          </div>
          
  
        
         <div className="ms-auto ">
        <ul className="navbar-nav ">
          <li className="nav-item fs-4  ">
            <Link className="nav-link  " to="">
              Home
            </Link>
          </li>

          <li className="nav-item fs-4" >
            <Link className="nav-link" to="/smalld">
              About Me
            </Link>
          </li>
          <li className="nav-item fs-4">
            <Link className="nav-link" to="/whatido">
              What I do
            </Link>
          </li>
          <li className="nav-item fs-4">
            <Link className="nav-link" to="/whoiam">
              Who I am
            </Link>
          </li>
          <li className="nav-item fs-4">
            <Link className="nav-link" to="/myprojects">
              My Projects
            </Link>
          </li>
          <li className="nav-item fs-4">
            <Link className="nav-link" to="/address">
             
              Reach me
            </Link>
          </li>
          <li className="nav-item fs-4">
            <Link className="nav-link " to="/contact">
              
              Contact
            </Link>
          </li>
        </ul>
        </div>
      </nav>
     </>

  // <>
  // <nav className="navbar  bg-dark navbar-dark">
  // <div className="container-fluid">
  //   <Link className="navbar-brand" to="#">
  //     <img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top"/>
  //     Shweta Rajput
  //   </Link>
  // </div>
  // </nav>
  // </>
     
  );
};

export default Nav;
