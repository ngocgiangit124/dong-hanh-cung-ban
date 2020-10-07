import HTTP from '../../service/HTTP';
import Cookies from 'js-cookie'
import Router from 'next/router'
import * as Types from '../../store/constants/ActionType';

export const actGetListPost = (page) => {
    let header = {
        // 'Authorization': `bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    return dispatch => {
        return HTTP(`items/posts?limit=1&page=${page ? page : 1}&meta=*&sort=-id&fields=*,image_thumbnail.data,userid.*,userid.avatar.data`, 'GET', null, header).then(res => {
            console.log(page, res.data.meta.page)
            if (res?.status === 200) {
                if (page === res.data.meta.page) {
                    dispatch({ type: Types.GET_POST, data: { data: res.data.data, page: res.data.meta.page } })
                } else {

                }
            }
        });
    }
}
