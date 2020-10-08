import Head from 'next/head';
import Link from 'next/link';
import React, { memo, useState } from 'react';
import ModalRegis from '../../components/Modal/ModalRegis';
import HeaderCss from '../../styles/Header.module.css';
import WarpMenu from '../../components/Aside/WarpMenu'
import { useSelector } from 'react-redux';
import dynamic from 'next/dynamic'
const HeaderLogin = dynamic(() => import('./HeaderLogin'))
const HeaderLogout = dynamic(() => import('./HeaderLogout'))

const Header = memo(() => {
    const login = useSelector(state => state.login.login)
    const [state2, setState2] = useState(false)
    const [state3, setState3] = useState(false)
    const [type, setType] = useState(false)
    let canControlScrollRestoration = 'scrollRestoration' in window.history
    if (canControlScrollRestoration); {
        // Back off, browser, I got this...
        window.history.scrollRestoration = 'manual';
    }
    return (
        <>
            <Head>
                <title>Đồng Hành cùng bạn</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            {state3 && <ModalRegis onClose={() => setState3(false)} type={type} />}
            <div className={`${HeaderCss.colorfff}`}>
                <div className="md:container md:pl-10 md:pr-10 md:mx-auto md:py-1">
                    <div className={`md:ml-4 md:mr-4 md:${HeaderCss.hspec84} flex items-center justify-between xs:h-16 xs:ml-5 xs:mr-5`} >
                        <div>
                            <Link href="/"><a >
                                <img className="xs:w-24 xs:h-10n md:w-auto md:h-auto" src="../img/logo.png" alt="logo" />
                            </a>
                            </Link>
                        </div>
                        <div className="hidden sm:hidden md:block " >
                            <div className={`relative ${HeaderCss.hspec50} ${HeaderCss.wspec450}`}>
                                <input placeholder="Tìm kiếm" className={`outline-nonenone bg-colorinput relative pr-8 pl-8 rounded-full py-2 px-4 h-12  ${HeaderCss.wspec450}`} ></input>
                                <button className={`outline-nonenone mr-1 absolute right-0 p-3 h-12 w-12`}><img src="../img/icon-search.png" /></button>
                            </div>
                        </div>

                        <div className={`h-12 md:w-64 items-center xs:justify-end md:justify-between flex`}>
                            <div className="items-center xs:flex md:hidden">
                                <button className={`mr-4 outline-nonenone`}><img className="w-8 p-1" src="../img/icon-search.png" /></button>
                            </div>
                            {
                                login ? <HeaderLogin /> :
                                    <HeaderLogout onOpen={() => setState3(true)} type={(type) => setType(type)} />

                            }
                            <div className="block md:hidden ml-4 text-gray-500 cursor-pointer" onClick={() => setState2(!state2)}>
                                <svg className="w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </div>
                        </div>
                    </div >
                </div>
            </div>
            <WarpMenu setClick={state2} setState2={() => setState2(!state2)} setClick2={() => setState2(false)} onClose={() => setState({ ...state, button2: false })} onOpen={() => setState3(true)} type={(type) => setType(type)} />
        </>
    )
});
export default Header