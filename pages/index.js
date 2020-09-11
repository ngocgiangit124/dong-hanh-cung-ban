import React, { Component } from 'react'
import Head from 'next/head'
import { Container } from '../components/main'
import { Header } from '../components/Layout/header'
import Menu from '../components/Aside/Menu'
export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <Menu />
      </Container>
    </>
  )
}
