import React, { Component } from 'react';
import './order-summary.css';

import SubTotal from '~/commons/components/SubTotal';
import LineItem from '~/commons/components/LineItem';
import Tax from '~/commons/components/Tax';
import GrandTotal from '~/commons/components/GrandTotal';
import ItemDetails from '~/commons/components/ItemDetails';
import ApplyPromo from '~/commons/components/ApplyPromo';
import Title from '~/commons/components/Title';
import * as Constants from './order-summary.constants';

class OrderSummaryUI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayItem: false,
      displayPromoCode: false,
      promocode: "",
      displayTitle: false,
    };
  }
  displayItemHandler() {
    this.setState({ displayItem: !this.state.displayItem });
  }
  displayPromoCodeHandler() {
    this.setState({ displayPromoCode: !this.state.displayPromoCode });
  }
  onPromoCodeChange(event) {
    this.setState({ promocode: event.target.value });
  }
  onApplyPromocode() {
    if (this.state.promocode.toUpperCase() === Constants.PROMO_CODE && !this.props.isPromoApplied) {
      const estimatedCost = this.props.estimatedCost - ((this.props.estimatedCost * 10) / 100)
      this.props.applyPromoCode(estimatedCost);
    } else {
      toast.error("Error Notification !", {
        position: toast.POSITION.TOP_LEFT
      });
    }
  }
  toogleTitle() {
    this.setState({ displayTitle: !this.state.displayTitle });
  }

  render() {
    return (
      <div className="card">
        <SubTotal label="Subtotal" price={"$" + this.props.subtotal}></SubTotal>
        <div className="pickup-container" onMouseOver={this.toogleTitle.bind(this)}
          onMouseLeave={this.toogleTitle.bind(this)}>
          <LineItem label="Pickup savings" amount={"-$" + this.props.pickupSaving} ></LineItem>
          {this.state.displayTitle ? (<Title title={this.props.pickupHelpText}></Title>) : null}
        </div>

        <Tax amount={"$" + this.props.tax}></Tax>
        <GrandTotal label="Est. total" amount={"$" + this.props.estimatedCost}></GrandTotal>
        <div className="item-details-container" >
          <div className="anchor-container" onClick={this.displayItemHandler.bind(this)}>
            <a className="item-details-anchor" >See item details </a>
            <span className="item-details-icon">{this.state.displayItem ? '-' : '+'}</span>
          </div>
          {this.state.displayItem ? (<ItemDetails price={this.props.subtotal} quantity={this.props.qty} details={this.props.itemDetails} discount={this.props.pickupSaving}></ItemDetails>) : null}
        </div>

        <div className="item-details-container" >
          <div className="anchor-container" onClick={this.displayPromoCodeHandler.bind(this)}>
            <a className="item-details-anchor">{this.state.displayPromoCode ? 'Hide' : 'Apply'} promo code </a>
            <span className="item-details-icon">{this.state.displayPromoCode ? '-' : '+'}</span>
          </div>
          {this.state.displayPromoCode ? (<ApplyPromo promocode={this.state.promocode} onChange={this.onPromoCodeChange.bind(this)} onApplyPromo={this.onApplyPromocode.bind(this)}></ApplyPromo>) : null}
        </div>

      </div>
    );
  }
}
export default OrderSummaryUI;