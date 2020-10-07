import React, { useState, memo } from 'react'
import { Container } from '../../components/main'
import dynamic from 'next/dynamic'
const Header = dynamic(() => import('../../components/Layout/header'), { ssr: false })

const Template = memo((props) => {
    return (
        <>
            <Header />
            <Container>
                {props.children}
            </Container>
        </>
    )
});
export default Template;