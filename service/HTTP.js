// import * as Config from '../constants/Config';
import axios from 'axios';
import Cookies from 'js-cookie'
import Router from 'next/router'
export default function callApi(endpoint, method = 'GET', body, header = '') {
    return axios({
        method: method,
        url: `https://xcrm.techup.cloud/gowithu/${endpoint}`,
        data: body,
        headers: header
    }).catch(error => {
        // Router.push('../login')
        if (error.response) {
            if (error.response.status === 401 || error.response.status === 403) {
                // history.push('/login');
                // async function fetch() {
                //     if (Router.router.route !== '/login') {
                //         await Cookies.remove('token')
                //         await Router.push('../login')
                //         // alert('Hết phiên đăng nhập')
                //         if (Router.router.route === '/dashboard') {

                //         } else {
                //             alert('Hết phiên đăng nhập')
                //         }
                //     }
                // }

                // fetch()
                console.log('401')
            }
            if (error.response.status === 500) {
                // history.push('/500-server-error')
                console.log('500')
            }

            return error.response.status;
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log('Error', error.message);
        }
        console.log(error.config);
    });
};