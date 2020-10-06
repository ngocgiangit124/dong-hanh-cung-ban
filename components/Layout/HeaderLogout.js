
import React, { memo, useState, useRef, useEffect } from 'react';
import DropLogin from '../Aside/DropLogin'

const HeaderLogout = memo((props) => {
    const [state, setState] = useState(false)
    const refDropRegi = useRef(null)
    useEffect(() => {
        document.addEventListener('click', (e) => handle(e))
        return () => {
            document.removeEventListener('click', (e) => handle()),
                console.log('faf')
        }
    }, [])
    const handle = (e) => {
        if (!refDropRegi?.current?.contains(e.target)) {
            setState(false);
        }
    }
    return (
        <>
            <div></div>
            <div className=" hidden sm:hidden md:flex items-center relative " >
                <div className="sm:hidden md:flex items-center relative cursor-pointer" onClick={() => setState(!state)} ref={refDropRegi}>
                    {/* <div className="mr-4 relative" ><img className="rounded" src="../img/avatar.png" alt="logo" /></div> */}
                    <div className="relative">Đăng nhập</div>
                    <div className="ml-2 relative">
                        <svg className="w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>

                {state && <DropLogin onOpen={props.onOpen} type={props.type} onClose={() => setState(false)} check={state} />}
            </div>
        </>
    );
});

export default HeaderLogout;