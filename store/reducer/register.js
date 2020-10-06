import * as Types from '../constants/ActionType';
import Cookies from 'js-cookie'

var initialState = {
    ok: false
};

const login = (state = initialState, action) => {

    switch (action.type) {

        case Types.REGISTER_OK:

            return { ...state, ok: !state.ok };
        default: return { ...state };
    }
}

export default login;