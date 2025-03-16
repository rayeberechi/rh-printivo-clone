import React from 'react';
import NavBar from './Components/navBar';
import HeroSection from './Components/heroSection'
import ProductSxn from './components/productSxn';
import MoreInfo from './components/moreInfo';
import ReSeller from './components/reSeller';
import Footer from './components/footer';
import './components/styles.css';

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