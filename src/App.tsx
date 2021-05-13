import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import actionsSaga from './sagas';
import reducer from "./reducers";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Redirect from "./containers/redirect-handle";
// << pages
import LandingPage from "./containers/landing";
import PrivacyPolicyPage from "./containers/privacy-policy";
import ConfirmSignUp from "./containers/complete-signup";
// pages >>
import './App.scss';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(actionsSaga);

function App() {
  return (<Provider store={store}>
      <Router>
        <Route path="/" component={Redirect} />
        <Route path="/" exact component={LandingPage} />
        <Route path="/privacy-policy" exact component={PrivacyPolicyPage} />
        <Route path="/confirm" exact component={ConfirmSignUp} />
      </Router>
    </Provider>);
}

export default App;
