import React from 'react';
import './Cart.css'
const Cart = (props) => {

    const cart =props.cart;
    const totalPrice = cart.reduce((total, prd) => total + prd.price, 0)

    let shipping = 0;
    if(totalPrice > 35){
        shipping = 0;
    }
    else if(totalPrice > 15){
        shipping = 4.99;
    }
    else if(totalPrice > 0){
        shipping = 12.99;
    }

    let tax = totalPrice/10;
    const grandTotal = tax + totalPrice + shipping;

    const formatNumber = num =>{
        const number = num.toFixed(2);
        return Number(number);
    }
    return (
        <div className='product-summury'>
            <h4 className = 'order-summury'>ORDER SUMMURY</h4>
            <div className = 'price-summury'>
                <p>Item Ordered : {cart.length}</p>
                <p>Product Price : {formatNumber(totalPrice)}</p>
                <p>Shipping Cost : {formatNumber(shipping)}</p>
                <p>Tax + Vat : {formatNumber(tax)}</p>
                <p>Total Price : {formatNumber(grandTotal)}</p>
            </div>
        </div>
    );
};

export default Cart;