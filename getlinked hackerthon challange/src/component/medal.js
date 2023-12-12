import React from 'react'
import cup from "../images/9486889 1.svg"
import medalone from "../images/silver_medal 1.svg";
import medaltwo from "../images/gold_medal 1.svg";
import medalthree from "../images/bronze_medal 1.svg";

const medal = () => {
  return (
    <div className="medal">
      <h2>
        Prizes and <span>Rewards</span>
      </h2>
      <p className='p'>
        Highlight of the prizes or rewards for winners and for participants.
      </p>

      <div className="prize">
        <img src={cup} alt="" className="cup" />
        <div className="position">
          <div className="gift">
            <img src={medalone} alt="" />
            <div className="word">
              <h4>2nd</h4>
              <p>Runner</p>
              <span>N300,000</span>
            </div>
          </div>
          <div className="gift">
            <img src={medaltwo} alt="" />
            <div className="word">
              <h4>1st</h4>
              <p>Runner</p>
              <span>N400,000</span>
            </div>
          </div>
          <div className="gift">
            <img src={medalthree} alt="" />
            <div className="word">
              <h4>3rd</h4>
              <p>Runner</p>
              <span>N150,000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default medal