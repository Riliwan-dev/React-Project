import React from 'react'
import logo1 from "../images/Liberty company logo white colour.svg"
import logo2 from "../images/Liberty company logo white.svg"
import logo3 from "../images/Winwise logo White colour 1.svg"
import logo4 from "../images/wisper logo white.svg";
import logo5 from "../images/Vizual Plus.svg"

const eigth = () => {
  return (
    <div className="partner">
      <h2>Partners and Sponsors</h2>
      <p>
        Getlinked Hackathon 1.0 is honored to have the following major companies
        as its partners and sponsors
      </p>
      <div className="box">
        <div className="box-item">
          <img src={logo1} alt="" />
          <span></span>
          <img src={logo4} alt="" />
        </div>
        <div className="box-item span">
          <p className="kin"></p>
          <p className="kin"></p>
        </div>
        <div className="box-item">
          <img src={logo2} alt="" className='me' />
          <span></span>
          <p>Paybox</p>
        </div>
        <div className="box-item span">
          <p className="kin"></p>
          <p className="kin"></p>
        </div>
        <div className="box-item">
          <img src={logo3} alt="" />
          <span></span>
          <img src={logo5} alt="" />
        </div>
      </div>
    </div>
  );
}

export default eigth