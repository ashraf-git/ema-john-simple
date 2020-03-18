import React, { useEffect, useState } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import fakeData  from '../../fakeData';
const Review = () => {
    const {cart, setCart} = useState([]);
useEffect(() => {
    //cart
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);
    const cartProducts = productKeys.map( key => {
    const product = fakeData.find(pd => pd.key === key);
    product.quantity = savedCart[key];
    return product;
    });
    console.log(cartProducts);
})
    return (
        <div>
            <h1>This is Review</h1>
        </div>
    );
};

export default Review;