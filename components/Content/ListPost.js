import { set } from 'js-cookie';
import React, { memo, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { actGetListPost } from '../../get/post/listpost.js'
import ItemPostIndex from '../Content/ItemPostIndex.js'
import InfiniteScroll from 'react-infinite-scroll-component';
const ListPost = memo(() => {
    const dispatch = useDispatch()
    const [state, setState] = useState({
        list_posts: [],
        page_next: 1,
    });
    const data = useSelector(state => state.post.data)

    useEffect(() => {
        console.log('a')
        dispatch(actGetListPost(state.page_next));
    }, [state.page_next]);

    console.log(data);
    useEffect(() => {
        if (data.data && data.data !== undefined) {
            setState({ ...state, list_posts: [...state.list_posts, ...data.data], page_next: data.page })
        }
    }, [data.data])
    console.log(state.list_posts);
    return (
        <>
            <InfiniteScroll
                dataLength={state.list_posts.length}
                next={() => setState({ ...state, page_next: state.page_next + 1 })}
                hasMore={true}
                loader={<h4>Loading...</h4>}
                scrollThreshold={0}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            // below props only if you need pull down functionality

            >
                {state.list_posts && state.list_posts.map((item, index) => {
                    return < ItemPostIndex firstClass={index == 0 ? true : false} key={index} item={item} />
                    // return <div key={index}>dd{index}</div>
                })}
            </InfiniteScroll>
            <div className="mb-12"></div>
        </>
    );
});

export default ListPost;