import React, { useState } from 'react'
import Head from 'next/head'
import { Container } from '../components/main'
import { Header } from '../components/Layout/header'
import Menu from '../components/Aside/Menu'
import QaHeader from '../components/Aside/QaHeader'
import AddPost from '../components/Content/AddPost'
import ItemPost from '../components/Content/ItemPost'
import DropLogin from '../components/Aside/DropLogin'
import DropMenu from '../components/Aside/DropMenu'
import Comment from '../components/Modal/Comment'
import WarpMenu from '../components/Aside/WarpMenu'
import HotNews from '../components/Aside/HotNews'
import HasTag from '../components/Aside/HasTag'
import Bottom from '../components/Aside/Bottom'
import { useDispatch } from 'react-redux'
import * as Types from '../store/constants/ActionType'
export default function Home() {
  const [state, setState] = useState(false)
  const dispatch = useDispatch()
  return (
    <>

      <Header />
      <Container>
        <div className={`mt-8 md:grid md:grid-cols-3`}>
          <div className=" md:col-span-2 ml-4 mr-4 mb-20">
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
            <Menu />

            <img src='../img/Aside1.png' className=' mt-5 ' />
            <img src='../img/Aside2.png' className=' mt-5 ' />
            <HotNews />
            <HasTag />
            <Bottom />
          </div>
        </div>
      </Container>
      {/* <Comment /> */}

    </>
  )
}
