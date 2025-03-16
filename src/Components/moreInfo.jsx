import React from 'react';

const MoreInfo = () => {
  return (
    <div id='about'>
      <section className="brands">
        <div className="main-txt">
          <h2>Nigeria’s No. 1 online print shop 👑</h2>
          <p>Our print services and solutions are trusted by these brands and over 15,000 other businesses in Nigeria.</p>
        </div>

        <div className="brand-logo">
          <img src="/brand10.png" alt="Brand 10" /> 
        </div>
      </section>

      <section className="testimonials" id='testimonials'>
        <div className="testimonials-header">
            <h2>What Customers Say About Us🙌🏽</h2>
        </div>

        <div className="testimonials-container">
          <div className="card">
            <div className="t-img">
              <img src="/twitter.svg" alt="twitter-logo" />
            </div>
            <div className="t-txt">
              <h6>Amina Ebele <span><a href="#">@DeliciousAmina</a></span></h6>
              <p>I am now the unofficial <a href="#" className="blue">@Printivo</a> ambassador. What these guys just pulled to ensure I got my menu cards today is stunning!</p>
            </div>
          </div>

          <div className="card">
            <div className="t-img">
              <img src="/twitter.svg" alt="twitter-logo"/>
            </div>
            <div className="t-txt">
              <h6>Chinwe Okafor <span><a href="#">@ChinweOkafor</a></span></h6>
              <p>Printivo is the best thing that happened to my business. I can now print my business cards, letterheads, and envelopes with ease.</p>
            </div>
          </div>
            
          <div className="card">
            <div className="t-img">
              <img src="/twitter.svg" alt="twitter-logo" />
            </div>
            <div className="t-txt">
              <h6>John Dalu <span><a href="#">@JohnDee</a></span></h6>
              <p>The quality of service from Printivo is exceptional. I highly recommend them to anyone looking for reliable printing.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="our-pride" id='pride'>
        <h2>You can count on us for:</h2>
        <div className="pride-box">
          <div className="pride">
            <div className="pride-img">
              <img src="/pride1.svg" alt="fast"/>
            </div>
            <div className="p-txt">
              <h4>Fast Turnaround Within Days</h4>
              <p>Get your prints delivered to you within days, not weeks.</p>
            </div>
          </div>

          <div className="pride">
            <div className="pride-img">
              <img src="/pride2.svg" alt="quality"/>
            </div>
            <div className="p-txt" id='quality'>
              <h4>100% Quality Prints</h4>
              <p>We use premium materials and advanced technology to deliver top-notch prints.</p>
            </div>
          </div>

          <div className="pride">
            <div className="pride-img">
              <img src="/pride3.svg" alt="affordable"/>
            </div>
            <div className="p-txt">
              <h4>Affordable Services</h4>
              <p>All products are adequately priced to ensure you get value for your money at all times.</p>            
            </div>
          </div>
        </div>
      </section>

      <section className="award">
        <h2>Our amazing work got noticed by:</h2>

        <div className="awarders">
          <div className="card">
            <img src="/award1.svg" alt="awarder"/>
          </div>

          <div className="card">
            <img src="/award2.svg" alt="awarder"/>
          </div>

          <div className="card">
            <img src="/award3.png" alt="awarder"/>
          </div>

          <div className="card">
            <img src="/award4.svg" alt="awarder"/>
          </div>

          <div className="card">
            <img src="/award5.svg" alt="awarder"/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MoreInfo;