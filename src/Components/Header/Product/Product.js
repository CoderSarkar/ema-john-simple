import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {

    const {name, img, price, seller, stock} = props.productData;
    return (
        <div className='product'>

            <div>
                <img src={img} alt=""/>
            </div>
            <div className='product-property'>
                <p className='product-name'>{name}</p>
                <p><small>By : {seller}</small></p>
                <p>Price : ${price}</p>
                <p><small>Only {stock} left in stock - Order soon</small></p>
                <button className = 'btn'><span className='icon'><FontAwesomeIcon icon={faShoppingCart} /></span> 
                add to cart</button>
            </div>
                       
        </div>
    );
};

export default Product;