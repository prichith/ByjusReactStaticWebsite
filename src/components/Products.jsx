import React from "react";

const Products = () => {
  return (
    <div className="product-section">
      <div className="container product-flx contnr-gap">
        <div className="heading product-head">
          <h6>Practice Advice</h6>
          <h2>Featured Products</h2>
          <p className="product-section-head-p">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="product-section-input">
          <input className="input" type="email" placeholder="Your Email" />
          <button className="btn-common btn-filled inp-btn" type="submit">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
