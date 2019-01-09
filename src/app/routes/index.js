import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import OrderSummaryContainer from '~/modules/order-summary/order-summary.container';

const Routes = () => (
  <Router>
    <Route path="/" component={OrderSummaryContainer} />
    {/* <Route path="*" component={MainContainer} /> */}
  </Router>
);

export default Routes;
