import React, { Component } from 'react'
import Head from 'next/head'
import { Container } from '../components/main'
import { Header } from '../components/Layout/header'
import Menu from '../components/Aside/Menu'
import QaHeader from '../components/Aside/QaHeader'
import AddPost from '../components/Content/AddPost'
import ItemPost from '../components/Content/ItemPost'
import DropLogin from '../components/Aside/DropLogin'
import DropMenu from '../components/Aside/DropMenu'
export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <div className={`mt-8 grid grid-cols-3`}>
          <div className=" col-span-2 ml-4 mr-4 mb-20">
            <QaHeader />
            <AddPost />
            <ItemPost />
            <ItemPost />
            <ItemPost />
            <div className="mt-8 ">
              <img className="m-auto" src="../img/waiting.png" />
            </div>
          </div>
          <div className="col-span-1 ml-4 mr-4 hidden  sm:hidden md:block">
            <DropMenu />
            <DropLogin />
            <Menu />

          </div>
        </div>
      </Container>

    </>
  )
}
