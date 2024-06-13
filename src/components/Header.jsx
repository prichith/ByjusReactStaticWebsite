import React from "react";

const Header = () => {
  return (
    <div className="navbar_bg">
      <div className="container">
        <header className="header">
          <div className="logo">
            <h2>BYJU'S</h2>
          </div>
          <div className="nav_center">
            <input type="checkbox" id="checking" />
            <label className="hamburger_icon" for="checking">
              <i className="fa-solid fa-bars"></i>
            </label>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <div className="dropdown">
                <li>
                  <a href="#">Product</a>
                </li>
                <div className="dropdown_content">
                  <a href="#">Product-1</a>
                  <div className="dropdown1">
                    <a className="product-2" href="#">
                      Product-2
                    </a>
                  </div>
                  <a href="#">Product-3</a>
                </div>
              </div>

              <li className="pricing">
                <a href="#">Pricing</a>
              </li>

              <div className="dropdown">
                <li>
                  <a href="#">Contact</a>
                </li>
                <div className="dropdown_content">
                  <a href="#">Phone</a>
                  <a href="#">Email</a>
                  <a href="#">Address</a>
                </div>
              </div>
              <li className="media_link">
                <a href="#">Login</a>
              </li>
              <li>
                <button className="li-display btn filled_btn ">
                  JOIN US{" "}
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </button>
              </li>
              <li className="demo-list"> </li>
            </ul>
          </div>
          <div className="nav_button">
            <ul>
              <li>
                <button className="btn empty_btn">Login</button>
              </li>
              <li>
                <button className="btn filled_btn head-display">
                  JOIN US
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
