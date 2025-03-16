import React from 'react';

const Footer = () => {
  return (
    <div>
        <div className="footer-nav">
          <div className="foot-grid1">
            <div className="foot-div1">
              <div className="footer-logo">
                <h4>Printivo</h4>
              </div>
  
              <div className="foot-nav-links">
                <ul>
                  <li><a href="#about">About Us</a></li>
                  <li><a href="#tel">Contact</a></li>
                  <li><a href="#elivery">Track Order</a></li>
                  <li><a href="#pride">Printivo Promise</a></li>
                  <li><a href="#testimonials">Printivo Blog</a></li>
                  <li><a href="#reseller-page">Career</a></li>
                </ul>
              </div>
            </div>

            <div className="foot-div2">
              <div className="info">
                <div className="foot-txt">
                  <h4>Help and Information</h4>
                </div>

                <ul>
                  <li><a href="#quality">Paper Quality</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms and Conditions</a></li>
                  <li><a href="#">Font Licenses</a></li>
                  <li><a href="#outsource">Shipping and Delivery</a></li>        
                </ul>
              </div>
            </div>
        </div>

        <div className="foot-grid2">
          <div className="perks-nav">
            <h4>Make Money</h4>

            <ul>
              <li><a href="#socials">Refer a friend & earn N1,000</a></li>
              <li><a href="#reseller-page">Become a Reseller</a></li>
              <li><a href="#reseller-page">Sell your Designs</a></li>
              <li><a href="#marketplace">Merch Store</a></li>
            </ul>
          </div>            
  
          <div className="footer-contact">
            <div className="socials" id='socials'>
              <h4>Follow Us</h4>
  
              <div className="social-icons">
                <a href="#">
                    <img src="/fb-logo.svg" alt="fb-logo"/>
                </a>
                <a href="#">
                    <img src="/X-logo.svg" alt="x-logo"/>
                </a>
                <a href="#">
                    <img src="/linkedin-logo.svg" alt="linkedin-logo"/>
                </a>
                <a href="#">
                    <img src="/insta-logo.svg" alt="insta-logo"/>
                </a>
              </div>
            </div>

            <div className="outsource">
              <div className="pay-opt" id='pay'>
                <h4>Accepted Payments</h4>
                <img src="/payOpt.png" alt="pay-opt"/>
              </div>

              <div className="delivery" id='delivery'>
                <h4>Delivery</h4>
                <img src="/shipping.png" alt="ship-opt"/>
              </div>
            </div>
          </div>              
        </div>
        </div>              
    </div>
  );
};

export default Footer;