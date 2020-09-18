import * as Types from '../constants/ActionType';
var initialState = {
    close: false
};

const config = (state = initialState, action) => {
    switch (action.type) {

        case Types.CLOSE_HEADER:
            return { ...state, close: !state.close };
        default: return { ...state };
    }
}

export default config;