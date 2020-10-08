import React, { memo } from 'react';
import Template from '../components/Layout/Template';
import ColumLeft from '../components/Layout/ColumLeft';
import ColumRight from '../components/Layout/ColumRight';
import NamePage from '../components/Content/NamePage';
import Menu from '../components/Aside/Menu'
// import ListPost from '../components/Content/ListPost';
import dynamic from 'next/dynamic'
const ListPost = dynamic(() => import('../components/Content/ListPost'), { ssr: false })
const test3 = memo(() => {
    return (
        <>
            <Template>
                <ColumLeft>
                    <NamePage>TẠO BÀI VIẾT</NamePage>
                    <ListPost />
                </ColumLeft>
                <ColumRight>
                    <Menu />
                </ColumRight>
            </Template>
        </>
    );
});

export default test3;