import React from 'react';
import { connect } from 'react-redux';
import OrderSummaryUI from './order-summary.ui';
import * as actions from './order-summary.actions';

class OrderSummaryContainer extends React.Component {
    render() {
        return (
            <OrderSummaryUI {...this.props}></OrderSummaryUI>
        );
    }
}

const mapStateToProps = (state) => {
    return {
       ...state.orderSummaryReducer
    };
}

export default connect(mapStateToProps, actions)(OrderSummaryContainer);
