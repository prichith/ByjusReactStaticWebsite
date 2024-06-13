import React from "react";
import sectionImg from '../images/section-img.png'

const IntroSection = () => {
  return (
    <div className="intro-section">
      <div className="container contnr-gap">
        <div className="intro-div">
          <div className="intro-img">
            <img src={sectionImg} alt="boy with laptop" />
          </div>

          <div className="intro-content">
            <h2 className="intro-head">Packages that are aprodable</h2>
            <p>
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
            <button className="intro-cont-link">
              <span>Learn More</span>
              <span className="material-symbols-outlined nxt-icn">
                navigate_next
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
