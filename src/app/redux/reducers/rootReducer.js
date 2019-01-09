import { combineReducers } from 'redux';

import orderSummaryReducer from '~/modules/order-summary/order-summary.reducer';


const rootReducer = combineReducers({
  orderSummaryReducer
});

export default rootReducer;