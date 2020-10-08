import HTTP from '../../service/HTTP';
import Cookies from 'js-cookie'
import Router from 'next/router'
import * as Types from '../constants/ActionType';
import { authUser, authFull } from '../../service/auth'
import { actGetAvatar } from './login'
//reducer login
export const actEditProfile = (name_img, avatar, token, id, img_default, img, data) => {
    var header = authUser(token)
    return dispatch => {
        if (img_default !== img) {
            if (img_default !== '') {
                async function fetAvatar() {
                    await dispatch(actEditAvatar(token, avatar, img))
                    return HTTP(`users/${id}`, 'PATCH', data, header).then(res => {
                        if (res.status === 200) {
                            dispatch({ type: Types.EDIT_PROFILE, data: res.data.data })
                        }
                    });
                }
                fetAvatar()
            }
            else {
                async function fetch() {
                    let id_avt = await dispatch(actAddAvatar(token, img, name_img, id))
                    return HTTP(`users/${id}`, 'PATCH', { ...data, avatar: id_avt }, header).then(res => {
                        if (res.status === 200) {
                            async function fetchAvatar() {
                                await dispatch({ type: Types.EDIT_PROFILE, data: res.data.data })
                                dispatch(actGetAvatar(res.data.data.avatar))
                            }
                            fetchAvatar()
                        }
                    });
                }
                fetch()
                // dispatch(actAddAvatar(token, img, name_img, id))
            }
        } else {
            return HTTP(`users/${id}`, 'PATCH', data, header).then(res => {
                console.log(res)
                if (res.status === 200) {
                    dispatch({ type: Types.EDIT_PROFILE, data: res.data.data })
                }
            });
        }
    }


}
export const actEditAvatar = (token, id, data) => {
    var header = authUser(token)
    return dispatch => {
        return HTTP(`files/${id}`, 'PATCH', { data, private_hash: new Date().getTime() }, header).then(res => {
            if (res?.status === 200) {
                dispatch({ type: Types.LOGIN_AVATAR_UPDATE, data: res.data.data[0].data.thumbnails[0].url, data2: res.data.data[0].data })

            }

        });
    }
}
export const actAddAvatar = (token, img, name_img) => {
    // var header = authUser(token)
    let authUser1 = {
        'Authorization': `bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    return dispatch => {
        return HTTP('files', 'POST', { data: img, filename_disk: name_img, filename_download: name_img }, authUser1).then(res => {
            console.log(res)
            if (res.status === 200) {
                return res.data.data.id
            }
        });
    }
}