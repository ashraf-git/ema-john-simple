import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart)
    const totalPrice = cart.reduce((total, prd) => total + prd.price, 0);

    let shipping = 0;
    if (totalPrice > 200) {
        shipping = 0;
    }
    else if(totalPrice > 15){
        shipping = 4.99;
    }
    else if(totalPrice > 0){
        shipping = 12.99;
    }
    const tax = (totalPrice / 10).toFixed(2);
    const grandTotal = (totalPrice + shipping + Number(tax)).toFixed();
    const formatNumber = (num)=>{
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered: {cart.length}</p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p>Product Price: {formatNumber(totalPrice)}</p>
            <p><small>Tax + Vat: {tax}</small></p>
            <p>Total price: {grandTotal}</p>
            <Link to = "/review">
                <button className="main-button">Review Order</button>
            </Link>            
            
        </div>
    );
};

export default Cart;