
import React, { useState } from 'react';
import HeaderCss from '../../styles/Header.module.css'
import Notification from '../Notification/Notification'
// console.log(logo);
export function Header() {
    const [state, setState] = useState(false)

    return (
        <>
            <div className={`${HeaderCss.colorfff}`}>
                <div className="container pl-10 pr-10 mx-auto">
                    <div className={`ml-4 mr-4 flex items-center justify-between ${HeaderCss.hspec84} `} >
                        <div>
                            <img className="" src="../img/logo.png" alt="logo" />
                        </div>
                        <div >
                            <div className={`relative ${HeaderCss.hspec50} ${HeaderCss.wspec450}`}>
                                <input placeholder="Tìm kiếm" className={`bg-colorinput relative pr-8 pl-8 rounded-full py-2 px-4 h-12  ${HeaderCss.wspec450}`} ></input>
                                <button className={`mr-1 absolute right-0 p-3 h-12 w-12`}><img src="../img/icon-search.png" /></button>
                            </div>
                        </div>
                        <div className={`h-12 w-64 flex items-center justify-between`}>
                            <div className="flex items-center">
                                <div className="mr-4" ><img className="rounded" src="../img/avatar.png" alt="logo" /></div>
                                <div>Hoàng Văn Thái</div>
                                <div className="ml-2">
                                    <svg className="w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            <div className='relative'>
                                <img className='relative' style={{ cursor: 'pointer' }} src={state ? "../img/chuongActive.png" : "../img/chuong.png"} alt="logo" onClick={() => setState(!state)} />
                                {state &&
                                    <Notification />
                                }
                            </div>
                        </div>
                    </div >
                </div>
            </div>

        </>
    )
}