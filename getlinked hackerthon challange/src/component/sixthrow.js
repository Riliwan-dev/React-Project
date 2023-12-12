import React from 'react'
import faqimg from '../images/cwok_casual_21 1.svg';
import stargr from "../images/sata gra.svg";
import star from "../images/star.png";
import star2 from "../images/star (1).svg";
import starpu from "../images/star pu.svg";

function FAQItem(props) {
  return (
      <div>
        <p>{props.question}</p>
        <span >+</span>
      </div>

  );
}

const sixthrow = () => {
  return (
    <div className="faq">
      <div className="questions">
        <h2>
          Frequently Ask <span>Question</span>
        </h2>
        <p>
          We got answers to the questions that you might want to ask about
          <span> getlinked Hackathon 1.0</span>
        </p>
        <div className="faq-item">
          <FAQItem question="Can I work on a project I started before the hackathon?" />
          <FAQItem question="What happens if I need help during the hackathon?" />
          <FAQItem question="What happens if I don't have an idea for a project?" />
          <FAQItem question="Can I join a team or do I have to come with one?" />
          <FAQItem question="What happens after the hackathon ends" />
          <FAQItem question="Can I work on a project I started before the hackathon?" />
        </div>
      </div>
      <div className="faq-image">
        <img src={faqimg} alt="" />
        <p className="one">?</p>
        <p className="two">?</p>
        <p className="three">?</p>
        <img src={starpu} alt="" className="starpu" />
        <img src={star} alt="" className="star" />
        <img src={star2} alt="" className="star2" />
        <img src={stargr} alt="" className="stargr" />
        <img src={stargr} alt="" className="stargr2" />
      </div>
    </div>
  );
}

export default sixthrow