import * as ActionTypes from './order-summary.actionTypes';

export const applyPromoCode = (price) => {
  return {
    type: ActionTypes.APPLY_PROMO_CODE,
    payload: price
  };
};