import React, { Component } from 'react';
import '~/commons/components/styles/tax.css';
const Tax = (props) => {
    return (<div className="tax-container">
        <div className="tax-label">
            <div>Est. taxes & fees</div>
            <div>(Based on 94085)</div>
        </div>
        <div className="tax-value">
            {props.amount}
        </div>
    </div>);
}
export default Tax; 