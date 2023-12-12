import React from 'react'
import chain from "../images/chain-9365116-7621444.svg"
import manin from "../images/Image 1.svg"
import countdown from "../images/Countdown time.svg"
import creactive from "../images/Creative 1.svg";
import fire from "../images/1f4a5.svg"
import { Link } from "react-router-dom";
import star from "../images/star (1).svg"


const secondrow = () => {
  return (
    <div className="hackathon">
      <div className="hackathon-left">
        <img src={creactive} alt="" className='creactive' />
        <h2>getlinked Tech</h2>
        <h2> Hackathon <span>1.0</span><img src={chain} alt="" className='chain'/><img src={fire} alt="" /></h2>
        <p>
          Participate in getlinked tech Hackathon 2023 stand a chance to win a
          Big prize
        </p>
        <Link className="register" to="/register">
          register
        </Link>
        <img src={countdown} alt="" className="countdown" />
        <img src={star} alt="" className="star" />
        <img src={star} alt="" className="star2" />
      </div>
      <div className="hackathon-right">
        <img src={manin} alt="" />
      </div>
    </div>
  );
}

export default secondrow