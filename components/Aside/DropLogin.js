import React, { memo } from 'react'

const DropLogin = memo(() => {
    return (
        <>
            <div className="py-6 px-6 bg-blue-700">
                <div>
                    <a className="bg-white p-3 rounded-lg flex font-semibold  justify-center leading-5">
                        <img className="mr-2" src="../img/icon_fb.png" />
                        <span>Đăng nhập bằng Facebook</span>
                    </a>
                    <a className="mt-4 bg-white p-3 rounded-lg flex font-semibold  justify-center leading-5">
                        <img className="mr-2" src="../img/icon_gg.png" />
                        <span>Đăng nhập bằng Google</span>
                    </a>
                </div>
                <div className="relative my-4">
                    <div className="relative z-10 flex justify-center">
                        <div className="z-0 w-16 bg-blue-700 flex justify-center text-white font-thin">  <span className=" opacity-50">Hoặc</span></div>
                    </div>
                    <div className="w-full border-t-2 border-white absolute opacity-50 top-0 mt-3 z-0"></div>
                </div>
                <div className="text-white">
                    <a className="bg-blue-800 p-3 rounded-lg flex font-semibold  justify-center leading-5">

                        <span>ĐĂNG NHẬP </span>
                    </a>
                    <a className="mt-4 bg-blue-800 p-3 rounded-lg flex font-semibold  justify-center leading-5">

                        <span>ĐĂNG KÝ</span>
                    </a>
                </div>
            </div>
        </>
    );
});
export default DropLogin;