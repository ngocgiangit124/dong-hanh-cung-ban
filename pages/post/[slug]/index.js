import React, { memo, useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import ItemReviewPost from '../../../components/Content/ItemReviewPost'
import axios from 'axios'
const index = memo(() => {
    const router = useRouter();
    const { slug } = router.query;
    const [statePost, setStatePost] = useState({
        postItems: ''
    });

    useEffect(() => {
        if (slug) {
            itemPostIndex(slug);
        }
    }, [slug]);
    function itemPostIndex(slug) {

        axios({
            method: 'get',
            url: 'https://xcrm.techup.cloud/gowithu/items/posts/' + slug + '?fields=*,image_thumbnail.data,userid.*,userid.avatar.data',
        }).then(function (response) {
            console.log(response)
            setStatePost({ ...statePost, postItems: response });
        });
    }
    return (
        <>
            <ItemReviewPost item={statePost.postItems} />
        </>
    );
});

export default index;