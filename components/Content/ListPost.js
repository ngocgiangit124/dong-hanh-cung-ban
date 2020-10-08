import { set } from 'js-cookie';
import React, { memo, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { actGetListPost } from '../../get/post/listpost.js'
import ItemPostIndex from '../Content/ItemPostIndex.js'
import InfiniteScroll from 'react-infinite-scroll-component';
import * as Types from '../../store/constants/ActionType'
const ListPost = memo(() => {
    useEffect(() => {

    }, []);
    const dispatch = useDispatch()
    const [state, setState] = useState({
        list_posts: [],
        page_next: 1,
        has_more: true,
        checkloading: true,
    });
    const data = useSelector(state => state.post.data)

    useEffect(() => {
        if (state.has_more == true && state.checkloading == true) {
            setState({ ...state, checkloading: false });
            dispatch(actGetListPost(state.page_next));
        }
    }, [state.page_next]);

    useEffect(() => {
        if (data.data && data.data !== undefined) {
            setState({ ...state, list_posts: [...state.list_posts, ...data.data], page_next: data.page, checkloading: true, has_more: data.has_more })
        }
        return () => dispatch({ type: Types.CLEAR_POST })
    }, [data.data]);
    return (
        <>
            <div id="list">
                <InfiniteScroll
                    dataLength={state.list_posts.length}
                    next={() => state.checkloading == true ? setState({ ...state, page_next: state.page_next + 1 }) : null}
                    hasMore={state.has_more}
                    loader={
                        <div className="mt-8 ">
                            <img className="m-auto" src="../img/waiting.png" />
                        </div>}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                        </p>
                    }
                    scrollThreshold="100px"
                >
                    {state.list_posts && state.list_posts.map((item, index) => {
                        return < ItemPostIndex firstClass={index == 0 ? true : false} key={index} item={item} />
                        // return <div key={index}>dd{index}</div>
                    })}
                </InfiniteScroll>
                <div className="mb-12"></div>
            </div>
        </>
    );
});

export default ListPost;