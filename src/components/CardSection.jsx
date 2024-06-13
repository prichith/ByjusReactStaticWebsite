import React from "react";

const CardSection = () => {
  return (
    <div className="cardsection">
      <div className="container">
        <div className="card-block">
          <div className="card">
            <div className="card-icon">
              <span className="material-symbols-outlined">check_circle</span>
            </div>
            <h3>Books Library</h3>
            <p>
              The gradual accumulation of information about atomic and
              small-scale behaviour...
            </p>
          </div>
          <div className="card">
            <div className="card-icon">
              <span className="material-symbols-outlined">layers</span>
            </div>
            <h3>2,769 online courses</h3>
            <p>
              The gradual accumulation of information about atomic and
              small-scale behaviour...
            </p>
          </div>
          <div className="card">
            <div className="card-icon">
              <span className="material-symbols-outlined">newsmode</span>
            </div>
            <h3>Sales Planning</h3>
            <p>
              The gradual accumulation of information about atomic and
              small-scale behaviour...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
