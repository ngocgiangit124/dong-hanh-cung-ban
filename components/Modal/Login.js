import React, { memo } from 'react';

const Login = memo(() => {
    return (
        <div className='m-8 flex flex-col justify-center items-center'>
            <div className="flex justify-between w-full px-5 py-5">
                <p>Đăng nhập với email</p>
            </div>
            <div className='flex justify-between w-full px-5 flex-col md:flex-row'>
                <div className="w-full mr-5">
                    <label className="text-black font-bold">Email</label>
                    <div className="box-border mt-2">
                        <input className="px-6 py-2 w-full border border-gray-400 h-12 rounded-lg" type="text" placeholder="Nhập email" />
                    </div>
                </div>
                <div className="w-full mr-5">
                    <label className="text-black font-bold">Mật khẩu</label>
                    <div className=" flex justify-center items-center  w-full border border-gray-400 h-12 rounded-lg mt-2 ">
                        <input className="w-full px-5" type="text" placeholder="Nhập mật khẩu" />
                        <img src="../img/Shape.png" className="w-5 h-5 mx-3" />
                    </div>
                    <div className="float-right my-1 cursor-pointer text-blue-600">Quên mật khẩu</div>
                </div>
            </div>

            <div className="flex items-center w-full">
                <input type="checkbox" className='w-5 h-5 rounded-xl my-5 bg-blue-600' />
                <span className='font-base'>Ghi nhớ tài khoản</span>
            </div>
            <button type="text" className='bg-blue-600 text-lg rounded-lg w-64 h-12 text-white mb-10'>Đăng nhập</button>
            <hr className="w-full border-1" />
            <div className="text-base m-5">
                Đăng nhập với tài khoản khác
            </div>
            <div className='bg-blue-600 rounded-lg w-64 h-12 text-white mb-5 flex items-center cursor-pointer'>
                <div className="flex items-center">
                    <img className="w-10 h-10" src="../img/fbPath.png" className="mx-5" />
                    <span className="text-base">Đăng nhập bằng Facebook</span>
                </div>
            </div>
            <div className='bg-white rounded-lg w-64 h-12 text-black border-gray-500 border-2 mb-5 flex items-center cursor-pointer'>
                <div className="flex items-center">
                    <img className="w-10 h-10" src="../img/search.png" className="mx-5" />
                    <span className="text-base">Đăng nhập bằng Google</span>
                </div>
            </div>
        </div>
    );
});

export default Login;