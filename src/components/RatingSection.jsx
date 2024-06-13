import React from "react";
import ratingImg1 from "../images/rating img1.png";
import ratingImg2 from "../images/rating img2.png";
import ratingImg3 from "../images/rating img3.png";
import ratingImg4 from "../images/rating img4.png";

const RatingSection = () => {
  return (
    <div className="ratings-sec">
      <div className="container rating-sec-gap">
        <div className="heading">
          <h6>Practice Advice</h6>
          <h2>Make online education accessible</h2>
          <p>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="rating-card-block">
          <div className="rating-card">
            <div className="rating-img">
              <img src={ratingImg1} alt="a lady" />
              <div className="icon-sale">Sale</div>
              <div className="icon-block">
                <button className="rating-icon-box">
                  <span className="material-symbols-outlined">favorite</span>
                </button>
                <button className="rating-icon-box">
                  <span className="material-symbols-outlined">
                    shopping_cart
                  </span>
                </button>
                <button className="rating-icon-box">
                  <span className="material-symbols-outlined icn-view">
                    visibility
                  </span>
                </button>
              </div>
            </div>
            <div className="rating-content">
              <div className="rating-cont-head">
                <p className="rating-cont-head-eng">English</p>
                <button>
                  <span className="material-symbols-outlined icn-star-filled star-size">
                    star
                  </span>
                  <p className="rating-cont-head-rate">4.9</p>
                </button>
              </div>
              <h5 className="rating-cont-h5-top">Graphic Design</h5>
              <p className="rating-para">
                We focus on ergonomics and meeting you....
              </p>
              <div className="rating-sales">
                <span className="material-symbols-outlined icn-download">
                  download
                </span>
                <h6>15 Sales</h6>
              </div>
              <div className="offer-price">
                <h5 className="old-price">
                  <span>$16.48</span>
                </h5>
                <h5 className="new-price">
                  <span>$6.48</span>
                </h5>
              </div>
              <div className="rating-cont-list">
                <div className="rating-icons">
                  <span className="material-symbols-outlined icn-alarm">
                    alarm
                  </span>
                  <p>Pro...</p>
                </div>
                <div className="rating-icons">
                  <span className="material-symbols-outlined icn-chart">
                    monitoring
                  </span>
                  <p>64 Les...</p>
                </div>
                <div className="rating-icons">
                  <span className="material-symbols-outlined icn-alarm">
                    alarm
                  </span>
                  <p>22hr..</p>
                </div>
              </div>
              <button className="btn-common btn-outline rating-cont-btn rating-btn">
                Learn More
                <span className="material-symbols-outlined nxt-icn rating-nxt-icn-align">
                  navigate_next
                </span>
              </button>
            </div>
          </div>

          <div className="rating-card">
            <div className="rating-img">
              <img
                className="rating-img"
                src={ratingImg2}
                alt="a laptop,mobile and a plant on a table"
              />
              <div className="icon-sale">Sale</div>
              <div className="icon-block">
                <button className="rating-icon-box">
                  <span className="material-symbols-outlined">favorite</span>
                </button>
                <button className="rating-icon-box">
                  <span className="material-symbols-outlined">
                    shopping_cart
                  </span>
                </button>
                <button className="rating-icon-box">
                  <span className="material-symbols-outlined icn-view">
                    visibility
                  </span>
                </button>
              </div>
            </div>
            <div className="rating-content">
              <div className="rating-cont-head">
                <p className="rating-cont-head-eng">English</p>
                <button>
                  <span className="material-symbols-outlined icn-star-filled star-size">
                    star
                  </span>
                  <p className="rating-cont-head-rate">4.9</p>
                </button>
              </div>
              <h5 className="rating-cont-h5-top">Graphic Design</h5>
              <p className="rating-para">
                We focus on ergonomics and meeting you....
              </p>
              <div className="rating-sales">
                <span className="material-symbols-outlined icn-download">
                  download
                </span>
                <h6>15 Sales</h6>
              </div>
              <div className="offer-price">
                <h5 className="old-price">
                  <span>$16.48</span>
                </h5>
                <h5 className="new-price">
                  <span>$6.48</span>
                </h5>
              </div>
              <div className="rating-cont-list">
                <div className="rating-icons">
                  <span className="material-symbols-outlined icn-alarm">
                    alarm
                  </span>
                  <p>Pro...</p>
                </div>
                <div className="rating-icons">
                  <span className="material-symbols-outlined icn-chart">
                    monitoring
                  </span>
                  <p>64 Les...</p>
                </div>
                <div className="rating-icons">
                  <span className="material-symbols-outlined icn-alarm">
                    alarm
                  </span>
                  <p>22hr..</p>
                </div>
              </div>
              <button className="btn-common btn-outline rating-cont-btn rating-btn">
                Learn More
                <span className="material-symbols-outlined nxt-icn rating-nxt-icn-align">
                  navigate_next
                </span>
              </button>
            </div>
          </div>

          <div className="rating-card">
            <div className="rating-img">
              <img className="rating-img" src={ratingImg3} alt="a lady" />
              <div className="icon-sale">Sale</div>
              <div className="icon-block">
                <button className="rating-icon-box">
                  <span className="material-symbols-outlined">favorite</span>
                </button>
                <button className="rating-icon-box">
                  <span className="material-symbols-outlined">
                    shopping_cart
                  </span>
                </button>
                <button className="rating-icon-box">
                  <span className="material-symbols-outlined icn-view">
                    visibility
                  </span>
                </button>
              </div>
            </div>
            <div className="rating-content">
              <div className="rating-cont-head">
                <p className="rating-cont-head-eng">English</p>
                <button>
                  <span className="material-symbols-outlined icn-star-filled star-size">
                    star
                  </span>
                  <p className="rating-cont-head-rate">4.9</p>
                </button>
              </div>
              <h5 className="rating-cont-h5-top">Graphic Design</h5>
              <p className="rating-para">
                We focus on ergonomics and meeting you....
              </p>
              <div className="rating-sales">
                <span className="material-symbols-outlined icn-download">
                  download
                </span>
                <h6>15 Sales</h6>
              </div>
              <div className="offer-price">
                <h5 className="old-price">
                  <span>$16.48</span>
                </h5>
                <h5 className="new-price">
                  <span>$6.48</span>
                </h5>
              </div>

              <div className="rating-cont-list">
                <div className="rating-icons">
                  <span className="material-symbols-outlined icn-alarm">
                    alarm
                  </span>
                  <p>Pro...</p>
                </div>
                <div className="rating-icons">
                  <span className="material-symbols-outlined icn-chart">
                    monitoring
                  </span>
                  <p>64 Les...</p>
                </div>
                <div className="rating-icons">
                  <span className="material-symbols-outlined icn-alarm">
                    alarm
                  </span>
                  <p>22hr..</p>
                </div>
              </div>
              <button className="btn-common btn-outline rating-cont-btn rating-btn">
                Learn More
                <span className="material-symbols-outlined nxt-icn rating-nxt-icn-align">
                  navigate_next
                </span>
              </button>
            </div>
          </div>

          <div className="rating-card">
            <div className="rating-img">
              <img
                className="rating-img"
                src={ratingImg4}
                alt="2 ladies sitting and talking together"
              />
              <div className="icon-sale">Sale</div>
              <div className="icon-block">
                <button className="rating-icon-box">
                  <span className="material-symbols-outlined">favorite</span>
                </button>
                <button className="rating-icon-box">
                  <span className="material-symbols-outlined">
                    shopping_cart
                  </span>
                </button>
                <button className="rating-icon-box">
                  <span className="material-symbols-outlined icn-view">
                    visibility
                  </span>
                </button>
              </div>
            </div>
            <div className="rating-content">
              <div className="rating-cont-head">
                <p className="rating-cont-head-eng">English</p>
                <button>
                  <span className="material-symbols-outlined icn-star-filled star-size">
                    star
                  </span>
                  <p className="rating-cont-head-rate">4.9</p>
                </button>
              </div>
              <h5 className="rating-cont-h5-top">Graphic Design</h5>
              <p className="rating-para">
                We focus on ergonomics and meeting you....
              </p>
              <div className="rating-sales">
                <span className="material-symbols-outlined icn-download">
                  download
                </span>
                <h6>15 Sales</h6>
              </div>
              <div className="offer-price">
                <h5 className="old-price">
                  <span>$16.48</span>
                </h5>
                <h5 className="new-price">
                  <span>$6.48</span>
                </h5>
              </div>
              <div className="rating-cont-list">
                <div className="rating-icons">
                  <span className="material-symbols-outlined icn-alarm">
                    alarm
                  </span>
                  <p>Pro...</p>
                </div>
                <div className="rating-icons">
                  <span className="material-symbols-outlined icn-chart">
                    monitoring
                  </span>
                  <p>64 Les...</p>
                </div>
                <div className="rating-icons">
                  <span className="material-symbols-outlined icn-alarm">
                    alarm
                  </span>
                  <p>22hr..</p>
                </div>
              </div>
              <button className="btn-common btn-outline rating-cont-btn rating-btn">
                <span>Learn More</span>
                <span className="material-symbols-outlined nxt-icn rating-nxt-icn-align">
                  navigate_next
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingSection;
