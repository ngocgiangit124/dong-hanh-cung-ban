import * as Types from '../constants/ActionType';
import Cookies from 'js-cookie'
import Router from 'next/router'
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
            let avatar_img = action.data
            let avatarFull_img = action.data2
            return { ...state, data: { ...state.data, avatar_img, avatarFull_img } };
        case Types.LOGIN_AVATAR_UPDATE:
            state.data.avatar_img = action.data
            state.data.avatarFull_img = action.data2
            if (Cookies.get('UserData') && Cookies.get('UserData') !== undefined) {
                var userData = JSON.parse(Cookies.get('UserData'))
                userData.avatar_img = state.data.avatar_img
                userData.avatarFull_img = state.data.avatarFull_img
                Cookies.set('UserData', userData)
            }
            return { ...state };
        case Types.LOGOUT:
            state.data = {}
            state.login = false
            Cookies.remove('UserData')
            Router.push('/')
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