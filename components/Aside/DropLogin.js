import React, { memo, useState, useRef, useEffect } from 'react'
import ModalRegis from '../Modal/ModalRegis';

const DropLogin = memo((props) => {
    const refDropRegi = useRef(null)

    return (
        <>
            <div ref={refDropRegi} className="py-6 px-6 bg-blue-700 relative sm:relative   md:absolute  md:right-0 md:w-ct21 md:top-0 md:mt-12 customScrollbar">
                <div>
                    <div className="bg-white p-3 rounded-lg flex font-semibold  justify-center leading-5 cursor-pointer xs:text-xs md:text-sm">
                        <img className="mr-2" src="../img/icon_fb.png" />
                        <span>Đăng nhập bằng Facebook</span>
                    </div>
                    <div className="mt-4 bg-white p-3 rounded-lg flex font-semibold  justify-center leading-5 cursor-pointer xs:text-xs md:text-sm">
                        <img className="mr-2" src="../img/icon_gg.png" />
                        <span>Đăng nhập bằng Google</span>
                    </div>
                </div>
                <div className="relative my-4">
                    <div className="w-full border-b-2 border-white relative  opacity-50 top-0 pt-3 mt-3 mb-5 z-0"></div>

                    <div className=" absolute flex justify-center item-center top-0 w-full">
                        <div className="z-0 w-16 bg-blue-700 flex justify-center text-white font-thin m-auto "><span className=" opacity-50">Hoặc</span></div>
                    </div>
                </div>
                <div className="text-white ">
                    <div className="bg-blue-800 p-3 rounded-lg flex font-semibold  justify-center leading-5 cursor-pointer"
                        onClick={() => { props.onOpen(), props.type(true), props.onClose() }}
                    >
                        <span>ĐĂNG NHẬP </span>
                    </div>
                    <div className="mt-4 bg-blue-800 p-3 rounded-lg flex font-semibold  justify-center leading-5 cursor-pointer"
                        onClick={() => { props.onOpen(), props.type(false), props.onClose() }}
                    >
                        <span>ĐĂNG KÝ</span>
                    </div>
                </div>
            </div>
        </>
    );
});
export default DropLogin;