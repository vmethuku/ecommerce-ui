import React, { Component } from 'react';
import '~/commons/components/styles/applypromo.css';
const ApplyPromo = (props) => {
    return (<div className="applypromo-container">
        <div className="applypromo-input-container">
            <input type="text" className="promo-input" value={props.promocode} onChange={props.onChange}/>
        </div>
        <div className="applypromo-button-container">
            <button type="button" className="promo-button" onClick={props.onApplyPromo}>Apply</button>
        </div>
    </div>);
}
export default ApplyPromo; 