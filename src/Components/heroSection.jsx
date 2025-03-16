import React from 'react';

const HeroSection = () => {
  return (
    <div>
      <div className="hero-section">
        <div className="hero-header">
          <div className="logo">
            <img src="/logo.svg" alt="logo" />
          </div>
          <div className="hero-nav">
            <ul className="hero-nav-links">
              <li><a href="#marketplace">All Products</a></li>
              <li><a href="#reseller-page">Become a Reseller</a></li>
              <li><a href="#marketplace">Merch Store</a></li>
              <li><a href="#marketplace">Marketplace</a></li>

              <div className="user">
                  <li><a href="#" className="red">Sign in</a></li>
                  <li><a href="#">Create Account</a></li>
              </div>
            </ul>
          </div>
          <div className="cart">
            <a href="#marketplace"><img src="/cart.svg" alt="cart" /></a>
          </div>
        </div>

        <div className="hero-content">
          <div className="hero-text">
            <div className="txt1">
              <h1>Quality Prints</h1>
              <p>Shipped to your doorstep..</p>
            </div>

            <div className="txt2">
              <p>What would you like to print today?</p>

              <div className="search-box">
                <input type="text" placeholder="Search for Business cards, T-shirts, Mugs, etc" />
                <a href="#"><i className="fa fa-search"></i></a>                           
              </div>
            </div>
          </div>

          <div className="hero-img">
            <img src="/hand-card.png" alt="hand-biz-card" />
          </div>
       </div>

       <div className="events">
          <h3>Celebration Discount!
              <span>
                  <a href="#">Shop now</a>
              </span>
          </h3>            
       </div>
      </div>
    </div>
  );
};

export default HeroSection;