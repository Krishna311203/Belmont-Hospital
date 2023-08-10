import React from "react";
import "./Hero.css";
import Cards from "./Cards";
import {Link} from 'react-router-dom'
function Hero() {
  return (
    <>
      
       <div className="">
          <div className=" left-side-gradient-div"> </div>
          <div className=" right-side-gradient-div"> </div>
       <div className="hero-div">
        <h1 className="hero-title">
          Your Mental <br></br> Health Matters
        </h1>
        <h3 className=" hero-text">Rediscover Happiness</h3>
        <h2 className="hero-desc">
          Ready to embrace a colorful life again? Embark on your healing journey
          at<br /> Belmont Hospital.
        </h2>

        <Link to='/test' className="hero-button">
          <p className="mr-2">Get Started</p>
          <i className="fa-solid fa-arrow-right "></i>
        </Link>
      </div>

       </div>
   
       
      

      
    </>
  );
}

export default Hero;