import HTTP from '../../service/HTTP';
import Router from 'next/router'
import * as Types from '../constants/ActionType';

export const actRegister = (data) => {
    return dispatch => {
        return HTTP('users', 'POST', data, null).then(res => {
            console.log(res)
            if (res === 409) {
                return '409'
            }
            if (res.status === 200) {
                return '200'
            }
        });
    }
}