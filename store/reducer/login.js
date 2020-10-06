import * as Types from '../constants/ActionType';
import Cookies from 'js-cookie'

var initialState = {
    data: Cookies.get('UserData') !== undefined ? JSON.parse(Cookies.get('UserData')) : {},
    login: Cookies.get('UserData') !== undefined ? true : false
};

const login = (state = initialState, action) => {

    switch (action.type) {
        case Types.LOGIN:
            console.log(action.data)
            state.data = action.data
            state.login = true
            return { ...state };
        case Types.LOGIN_AVATAR:
            state.data.avatar_img = action.data
            state.data.avatarFull_img = action.data2
            return { ...state };
        case Types.LOGOUT:
            state.data = {}
            state.login = false
            Cookies.remove('UserData')
            return { ...state };
        case Types.EDIT_PROFILE:
            if (Cookies.get('UserData') !== undefined) {
                let data = JSON.parse(Cookies.get('UserData'))
                Cookies.set('UserData', { ...data, ...action.data })
            }
            return { ...state, data: { ...state.data, ...action.data } };
        default: return { ...state };
    }
}

export default login;