
import popups from "../store/popup";
import { PopupStore, Action } from "../constants/types";
import { generateActions, ActionList } from "../constants/actions";

function popupsReducers(state: PopupStore = popups, action: Action): PopupStore {
    switch (action.type) {
        case generateActions(ActionList.popup.show).success():
            state = Object.assign({}, state, { signUpPopupState: 'open' });
        break;
        case generateActions(ActionList.popup.hide).success():
            state = Object.assign({}, state, { signUpPopupState: 'close' });
        break;
    }

    return state;
}

export default popupsReducers;