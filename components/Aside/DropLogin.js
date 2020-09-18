import React, { memo, useState } from 'react'
import ModalRegis from '../Modal/ModalRegis';

const DropLogin = memo((props) => {
    return (
        <>
            <div className="py-6 px-6 bg-blue-700 relative sm:relative   md:absolute  md:right-0 md:w-ct21 md:top-0 md:mt-12 customScrollbar">
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
                    <div className="relative z-10 flex justify-center">
                        <div className="z-0 w-16 bg-blue-700 flex justify-center text-white font-thin">  <span className=" opacity-50">Hoặc</span></div>
                    </div>
                    <div className="w-full border-t-2 border-white absolute opacity-50 top-0 mt-3 z-0"></div>
                </div>
                <div className="text-white ">
                    <div className="bg-blue-800 p-3 rounded-lg flex font-semibold  justify-center leading-5 cursor-pointer" onClick={() => { props.onToggleModal(true), props.onClose() }}>
                        <span>ĐĂNG NHẬP </span>
                    </div>
                    <div className="mt-4 bg-blue-800 p-3 rounded-lg flex font-semibold  justify-center leading-5 cursor-pointer" onClick={() => { props.onToggleModal(false), props.onClose() }}>
                        <span>ĐĂNG KÝ</span>
                    </div>
                </div>
            </div>
        </>
    );
});
export default DropLogin;