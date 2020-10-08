import HTTP from '../../service/HTTP';
import Cookies from 'js-cookie'
import Router from 'next/router'
import * as Types from '../constants/ActionType';

export const actGetToken = (data, remember) => {

    return dispatch => {
        return HTTP('auth/authenticate?fields=*.*', 'POST', data, null).then(res => {
            console.log(res)
            if (res === 404) {
                alert('Sai mật khẩu')
                return false
            }
            if (res === 422) {
                alert('Sai dinh dang email')
                return false
            }
            if (res?.status === 200) {
                console.log(res)
                // dispatch(actGetUser(res.data.data.user.id, res.data.data.token))

                async function fetch() {
                    let data = await dispatch(actGetUser(res.data.data.user.id, res.data.data.token, remember))
                    if (data.avatar) await dispatch(actGetAvatar(data.avatar))
                    return true
                }
                return fetch()

            }
        });
    }
}
export const actGetAvatar = (id) => {
    return dispatch => {
        return HTTP(`files/${id}`, 'GET', null, null).then(res => {
            if (res?.status === 200) {
                dispatch({ type: Types.LOGIN_AVATAR, data: res.data.data.data.thumbnails[0].url, data2: res.data.data.data })
                if (Cookies.get('UserData') && Cookies.get('UserData') !== undefined) {
                    var userData = JSON.parse(Cookies.get('UserData'))
                    userData.avatar_img = res.data.data.data.thumbnails[0].url
                    userData.avatarFull_img = res.data.data.data
                    Cookies.set('UserData', userData)
                }
            }

        });
    }
}
export const actGetUser = (id, token, remember) => {
    let header = {
        'Authorization': `bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    return dispatch => {
        return HTTP(`users/${id}`, 'GET', null, header).then(res => {
            if (res?.status === 200) {
                dispatch({ type: Types.LOGIN, data: res.data.data })
                if (remember) {
                    Cookies.remove('UserData')
                    Cookies.set('UserData', res.data.data)
                }
                return res.data.data
            }

        });
    }
}