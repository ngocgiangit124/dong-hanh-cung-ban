import React, { Component } from 'react'
import { Container } from '../components/main'
import { Header } from '../components/Layout/header'
import Menu from '../components/Aside/Menu'
import NamePage from '../components/Content/NamePage'
import Contact from '../components/Aside/Contact'
import ColumLeft from '../components/Layout/ColumLeft'
import ColumRight from '../components/Layout/ColumRight'
import Bottom from '../components/Aside/Bottom'
export default function Home() {
    return (
        <>
            <Header />
            <Container>
                <ColumLeft>
                    <NamePage>LIÊN HỆ</NamePage>
                    <Contact />
                    <div className="xs:block md:hidden">
                        <Bottom />
                    </div>
                </ColumLeft>
                <ColumRight>
                    <Menu />
                    <Bottom />
                </ColumRight>
            </Container >
        </>
    )
}
