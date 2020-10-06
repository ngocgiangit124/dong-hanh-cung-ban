import HTTP from '../../service/HTTP';
import Cookies from 'js-cookie'
import Router from 'next/router'
import * as Types from '../constants/ActionType';
import { authFUser } from '../../service/auth'
//reducer login
export const actEditProfile = (avatar, token, id, img_default, img, data) => {
    var header = authFUser(token)
    return dispatch => {
        return HTTP(`users/${id}`, 'PATCH', data, header).then(res => {
            if (res.status === 200) {
                console.log(res)
                dispatch({ type: Types.EDIT_PROFILE, data: res.data.data })
                if (img_default !== img) {
                    dispatch(actEditAvatar(token, avatar, img))
                }
            }
        });
    }
}
export const actEditAvatar = (token, id, data) => {
    var header = authFUser(token)
    return dispatch => {
        return HTTP(`files/${id}`, 'PATCH', { data }, header).then(res => {
            if (res.status === 200) {
                console.log(res)
                // dispatch({ type: Types.EDIT_PROFILE, data: res.data.data })
            }
        });
    }
}