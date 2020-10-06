import React, { Component } from 'react'
import Head from 'next/head'
import { Container } from '../components/main'
import dynamic from 'next/dynamic'
const Header = dynamic(() => import('../components/Layout/header'), { ssr: false })
import Menu from '../components/Aside/Menu'
import NamePage from '../components/Content/NamePage'
import IteamPost from '../components/Content/ItemPost'
import ItemProfile from '../components/User/ItemProfile'
import ColumLeft from '../components/Layout/ColumLeft'
import ColumRight from '../components/Layout/ColumRight'
import Bottom from '../components/Aside/Bottom'

export default function Home() {
    return (
        <>

            <Header />
            <Container>
                <ColumLeft>
                    <NamePage>THÔNG TIN TÀI KHOẢN</NamePage>
                    <ItemProfile />
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
