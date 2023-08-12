import React from "react";
import "./Hero.css";
import Cards from "./Cards";
import { Link } from "react-router-dom";
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
            At Belmont Private Hospital, we proudly provide evidence-based
            mental health treatment delivered by an experienced team of
            healthcare professionals. <br/>We’re here to help with inpatient and day
            therapy treatment options to help you or a loved one with their
            mental health recovery.
          </h2>

          <Link to="/test" className="hero-button">
            <p className="mr-2">Get Started</p>
            <i className="fa-solid fa-arrow-right "></i>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Hero;
