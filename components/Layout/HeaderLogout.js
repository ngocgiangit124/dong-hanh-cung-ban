
import React, { useState } from 'react';
import HeaderCss from '../../styles/Header.module.css'
import Notification from '../Notification/Notification'
import DropMenu from '../Aside/DropMenu'
import DropLogin from '../Aside/DropLogin'
import WarpMenu from '../Aside/WarpMenu';
import Link from 'next/link'
import ModalRegis from '../../components/Modal/ModalRegis'

// console.log(logo);
export function HeaderLogout() {
    const [state, setState] = useState({
        button1: false,
        button2: false
    })
    const [state2, setState2] = useState(false)
    const [state3, setState3] = useState(false)
    return (
        <>

            <div className={`${HeaderCss.colorfff}`}>
                <div className="md:container md:pl-10 md:pr-10 md:mx-auto">
                    <div className={`md:ml-4 md:mr-4 md:${HeaderCss.hspec84} flex items-center justify-between xs:h-18 xs:ml-5 xs:mr-5  `} >
                        <div className="">
                            <Link href="/"><a >
                                <img className="xs:w-24 xs:h-10n md:w-auto md:h-auto" src="../img/logo.png" alt="logo" />
                            </a>
                            </Link>
                        </div>
                        <div className="hidden sm:hidden md:block " >
                            <div className={`relative ${HeaderCss.hspec50} ${HeaderCss.wspec450}`}>
                                <input placeholder="Tìm kiếm" className={`outline-none bg-colorinput relative pr-8 pl-8 rounded-full py-2 px-4 h-12  ${HeaderCss.wspec450}`} ></input>
                                <button className={`outline-nonenone mr-1 absolute right-0 p-3 h-12 w-12`}><img src="../img/icon-search.png" /></button>
                            </div>
                        </div>

                        <div className={`h-12 md:w-64 items-center xs:justify-end md:justify-between flex`}>
                            <div className="items-center xs:flex md:hidden">
                                <button className={`mr-4 `}><img className="w-8 p-1" src="../img/icon-search.png" /></button>
                            </div>
                            <div></div>
                            {/* <button className="border-2 rounded-lg bg-blue-600" onClick={() => setState3(!state3)} >Login</button> */}

                            <div className=" hidden sm:hidden md:flex items-center relative " >
                                <div className="sm:hidden md:flex items-center relative cursor-pointer" onClick={() => setState({ ...state, button2: !state.button2 }, console.log(state.button2))} >
                                    <div className="mr-4 relative" ><img className="rounded" src="../img/avatar.png" alt="logo" /></div>
                                    <div className="relative">Đăng nhập</div>
                                    <div className="ml-2 relative">
                                        <svg className="w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                                {/* {state.button2 && <DropLogin />} */}
                                {state.button2 && <DropLogin />}
                            </div>

                            <div className="xs:block md:hidden ml-4 text-gray-500 cursor-pointer" onClick={() => setState2(!state2)}>
                                <svg className="w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </div>
                        </div>
                    </div >
                </div>
            </div>
            <WarpMenu setClick={state2} setClick2={() => setState2(false)} />
        </>
    )
}