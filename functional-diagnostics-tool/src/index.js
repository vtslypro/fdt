import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import reducers from './reducers';
import routes from './routes';
import promise from 'redux-promise';

import Header from 'webcore/src/components/layout/header';
import Footer from 'webcore/src/components/layout/footer';

// import Header from './header';
// import Footer from './footer';

const createStoreWithMiddleware = applyMiddleware(
  promise
)(createStore);

ReactDOM.render(
  <Header />
  , document.querySelector('.page-header'));

ReactDOM.render(
  <Footer />
  , document.querySelector('.page-footer'));

//<Router history={browserHistory} routes={routes}/>
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router routes={routes}/>
  </Provider>
  , document.querySelector('.rover-container'));
