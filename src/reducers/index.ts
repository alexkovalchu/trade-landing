import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import popupsReducers from "./popups";
import redirectReducers from './redirects';

export default combineReducers({
    routing: routerReducer,
    popups: popupsReducers,
    redirect: redirectReducers
});