import React, { Component } from 'react';
import '~/commons/components/styles/subtotal.css';
const SubTotal = (props) => {
    return (<div className="subtotal-container">
        <div className="subtotal-label">
            {props.label}
        </div>
        <div className="subtotal-value">
            {props.price}
        </div>
    </div>);
}
export default SubTotal; 