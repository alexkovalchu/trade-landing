
import popups from "../store/popup";
import { PopupStore, Action } from "../constants/types";
import { generateActions, ActionList } from "../constants/actions";

function popupsReducers(state: PopupStore = popups, action: Action): PopupStore {
    switch (action.type) {
        case generateActions(ActionList.popup.signup.show).success():
            state = Object.assign({}, state, { signUpPopupState: 'open' });
        break;
        case generateActions(ActionList.popup.signup.hide).success():
            state = Object.assign({}, state, { signUpPopupState: 'close' });
        break;
        case generateActions(ActionList.popup.success.show).success():
            state = Object.assign({}, state, { successSignup: 'open' });
        break;
        case generateActions(ActionList.popup.success.hide).success():
            state = Object.assign({}, state, { successSignup: 'close' });
        break;
    }

    return state;
}

export default popupsReducers;