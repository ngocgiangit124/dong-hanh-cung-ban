import HTTP from '../../service/HTTP';
import Cookies from 'js-cookie'
import Router from 'next/router'
import * as Types from '../constants/ActionType';
import { authFUser } from '../../service/auth'

export const getGetPost = (id) => {
    let header = {
        // 'Authorization': `bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    return dispatch => {
        return HTTP(`items/posts/${id}?fields=*,image_thumbnail.data,userid.email,userid.first_name,userid.id,userid.avatar.data`, 'GET', null, header).then(res => {
            console.log(page, res.data.meta.page)
            if (res?.status === 200) {
                var has_more = res.data.meta.page_count > res.data.meta.page ? true : false;
                dispatch({ type: Types.GET_POST, data: { data: res.data.data, page: res.data.meta.page, has_more: has_more } })
            }
        });
    }
}