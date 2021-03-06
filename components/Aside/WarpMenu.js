import React, { memo, useState } from 'react';
import DropLogin from './DropLogin';
import DropMenu from './DropMenu';
import { useSelector } from 'react-redux'
import Menu from './Menu';

const WarpMenu = memo((props) => {
    const [state, setState] = useState({
        button1: false,
        button2: false
    });
    const login = useSelector(state => state.login.login)
    const islogin = (
        <>
            <div className="mr-4 relative w-10 h-10" ><img className="rounded  w-10 h-10" src="../img/avatar.png" alt="logo" /></div>
            <div className="relative">Hoàng Văn Thái</div>
        </>
    );
    const islRegi = (
        <>
            <div className="mr-4 relative w-10 h-10" ><img className="rounded  w-10 h-10" src="../img/avatar.png" alt="logo" /></div>
            <div className="relative">Đăng nhập</div>
        </>
    )
    return (
        <>
            <div className={`z-30 fixed left-0 right-0 top-0 bottom-0 ${props.setClick ? '' : 'transform-110vw'} transition-all duration-300`} >
                <div className="ml-24 relative bg-white overflow-y-scroll h-screen">
                    <div className="p-5">
                        <div className="flex sm:flex md:hidden items-center relative font-semibold cursor-pointer" onClick={() => setState({ ...state, button2: !state.button2 })} >
                            {login ? islogin : islRegi}
                            <div className="ml-2 relative">
                                <svg className="w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className={` overflow-auto ${state.button2 ? 'transition-h-down' : 'transition-h-up'}`}>
                            {
                                login ? <DropMenu setClickMenu={state} />
                                    : <DropLogin onClose={props.setState2} onOpen={props.onOpen} type={props.type} />
                            }

                        </div>
                        <Menu />
                    </div>
                </div>
            </div>
            <div className={`z-40 fixed left-0 top-0 bottom-0 w-24 ${props.setClick ? '' : 'transform-110vw'}`} onClick={props.setClick2}>

            </div>
        </>
    );
});

export default WarpMenu;