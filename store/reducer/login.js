import * as Types from '../constants/ActionType';
var initialState = {
    login: false
};

const login = (state = initialState, action) => {
    switch (action.type) {

        case Types.LOGIN:
            console.log('dd')
            return { ...state, login: !state.close };
        default: return { ...state };
    }
}

export default login;