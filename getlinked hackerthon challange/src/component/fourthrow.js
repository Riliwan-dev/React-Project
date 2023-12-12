import React from 'react'
import agent from '../images/7450159 1.svg'
import star from "../images/star.png";
import star2 from "../images/star (1).svg";
import ellips from "../images/Ellipse 2.png";



const fourthrow = () => {
  return (
    <div className="idea rule">
      <div>
        <img src={star} alt="" className="star" />
        <img src={star2} alt="" className="star2" />
        <img src={ellips} alt="" className="ell" />

        <h2>
          Rules and <span>Guidelines</span>
        </h2>
        <p>
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </p>
      </div>
      <img src={agent} alt="" />
    </div>
  );
}

export default fourthrow