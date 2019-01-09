import React, { Component } from 'react';
import '~/commons/components/styles/lineitem.css';

const LineItem=(props)=>{
    return (<div className="lineitem-container">
    <div className="lineitem-label">
        {props.label}
    </div>
    <div className="lineitem-value">
        {props.amount}
    </div>
</div>);
}
export default LineItem; 