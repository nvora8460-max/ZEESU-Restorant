import React from 'react';
import { Link } from 'react-scroll';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <p style={{fontSize:"50px"}}>ABOUT US</p>
            <h1 className="heading" style={{fontSize:"30px"}}>The only thing we're serious about is food.</h1>
          </div>
          <p className="mid" >
            At ZEESU, we believe that dining is not just about eating, but about experiencing. 
            Our chefs combine fresh organic ingredients with passionate culinary mastery to construct 
            an unforgettable dining journey. From classic family meals to modern culinary innovations, 
            every plate represents our devotion to superior standards and taste.
          </p>
          <Link to="menu" spy={true} smooth={true} duration={500}>
            Explore Menu 
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
        <div className="banner">
          <img src="/about.png" alt="Zeesu Restaurant Dining" />
        </div>
      </div>
    </section>
  );
};

export default About;
