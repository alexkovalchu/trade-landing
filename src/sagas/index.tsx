  
import { call, put, takeEvery } from 'redux-saga/effects';
import { generateActions, ActionList } from "../constants/actions";
import { Action } from "../constants/types";

function* showPopUpRequest(action: Action) {
    try {
        yield put({ type: generateActions(ActionList.popup.show).success() });
    } catch(err) {
        yield put({ type: generateActions(ActionList.popup.show).failed() });
    }
} 

function* hidePopUpRequest(action: Action) {
    try {
        yield put({ type: generateActions(ActionList.popup.hide).success() });
    } catch(err) {
        yield put({ type: generateActions(ActionList.popup.hide).failed() });
    }
}

function* actionsSaga() {
    yield takeEvery(generateActions(ActionList.popup.show).request(), showPopUpRequest);
    yield takeEvery(generateActions(ActionList.popup.hide).request(), hidePopUpRequest);
}

export default actionsSaga;