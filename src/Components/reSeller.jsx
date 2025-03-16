import React from 'react';

const ReSeller = () => {
  return (
    <div>
      <section id="reseller-page">
        <div className="reseller-page">
          <div className="r-form">
            <h1 id="form-title">Become an Affiliate</h1>
        
            <p id="form-rQ">Sign Up for an affiliate account to get your personal referral code to share with your customers.</p>
        
            <form id="form">
              <div className="form-div">
                <div className="form-div1">
                  <label id="first-name-label">
                      <p>Your First Name </p>
                      <input id="first-name" type="text" required placeholder="Your First Name" />
                  </label>

                  <label id="surname-label">
                      <p>Your Surname </p>
                      <input id="surname" type="text" required placeholder="Your Surname" />
                  </label>                      
                </div>
              
                <div className="form-div2">
                  <label id="email-label">
                      <p>Email Address</p>
                      <input id="email" type="email" required placeholder="Enter your email" />
                  </label>

                  <label id="phone-no-label">
                      <p>Phone Number</p>
                      <input type="tel" id="phone-no" name="phoneNumber" minlength="10" maxlength="15" placeholder="Enter your phone no" />
                  </label>
                </div>
              </div>

              <div className="submit-info">
                <p className="info">No more subscription fees, free forever!</p>
                <input type="submit" value="Sign Up" id="submit" />
              </div>                  
            </form>
          </div>
          

          <div className="reseller-details">
            <div className="reseller-div">
              <div className="r-box">
                <div className="r-txt">
                    <h2>20%</h2>
                    <p>All print products on the website</p>
                    <h6>Off</h6>
                </div>
                <div className="r-img">
                    <img src="/affiliate.png" alt="Reseller Image" />
                </div>
              </div>

              <div className="r-steps">
                <h3>Request to Join the Program</h3>
                <p><i className="fa-solid fa-circle-check"></i>Ship directly to your customers nationwide</p>
                <p><i className="fa-solid fa-circle-check"></i>Free sample pack when you join</p>
                <p><i className="fa-solid fa-circle-check"></i>Special resellers exclusive deals</p>
                <p><i className="fa-solid fa-circle-check"></i>Dedicated account executive</p>
              </div>
            </div>
          </div>
        </div>            
      </section>
    </div>
  );
};

export default ReSeller;