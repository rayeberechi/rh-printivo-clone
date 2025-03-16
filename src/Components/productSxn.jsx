import React from 'react';
import ProductCards from './productCards';

const ProductSxn = () => {
  return (
    <div id='marketplace'>
      <section className="product-menu">
        <div className="sub-nav">
          <h1>Popular Products</h1>
          <p><a href="#" className="red">See All Products</a></p>
        </div>
        <div>
          <ProductCards />
        </div>
      </section>
    </div>
  );
};

export default ProductSxn;