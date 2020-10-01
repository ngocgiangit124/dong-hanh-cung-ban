import React, { memo, useEffect } from 'react';
import axios from 'axios'
const test2 = memo(() => {
    useEffect(() => {

        Promise.all([getUserAccount(), getUserPermissions()])
            .then(function (results) {
                const acct = results[0];
                const perm = results[1];
                console.log(acct);
                console.log(perm);
            });
        // axios.get('https://xcrm.techup.cloud/gowithu/items/posts?limit=10')
        //     .then(function (response) {
        //         // handle success
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         // handle error
        //         console.log(error);
        //     })
        //     .then(function () {
        //         // always executed
        //     });


    })

    function getUserAccount() {
        return axios.get('https://xcrm.techup.cloud/gowithu/items/posts?limit=10&sort=-id');
    }

    function getUserPermissions() {
        return axios.get('https://xcrm.techup.cloud/gowithu/items/posts?limit=10');
    }
    return (
        <div>

        </div>
    );
});

export default test2;