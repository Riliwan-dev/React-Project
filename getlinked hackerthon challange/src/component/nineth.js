import React from 'react'
import lock from '../images/08 1.svg'
import mark from '../images/list terms.svg'

const nineth = () => {
  return (
    <div className="privacy">
      <div className="terms">
        <h2>
          Privacy Policy and <br /> <span>Terms</span>
        </h2>
        <h6>Last updated on September 12, 2023</h6>
        <p>
          Below are our privacy & policy, which outline a lot of goodies. it’s
          our aim to always take of our participant
        </p>
        <div className="privacy-box">
          <p className='p'>
            At getlinked tech Hackathon 1.0, we value your privacy and are
            committed to protecting your personal information. This Privacy
            Policy outlines how we collect, use, disclose, and safeguard your
            data when you participate in our tech hackathon event. By
            participating in our event, you consent to the
          </p>
          <h3>Licensing Policy</h3>
          <span>Here are terms of our Standard License:</span>
          <div>
            <img src={mark} alt="" />
            <p>
              The Standard License grants you a non-exclusive right to navigate
              and register for our event
            </p>
          </div>
          <div>
            <img src={mark} alt="" />
            <p>
              You are licensed to use the item available at any free source
              sites, for your project developement
            </p>
          </div>
          <div className='btn'>
            {" "}
            <button>Read more</button>
          </div>
        </div>
      </div>
      <div className='lock'>
        <img src={lock} alt="" />
      </div>
    </div>
  );
}

export default nineth