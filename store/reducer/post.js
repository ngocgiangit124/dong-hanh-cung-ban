import * as Types from '../constants/ActionType';
import Cookies from 'js-cookie'

var initialState = {
    data: {}
};

const post = (state = initialState, action) => {

    switch (action.type) {
        case Types.GET_POST:
            state.data = action.data
            return { ...state };
        case Types.CLEAR_POST:
            state.data = {}
            return { ...state };
        default: return { ...state };
    }
}

export default post;