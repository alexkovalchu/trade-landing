import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import popupsReducers from "./popups";

export default combineReducers({
    routing: routerReducer,
    popups: popupsReducers
});