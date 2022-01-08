import React from "react";
import mypassphoto from "../images/SRPHOTO.jpg";

const Smalld = () => {
  return (
    <>
      <div className=" p-4 d-flex justify-content-around" style={{backgroundColor:"teal"}}>
        <div
          className="card text-dark  mb-3   "
          style={{ maxWidth: "18rem" , backgroundColor:"#D9EEE1" }}>
        
          
          <div className="card-body">
            <h5 className="card-title"></h5>

            <img className="card-text" src={mypassphoto} alt="" />
          </div>
        </div>
      <div className="align-self-center text-dark p-5 " style={{backgroundColor: "wheat" , borderRadius:"20px"}}>
        <h3  style={{fontFamily: "cursive"}}>Hi, I am Shweta Rajput </h3>
        <h6  style={{fontFamily: "sans-serif"}}>MERN Stack Developer </h6>
        </div>
        <div className="align-self-center text-dark p-5 " style={{backgroundColor: "wheat" , borderRadius:"20px"}}>
        <h3  style={{fontFamily: "cursive"}}>My Projects </h3>
        <button style={{ backgroundColor: "#FFC0C7" ,fontFamily: "sans-serif", borderRadius:"5px"}}>My Work </button>
        </div>
      </div>
    </>
  );
};

export default Smalld;
