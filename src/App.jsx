import React from 'react';
import NavBar from './Components/navBar';
import HeroSection from './Components/heroSection'
import ProductSxn from './Components/productSxn';
import MoreInfo from './Components/moreInfo';
import ReSeller from './Components/reSeller';
import Footer from './Components/footer';
import './Components/styles.css';

function App() {
  return (
    <div>
      <header>
        <NavBar />
        <HeroSection/>
      </header>
      <main>
        <ProductSxn />
        <ReSeller />
        <MoreInfo />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;