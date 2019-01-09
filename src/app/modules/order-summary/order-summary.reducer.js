import * as ActionTypes from './order-summary.actionTypes';

const initialState = {
  isPromoApplied:false,
  qty: 1,
  pickupSaving: 3.85,
  tax: 8.92,
  itemPrice: 102.96,
  itemDetails:'Essentials by OFM ESS-3085 Racing Style Leather Gaming Chair,Red',
  pickupHelpText:'Picking up your order in the store helps cut costs,and we pass the saving on to you.'
};

initialState.subtotal = initialState.itemPrice * initialState.qty;
initialState.estimatedCost = initialState.subtotal - initialState.pickupSaving + initialState.tax;

const orderSummaryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.APPLY_PROMO_CODE:
      return { ...state, estimatedCost: action.payload,isPromoApplied:true };
    default:
      return state;
  }
}

export default orderSummaryReducer; 
