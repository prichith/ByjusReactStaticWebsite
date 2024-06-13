import React from "react";
import teacher1 from '../images/teacher1.png';
import teacher2 from '../images/teacher2.png';

const Teacher = () => {
  return (
    <div className="teacher-sec-head">
      <div className="teacher-sec-gap">
        <div className="container">
          <div className="heading">
            <h6>Practice Advice</h6>
            <h2>Our Experts Teacher</h2>
            <p>
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
          </div>
        </div>
        <div className="testimonial-block">
          <div className="container testimonial-flx">
            <div className="testimonials-card">
              <img className="teacher-img" src={teacher1} alt="a lady is smiling wearing Coat" />
              <p>
                Slate helps you see how many more days you need to work to reach
                your financial goal for the month and year.
              </p>
              <div>
                <span className="material-symbols-outlined icn-star-filled">
                  star
                </span>
                <span className="material-symbols-outlined icn-star-filled">
                  star
                </span>
                <span className="material-symbols-outlined icn-star-filled">
                  star
                </span>
                <span className="material-symbols-outlined icn-star-filled">
                  star
                </span>
                <span className="material-symbols-outlined icn-star-filled icn-star-outline">
                  star
                </span>
              </div>
              <div className="designer">
                <h5>Regina Miles</h5>
                <h6>Designer</h6>
              </div>
            </div>
            <div className="testimonials-card">
              <img className="teacher-img" src={teacher2} alt="a man who is smiling" />
              <p>
                Slate helps you see how many more days you need to work to reach
                your financial goal for the month and year.
              </p>
              <div>
                <span className="material-symbols-outlined icn-star-filled">
                  star
                </span>
                <span className="material-symbols-outlined icn-star-filled">
                  star
                </span>
                <span className="material-symbols-outlined icn-star-filled">
                  star
                </span>
                <span className="material-symbols-outlined icn-star-filled">
                  star
                </span>
                <span className="material-symbols-outlined icn-star-filled icn-star-outline">
                  star
                </span>
              </div>
              <div className="designer">
                <h5>Regina Miles</h5>
                <h6>Designer</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
