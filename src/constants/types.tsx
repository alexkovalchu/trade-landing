export interface Action {
    type: string,
    payload?: { [key: string]: string | number | boolean | object }
}

export interface PopupStore {
    signUpPopupState: string
}