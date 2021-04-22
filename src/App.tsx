import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import actionsSaga from './sagas';
import reducer from "./reducers";
import { BrowserRouter as Router, Route } from 'react-router-dom';
// << pages
import LandingPage from "./containers/landing";
// pages >>
import './App.scss';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(actionsSaga);

function App() {
  return (<Provider store={store}>
      <Router>
        <Route path="/" component={LandingPage} />
      </Router>
    </Provider>);
}

export default App;
