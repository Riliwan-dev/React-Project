import React from 'react'
import star from "../images/star.png";
import star2 from "../images/star (1).svg";
import starpu from "../images/star pu.svg";

const seventhrow = () => {
  return (
    <div className="timeline">
      <img src={starpu} alt="" className="starpu" />
      <img src={star} alt="" className="star" />
      <img src={star2} alt="" className="star2" />
      <div className="timeline-header">
        <h2>Timeline</h2>
        <p>
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </p>
      </div>
      <div className="step">
        <div className="step-item">
          <div className="key">
            <h3>Hackathon Announcement</h3>
            <p>
              The getlinked tech hackathon 1.0 is formally announced to the
              general public and teams begin to get ready to register
            </p>
          </div>
          <div className="num">
            <span className="diff">1</span>
            <div className="date">November 18, 2023</div>
          </div>
        </div>

        <div className="step-item">
          <div className="key">
            <h3>Teams Registration begins</h3>
            <p>
              Interested teams can now show their interest in the getlinked tech
              hackathon 1.0 2023 by proceeding to register
            </p>
          </div>
          <div className="num">
            <span>2</span>
            <div className="date">November 18, 2023</div>
          </div>
        </div>
        <div className="step-item">
          <div className="key">
            <h3>Teams Registration ends</h3>
            <p>Interested Participants are no longer Allowed to register </p>
          </div>
          <div className="num">
            <span>3</span>
            <div className="date">November 18, 2023</div>
          </div>
        </div>
        <div className="step-item">
          <div className="key">
            <h3>Announcement of the accepted teams and ideas</h3>
            <p>
              All teams whom idea has been accepted into getlinked tech
              hackathon 1.0 2023 are formally announced
            </p>
          </div>
          <div className="num">
            <span>4</span>
            <div className="date">November 18, 2023</div>
          </div>
        </div>
        <div className="step-item">
          <div className="key">
            <h3>Getlinked Hackathon 1.0 Offically Begins</h3>
            <p>
              Accepted teams can now proceed to build their ground breaking
              skill driven solutions
            </p>
          </div>
          <div className="num">
            <span>5</span>
            <div className="date">November 18, 2023</div>
          </div>
        </div>
        <div className="step-item">
          <div className="key">
            <h3>Demo Day</h3>
            <p>
              Teams get the opportunity to pitch their projects to judges. The
              winner of the hackathon will also be announced on this day
            </p>
          </div>
          <div className="num">
            <span>6</span>
            <div className="date">November 18, 2023</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default seventhrow