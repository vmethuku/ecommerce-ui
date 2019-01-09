import React, { Component } from 'react';
import '~/commons/components/styles/grandtotal.css';
const GrandTotal = (props) => {
    return (<div className="grandtotal-container">
        <div className="grandtotal-label">
            {props.label}
        </div>
        <div className="grandtotal-value">
            {props.amount}
        </div>
    </div>);
}
export default GrandTotal; 