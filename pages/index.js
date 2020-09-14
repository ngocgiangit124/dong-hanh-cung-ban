import React, { Component } from 'react'
import Head from 'next/head'
import { Container } from '../components/main'
import { Header } from '../components/Layout/header'
import Menu from '../components/Aside/Menu'
import QaHeader from '../components/Aside/QaHeader'
export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <div className={` mt-5 grid grid-cols-3`}>
          <div className="col-span-2">
            <QaHeader />

          </div>
          <div className="col-span-1">
            <Menu />
          </div>
        </div>
      </Container>

    </>
  )
}
