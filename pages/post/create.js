import React, { Component } from 'react'

import { Container } from '../../components/main'
import dynamic from 'next/dynamic'
const Header = dynamic(() => import('../../components/Layout/header'), { ssr: false })
import Menu from '../../components/Aside/Menu'
import NamePage from '../../components/Content/NamePage'
import CreatePost from '../../components/Create/Post'
import ColumLeft from '../../components/Layout/ColumLeft'
import ColumRight from '../../components/Layout/ColumRight'
import Bottom from '../../components/Aside/Bottom'
export default function Home() {
    return (
        <>
            <Header />
            <Container>
                <ColumLeft>
                    <NamePage>TẠO BÀI VIẾT</NamePage>
                    <CreatePost />
                    <div className="xs:block md:hidden">
                        <Bottom />
                    </div>
                </ColumLeft>
                <ColumRight>
                    <Menu />
                </ColumRight>
            </Container>

        </>
    )
}
