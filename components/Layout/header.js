
import React, { useState } from 'react';
import HeaderCss from '../../styles/Header.module.css'
import Notification from '../Notification/Notification'
import DropMenu from '../Aside/DropMenu'
import DropLogin from '../Aside/DropLogin'
import WarpMenu from '../Aside/WarpMenu';
// console.log(logo);
export function Header() {
    const [state, setState] = useState({
        button1: false,
        button2: false
    })


    console.log(state);
    return (
        <>
            <div className={`${HeaderCss.colorfff}`}>
                <div className="md:container md:pl-10 md:pr-10 md:mx-auto">
                    <div className={`md:ml-4 md:mr-4 md:${HeaderCss.hspec84} flex items-center justify-between xs:h-16 xs:ml-5 xs:mr-5  `} >
                        <div>
                            <a href="/">
                                <img className="xs:w-24" src="../img/logo.png" alt="logo" />
                            </a>
                        </div>
                        <div className="hidden sm:hidden md:block " >
                            <div className={`relative ${HeaderCss.hspec50} ${HeaderCss.wspec450}`}>
                                <input placeholder="Tìm kiếm" className={`bg-colorinput relative pr-8 pl-8 rounded-full py-2 px-4 h-12  ${HeaderCss.wspec450}`} ></input>
                                <button className={`mr-1 absolute right-0 p-3 h-12 w-12`}><img src="../img/icon-search.png" /></button>
                            </div>
                        </div>

                        <div className={`h-12 w-64 items-center xs:justify-end md:justify-between  flex`}>
                            <div className="items-center xs:flex md:hidden">
                                <button className={`mr-4 `}><img className="w-8 p-1" src="../img/icon-search.png" /></button>
                            </div>
                            <div className=" hidden sm:hidden md:flex items-center relative" onClick={() => setState({ ...state, button2: !state.button2 })} style={{ cursor: 'pointer' }} >
                                <div className="mr-4 relative" ><img className="rounded" src="../img/avatar.png" alt="logo" /></div>
                                <div className="relative">Hoàng Văn Thái</div>
                                <div className="ml-2 relative">
                                    <svg className="w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                {/* {state.button2 && <DropLogin />} */}
                                {state.button2 && <DropMenu />}
                            </div>

                            <div className='relative'>
                                <img className='relative' style={{ cursor: 'pointer' }} src={state.button1 ? "../img/chuongActive.png" : "../img/chuong.png"} alt="logo" onClick={() => setState({ ...state, button1: !state.button1 })} />
                                {state.button1 &&
                                    <Notification />
                                }
                            </div>
                            <div className="xs:block md:hidden ml-4 text-gray-500 cursor-pointer">
                                <svg className="w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </div>
                        </div>
                    </div >
                </div>
            </div>
            {/* <WarpMenu /> */}
        </>
    )
}