import React, { Component } from 'react';
import '~/commons/components/styles/itemdetails.css';
import logo from '~/assets/chair.jpeg';
const ItemDetails = (props) => {
    return (<div className="itemdetails-container">
        <div className="itemdetails-image-container">
            <img src={logo} className="item-logo" />
        </div>
        <div className="itemdetails-desc">
            <div>{props.details}</div>
            <div className="item-details-price-container">
                <div className="item-discounted-price-container">
                    <div className="item-discounted-price">${(props.price*props.quantity)-props.discount}</div>
                    <div className="item-quantity">Qty:{props.quantity}</div>
                </div>
                <div className="item-price">${props.price*props.quantity}</div>

            </div>
        </div>
    </div>);
}
export default ItemDetails; 