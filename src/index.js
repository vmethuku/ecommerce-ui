import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import MainRouter from '~/routes';
import rootReducer from '~/redux/reducers/rootReducer';


const sagaMiddleware = createSagaMiddleware();
const composedEnchancer = compose(window.devToolsExtension ? window.devToolsExtension() : f => f);

const store = createStore(rootReducer, composedEnchancer);



render(
	<Provider store={store}>
      <MainRouter history={history} />
	</Provider>, document.getElementById('root')
);
