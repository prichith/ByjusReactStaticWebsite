import React from "react";
import bannerImg from '../images/banner-img.png'

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="banner-div">
          <div className="banner-content">
            <h5>Online training</h5>
            <h1>Best Learning Opportunities</h1>
            <p>
              We know how large objects will act, but things on a small scale
            </p>
            <div className="banner-btn">
              <button className="btn-common btn-filled" type="button">
                Get Quote Now
              </button>
              <button className="btn-common btn-outline" type="button">
                Learn More
              </button>
            </div>
          </div>
          <div className="banner-img">
            <img src={bannerImg} alt="banner" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
