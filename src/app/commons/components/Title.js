import React, { Component } from 'react';
import '~/commons/components/styles/title.css';
const Title = (props) => {
    return (<div className="title-container">
         {props.title||'no-title'}
    </div>);
}
export default Title; 