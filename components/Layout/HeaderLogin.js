import React, { memo, useState, useRef, useEffect } from 'react';
import Notification from '../Notification/Notification'
import { useStateIfMounted } from 'use-state-if-mounted'
import DropMenu from '../Aside/DropMenu'
import { useSelector } from 'react-redux'

const HeaderLogin = (props) => {
    const [state, setState] = useStateIfMounted({
        button1: false,
        button2: false,
    })
    const refDropMenu = useRef(null)
    const refNoti = useRef(null)
    const onOpenInfo = () => {
        setState({ button1: false, button2: !state.button2 })
    }

    const onOpenNoti = () => {
        setState({ button1: !state.button1, button2: false })
    }
    useEffect(() => {
        document.addEventListener('click', (e) => handle(e))
        return () => {
            document.removeEventListener('click', (e) => handle())
        }
    }, [])
    const handle = (e) => {
        if (!refNoti?.current?.contains(e.target) && !refDropMenu?.current?.contains(e.target)) {
            setState({ button1: false, button2: false });
        }
    }
    const data = useSelector(state => state.login.data)

    return (
        <div className="w-full flex justify-around">
            <div ref={refDropMenu} className=" hidden sm:hidden md:flex items-center relative z-30" onClick={() => onOpenInfo()} style={{ cursor: 'pointer' }}>
                <div className="mr-4 relative" >
                    {data?.avatar_img ? <img className="rounded avatar" src={data.avatar_img} alt="logo" /> :
                        <img className="rounded avatar" src="../img/avatarNull.png" alt="logo" />
                    }
                </div>
                <div className="relative">{data.first_name}</div>
                <div className="ml-2 relative">
                    <svg className="w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </div>
                {state.button2 && <DropMenu />}
            </div>
            <div className='relative' ref={refNoti}>
                <img className='relative z-20' style={{ cursor: 'pointer' }} src={state.button1 ? "../img/chuongActive.png" : "../img/chuong.png"} alt="logo" onClick={() => onOpenNoti()} />
                {
                    state.button1 &&
                    <Notification />
                }
            </div>
        </div>
    );
};

export default HeaderLogin;