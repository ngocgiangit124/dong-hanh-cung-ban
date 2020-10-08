import HTTP from '../../service/HTTP';
import Cookies from 'js-cookie'
import Router from 'next/router'
import * as Types from '../../store/constants/ActionType';

export const actGetListCategory = () => {
    let header = {
        // 'Authorization': `bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    return dispatch => {
        return HTTP(`items/categories`, 'GET', null, header).then(res => {
            if (res?.status === 200) {
                dispatch({ type: Types.GET_CATEGORIES, data: res.data.data })
            }
        });
    }
}
