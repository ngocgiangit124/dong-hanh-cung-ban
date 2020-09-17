import React, { Component } from 'react'

import Head from 'next/head'
import { Container } from '../../components/main'
import { Header } from '../../components/Layout/header'
import Menu from '../../components/Aside/Menu'
import NamePage from '../../components/Content/NamePage'
import CreatePost from '../../components/Create/Post'
import ColumLeft from '../../components/Layout/ColumLeft'
import ColumRight from '../../components/Layout/ColumRight'
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
                    <Bottom />
                </ColumRight>
            </Container>

        </>
    )
}
