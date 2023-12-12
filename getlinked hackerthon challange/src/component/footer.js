import React from "react";
import insta from '../images/loc.svg'
import insta1 from '../images/mdi_instagram.svg'
import insta2 from '../images/ri_linkedin-fill.svg'
import insta3 from '../images/twitt.svg'
import insta4 from '../images/Group.svg'
import insta5 from '../images/face.svg'


const footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h2>
            get<span className="spa">linked</span>
          </h2>
          <p className="move">
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology
          </p>
          <span>
            Terms of Use <b>|</b> Privacy Policy
          </span>
        </div>
        <div>
          <h5>Useful Links</h5>
          <ol>
            <a href="">Overview</a>
            <a href="">Timeline</a>
            <a href="">FAQs</a>
            <a href="">Register</a>
          </ol>
          <div className="follow">
            <span>Follow us</span>
            <img src={insta1} alt="" />
            <img src={insta3} alt="" />
            <img src={insta5} alt="" />
            <img src={insta2} alt="" />
          </div>
        </div>
        <div>
          <h5>Contact Us</h5>
          <div className="contact">
            <img src={insta4} alt="" />

            <p>+234 6707653444</p>
          </div>
          <div className="contact">
            <img src={insta} alt="" />

            <p className="limit">27,Alara Street Yaba 100012 Lagos State</p>
          </div>
        </div>
      </div>
      <div className="bottom">All rights reserved. © getlinked Ltd.</div>
    </div>
  );
};

export default footer;
