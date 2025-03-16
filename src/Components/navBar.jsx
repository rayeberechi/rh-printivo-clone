import React from 'react';

const navBar = () => {
  return (
    <div>        
        <nav className="navbar">
            <div className="service">
                <ul className="menu">
                    <div className="top-menu">
                        <li><a href="#">Cost Calculator</a></li>
                        <li><a href="#">Discover Stores</a></li>
                        <li><a href="#">Track Orders</a></li>
                    </div>

                    <div className="nav-contact">
                        <div className="tel" id='tel'>
                            <p>Need help? Call:</p>

                            <p className="tel-no"><a href="#">+2347069000083</a>
                                <span>or</span>
                                <a href="#">+2349035000505</a>
                            </p>
                        </div>
                    </div>
                    <div className="w-logo">
                        <img src="\whatsapp-logo.svg" alt="whatsapp-logo" />
                    </div>
                    <div className="search-box">
                        <img src="/Naija-flag.svg" alt="" />
                        <input type="text" placeholder="Nigeria" disabled />
                    </div>
                </ul>
            </div>
        </nav>

    </div>
  )
}

export default navBar;