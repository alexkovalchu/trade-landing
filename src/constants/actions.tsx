
export function generateActions (name: string) {
    return {
        request: () => { return name + '_REQUEST' },
        success: () => { return name + '_SUCCESS' },
        failed: () => { return name + '_fAILED' }
    }
}

export const ActionList = {
    popup: {
        show: "POPUP_SHOW",
        hide: "POPUP_HIDE"
    }
}