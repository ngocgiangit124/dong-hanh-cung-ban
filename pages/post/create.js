import React, { Component } from 'react'

import Head from 'next/head'
import { Container } from '../../components/main'
import { Header } from '../../components/Layout/header'
import Menu from '../../components/Aside/Menu'
import NamePage from '../../components/Content/NamePage'
import CreatePost from '../../components/Create/Post'
export default function Home() {
    return (
        <>
            <Header />
            <Container>
                <div className={`mt-8 grid grid-cols-3`}>
                    <div className=" col-span-2 ml-4 mr-4 mb-20">
                        <NamePage>TẠO BÀI VIẾT</NamePage>
                        <CreatePost />
                    </div>
                    <div className="col-span-1 ml-4 mr-4 hidden  sm:hidden md:block">
                        <Menu />
                    </div>
                </div>
            </Container>

        </>
    )
}
