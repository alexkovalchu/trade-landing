export interface Action {
    type: string,
    payload?: { [key: string]: string | number | boolean | object }
}

export interface PopupStore {
    signUpPopupState: string;
    successSignup: string;
}

export interface FormsStore {
    formSignUpStatus: string;
}

export interface RedirectStore {
    redirectURL: string;
}

export interface SignUpData {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    agreeTerms?: boolean,
    is16orOlder?: boolean
}
