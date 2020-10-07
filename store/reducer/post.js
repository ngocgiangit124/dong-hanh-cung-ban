import * as Types from '../constants/ActionType';
import Cookies from 'js-cookie'

var initialState = {
    data: {}
};

const login = (state = initialState, action) => {

    switch (action.type) {
        case Types.GET_POST:
            state.data = action.data
            return { ...state };
        default: return { ...state };
    }
}

export default login;