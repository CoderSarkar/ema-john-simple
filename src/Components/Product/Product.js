import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (props) => {
    

    const {name, img, price, seller, stock, key} = props.product;
    return (
        <div className='product'>

            <div>
                <img src={img} alt=""/>
            </div>
            <div className='product-property'>
                <p className='product-name'><Link to={"/product/" + key}>{name}</Link> </p>
                <p><small>By : {seller}</small></p>
                <p>Price : ${price}</p>
                <p><small>Only {stock} left in stock - Order soon</small></p>
                { props.showAddToCart && <button 
                    className = 'btn'
                    onClick = {() => props.handleAddProduct(props.product)}
                    >
                    <span className='icon'><FontAwesomeIcon icon={faShoppingCart} /></span>add to cart</button>}
            </div>
                       
        </div>
    );
};

export default Product;