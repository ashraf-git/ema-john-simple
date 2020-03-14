import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
const Shop = () => {
    const first10 = fakeData.slice(0,15);
    const [products, setProducts] = useState(first10);
    const handleAddProduct = (product) => {
        console.log("product added", product)
    }
       return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(prod => <Product
                        handleAddProduct = {handleAddProduct}
                         product={prod}
                         ></Product>)
                }
            </div>
            <div className="cart-container">
                <h2>This is cart</h2>
            </div>
        </div>
    );
};

export default Shop;