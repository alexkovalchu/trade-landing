  
import { call, put, takeEvery } from 'redux-saga/effects';
import { generateActions, ActionList } from "../constants/actions";
import { Action } from "../constants/types";

function* showPopUpRequest(action: Action) {
    try {
        yield put({ type: generateActions(ActionList.popup.signup.show).success() });
    } catch(err) {
        yield put({ type: generateActions(ActionList.popup.signup.show).failed() });
    }
} 

function* hidePopUpRequest(action: Action) {
    try {
        yield put({ type: generateActions(ActionList.popup.signup.hide).success() });
    } catch(err) {
        yield put({ type: generateActions(ActionList.popup.signup.hide).failed() });
    }
}

function* showSuccessRequest(action: Action) {
    try {
        yield put({ type: generateActions(ActionList.popup.success.show).success() });
    } catch(err) {
        yield put({ type: generateActions(ActionList.popup.success.show).failed() });
    }
}

function* hideSuccessRequest(action: Action) {
    try {
        yield put({ type: generateActions(ActionList.popup.success.hide).success() });
    } catch (err) {
        yield put({ type: generateActions(ActionList.popup.success.hide).failed() });
    }
}

function* submitSignUp (action: Action) {
    try {
        yield put({ type: generateActions(ActionList.popup.signup.hide).request() });
        yield put({ type: generateActions(ActionList.popup.success.show).request() });
    } catch(err) {
        yield put({ type: generateActions(ActionList.forms.signup.submit).failed() });
    }
}

function* actionsSaga() {
    yield takeEvery(generateActions(ActionList.popup.signup.show).request(), showPopUpRequest);
    yield takeEvery(generateActions(ActionList.popup.signup.hide).request(), hidePopUpRequest);
    yield takeEvery(generateActions(ActionList.popup.success.hide).request(), hideSuccessRequest);
    yield takeEvery(generateActions(ActionList.popup.success.show).request(), showSuccessRequest);
    yield takeEvery(generateActions(ActionList.forms.signup.submit).request(), submitSignUp);
}

export default actionsSaga;