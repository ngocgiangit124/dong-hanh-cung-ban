import React, { memo, useEffect, useState } from 'react';
import ItemPostIndex from '../components/Query/Layout/ItemPostIndex';
import axios from 'axios'
const test = memo(() => {
    const [statePost, setStatePost] = useState({
        postItems: ''
    });
    useEffect(() => {
        itemPostIndex();
    }, []);
    function itemPostIndex() {
        axios({
            method: 'get',
            url: 'https://xcrm.techup.cloud/gowithu/items/posts?limit=10&sort=-id&fields=*,image_thumbnail.data,userid.*,userid.avatar.data',
        }).then(function (response) {
            setStatePost({ ...statePost, postItems: response });
        });
    }
    return (
        <div>
            {statePost.postItems && statePost.postItems.data.data.map((item, index) => {
                return < ItemPostIndex firstClass={true} key={index} item={item} />
            })}
        </div>
    );
});

export default test;