import React, { Component } from 'react'
import Head from 'next/head'
import { Container } from '../components/main'
import dynamic from 'next/dynamic'
const Header = dynamic(() => import('../components/Layout/header'), { ssr: false })
import Menu from '../components/Aside/Menu'
import QaHeader from '../components/Aside/QaHeader'
import AddPost from '../components/Content/AddPost'
import ItemPost from '../components/Content/ItemPost'
import ItemReviewPost from '../components/Content/ItemReviewPost'
import DropLogin from '../components/Aside/DropLogin'
import DropMenu from '../components/Aside/DropMenu'
import NamePage from '../components/Content/NamePage'
import ColumLeft from '../components/Layout/ColumLeft'
import ColumRight from '../components/Layout/ColumRight'
import Bottom from '../components/Aside/Bottom'
export default function Home() {
    return (
        <>
            <Header />
            <Container>
                <ColumLeft>
                    <NamePage>REVIEW</NamePage>
                    <ItemReviewPost />
                    <AddPost />
                    <ItemPost />
                    <ItemPost />
                    <ItemPost />
                    <div className="mt-8 ">
                        <img className="m-auto" src="../img/waiting.png" />
                    </div>
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
