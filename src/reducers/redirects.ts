import { RedirectStore, Action } from "../constants/types";
import redirects from "../store/redirects";
import { generateActions, ActionList } from "../constants/actions";

function redirectReducer(state: RedirectStore = redirects, action: Action): RedirectStore {
    switch(action.type){
        case generateActions(ActionList.redirect.set).request():
            state = Object.assign({}, state, { redirectURL: action.payload })
        break;
        case generateActions(ActionList.redirect.clear).success():
            state = Object.assign({}, state, { redirectURL: '' });
        break;
        default:
            break;
    }
    return state;
}

export default redirectReducer;

