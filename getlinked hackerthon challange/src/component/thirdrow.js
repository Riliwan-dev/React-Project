import React from "react";
import idea from "../images/The big idea.svg";
import stargr from "../images/sata gra.svg";
import starpu from "../images/star pu.svg";
import arrow from "../images/arrow.svg";

const thirdrow = () => {
  return (
    <div className="idea">
      <img src={stargr} alt="" className="stargr"/>
      <img src={idea} alt="" />
      <img src={arrow} alt="" className="arrow" />
      <div>
        <img src={starpu} alt="" className="starpu"/>
        <h2>
          Introduction to getlinked <span>tech Hackathon 1.0</span>
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
    </div>
  );
};

export default thirdrow;
