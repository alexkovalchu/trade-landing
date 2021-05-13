
export function generateActions (name: string) {
    return {
        request: () => { return name + '_REQUEST' },
        success: () => { return name + '_SUCCESS' },
        failed: () => { return name + '_fAILED' }
    }
}

export const ActionList = {
    popup: {
        signup: {
            show: "SIGNUP_POPUP_SHOW",
            hide: "SIGNUP_POPUP_HIDE"
        },
        success: {
            show: "SUCCESS_POPUP_SHOW",
            hide: "SUCCESS_POPUP_HIDE"
        }
    },
    forms: {
        signup: {
            submit: "SIGNUP_FORM_SUBMIT",
            reset: "SIGNUP_FORM_RESET"
        }
    },
    redirect: {
        set: 'SET_SUBMIT_REDIRECT',
        clear: 'CLEAR_SUBMIT_REDIRECT'
    }
}