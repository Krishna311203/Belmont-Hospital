import React from "react";
import heroCardImg1 from "../assets/heor-card-img-1.png";
const Cards = () => {
  return (
    <>
      <div className="cards-container">
        {/* card 1 */}
        <div className="hero-cards-div  hero-card-outter-div-1-bg">
          <img className="hero-card-img-1" src={heroCardImg1} alt="asdf" />
          <p className="hero-card-title-1">Title</p>
          <p className="hero-card-desc-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elilabore, ipsum
            aut reprehenderit est!
          </p>
        </div>

        {/* card 2 */}
        <div className="hero-cards-div  hero-card-outter-div-2-bg">
          <img className="hero-card-img-1" src={heroCardImg1} alt="asdf" />
          <p className="hero-card-title-1">Title</p>
          <p className="hero-card-desc-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elilabore, ipsum
            aut reprehenderit est!
          </p>
        </div>

        {/* card 3 */}
        <div className="hero-cards-div  hero-card-outter-div-3-bg">
          <img className="hero-card-img-1" src={heroCardImg1} alt="asdf" />
          <p className="hero-card-title-1">Title</p>
          <p className="hero-card-desc-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elilabore, ipsum
            aut reprehenderit est!
          </p>
        </div>

        {/* card 4 */}
        {/* <div className='hero-cards-div  hero-card-outter-div-4-bg'>
                    <img className='hero-card-img-1' src={heroCardImg1} alt="asdf" />
                    <p className='hero-card-title-1'>Title</p>
                    <p className='hero-card-desc-1'>Lorem ipsum dolor sit amet consectetur adipisicing elilabore, ipsum aut reprehenderit est!</p>
                </div> */}
      </div>
    </>
  );
};

export default Cards;
