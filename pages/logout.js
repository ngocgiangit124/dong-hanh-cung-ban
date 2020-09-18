import React, { useState } from 'react'
import Head from 'next/head'
import { Container } from '../components/main'
import { HeaderLogout } from '../components/Layout/HeaderLogout'
import Menu from '../components/Aside/Menu'
import QaHeader from '../components/Aside/QaHeader'
import AddPost from '../components/Content/AddPost'
import ItemPost from '../components/Content/ItemPost'
import HotNews from '../components/Aside/HotNews'
import HasTag from '../components/Aside/HasTag'
import Bottom from '../components/Aside/Bottom'
import ColumLeft from '../components/Layout/ColumLeft'
import ColumRight from '../components/Layout/ColumRight'

export default function Home() {
    return (
        <>
            <HeaderLogout />
            <Container>
                <ColumLeft>
                    <QaHeader />
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
                    <img src='../img/Aside1.png' className=' mt-5 ' />
                    <img src='../img/Aside2.png' className=' mt-5 ' />
                    <HotNews />
                    <HasTag />
                    <Bottom />
                </ColumRight>
            </Container>
            {/* <Comment /> */}

        </>
    )
}
