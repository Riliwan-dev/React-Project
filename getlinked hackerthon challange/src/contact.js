import React from 'react'
import Header from "./component/header";
import "./contact.css";
import insta1 from "./images/mdi_instagram.svg";
import insta2 from "./images/ri_linkedin-fill.svg";
import insta3 from "./images/twitt.svg";
import insta5 from "./images/face.svg";
import star from "./images/star.png";
import star2 from "./images/star (1).svg";
import stargr from "./images/sata gra.svg";
import starpu from "./images/star pu.svg";
const contact = () => {
  return (
    <div className="contact">
      <Header />
      <div className="all">
        <img src={starpu} alt="" className="starpu" />
        <img src={stargr} alt="" className="starpu2" />
        <img src={star} alt="" className="star" />
        <img src={star2} alt="" className="star2" />
        <div className="right">
          <h2>Get in touch</h2>
          <p>
            Contact <br /> Information
          </p>
          <p>
            27,Alara Street <br /> Yaba 100012 <br /> Lagos State
          </p>
          <p>Call Us : 07067981819</p>
          <p>
            we are open from Monday-Friday <br /> 08:00am - 05:00pm
          </p>
          <div className="follow">
            <span>Follow us</span> <br />
            <img src={insta1} alt="" />
            <img src={insta3} alt="" />
            <img src={insta5} alt="" />
            <img src={insta2} alt="" />
          </div>
        </div>
        <div className="left">
          <div className="box">
            <p>Questions or need assistance?</p>
            <p>Let us know about it!</p>
            <span>Email us below to any question related to our event</span>
            <form className="input-detail">
              <input type="text" required placeholder="First name" />
               <input
                type="text"
                required
                placeholder="Topic"
                className="topic"
              />

              <input type="text" required placeholder="Mail" />
              <textarea
                name="message"
                placeholder="Message"
                id=""
                cols="30"
                rows="10"
              ></textarea>
              <input type="submit" value="submit" className="sub" />
            </form>
            <div className="icon">
              {" "}
              <img src={insta1} alt="" />
              <img src={insta3} alt="" />
              <img src={insta5} alt="" />
              <img src={insta2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default contact