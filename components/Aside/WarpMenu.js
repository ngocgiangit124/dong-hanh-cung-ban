import React, { memo, useState } from 'react';
import DropMenu from './DropMenu';
import Menu from './Menu';

const WarpMenu = memo((props) => {
    const [state, setState] = useState({
        button1: false,
        button2: false
    });
    return (
        <>
            <div className="menu-mob fixed left-0 right-0 top-0 bottom-0 bg-gray-700 opacity-0 pointer-events-none" >

            </div>
            <div className={`z-10 fixed left-0 right-0 top-0 bottom-0 ${props.setClick ? '' : 'transform-110vw'} transition-all duration-300`} >
                <div className="ml-24 relative bg-white overflow-y-scroll h-screen">
                    <div className="p-5">
                        <div className="flex sm:flex md:hidden items-center relative font-semibold" onClick={() => setState({ ...state, button2: !state.button2 })} style={{ cursor: 'pointer' }} >
                            <div className="mr-4 relative w-10 h-10" ><img className="rounded  w-10 h-10" src="../img/avatar.png" alt="logo" /></div>
                            <div className="relative">Hoàng Văn Thái</div>
                            <div className="ml-2 relative">
                                <svg className="w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </div>
                            {/* {state.button2 && <DropLogin />} */}
                        </div>
                    </div>
                    <div className="">
                        {/* {state.button2 && <DropMenu setClickMenu={state} />} */}
                        <div className={` overflow-auto ${state.button2 ? 'transition-h-down' : 'transition-h-up'}`}>
                            <DropMenu setClickMenu={state} />
                        </div>
                        <Menu />
                    </div>

                </div>
            </div>
            <div className="z-20 fixed left-0 top-0 bottom-0 w-24" onClick={props.setClick2}>

            </div>

        </>
    );
});

export default WarpMenu;