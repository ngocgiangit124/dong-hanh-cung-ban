import React, { Component } from 'react'
import Head from 'next/head'
import { Container } from '../components/main'
import { Header } from '../components/Layout/header'
import Menu from '../components/Aside/Menu'
import QaHeader from '../components/Aside/QaHeader'
import AddPost from '../components/Content/AddPost'
export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <div className={`mt-8 grid grid-cols-3`}>
          <div className="col-span-2 ml-4 mr-4">
            <QaHeader />
            <AddPost />
          </div>
          <div className="col-span-1 ml-4 mr-4">
            <Menu />
          </div>
        </div>
      </Container>

    </>
  )
}
