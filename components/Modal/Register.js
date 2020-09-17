import React, { memo } from 'react';

const Register = memo((props) => {
    return (
        <>
            <div className='m-8 flex flex-col justify-center items-center'>
                <div className="flex justify-between w-full p-5">
                    <p>Tạo tài khoản để sử dụng đầy đủ tính năng và tham gia cùng cộng đồng</p>
                </div>
                <div className='flex justify-between w-full px-5 sm:flex-col md:flex-row'>
                    <div className="w-full mr-5">
                        <label className="text-black font-bold">Họ tên</label>
                        <div className="box-border mt-2">
                            <input className="px-6 py-2 w-full border border-gray-400 h-12 rounded-lg" type="text" placeholder="Nhập họ tên của bạn" />
                        </div>
                    </div>
                    <div className="w-full mr-5 ">
                        <label className="text-black font-bold">Email</label>
                        <div className="box-border mt-2 ">
                            <input className="px-6 py-2 w-full border border-gray-400 h-12 rounded-lg" type="text" placeholder="Nhập email của bạn" />
                        </div>
                    </div>
                </div>
                <div className='flex justify-between w-full px-5 sm:flex-col md:flex-row'>
                    <div className="w-full mr-5">
                        <label className="text-black font-bold">Mật khẩu</label>
                        <div className=" flex justify-center items-center  w-full border border-gray-400 h-12 rounded-lg mt-2 ">
                            <input className="w-full px-5" type="text" placeholder="Nhập mật khẩu" />
                            <img src="../img/Shape.png" className="w-5 h-5 mx-3" />
                        </div>
                    </div>
                    <div className="w-full mr-5">
                        <label className="text-black font-bold">Nhập lại mật khẩu</label>
                        <div className=" flex justify-center items-center  w-full border border-gray-400 h-12 rounded-lg mt-2 ">
                            <input className="w-full px-5" type="text" placeholder="Nhập lại mật khẩu" />
                            <img src="../img/Shape.png" className="w-5 h-5 mx-3" />
                        </div>
                    </div>
                </div>

                <div className="flex items-center w-full">
                    <input type="checkbox" className='w-5 h-5 rounded-lg m-5 ' />
                    <span className='font-base'>Tôi đồng ý với <span className="text-blue-600">  &nbsp;Chính sách bảo mật  &nbsp;</span> và <span className="text-blue-600"> &nbsp;Điều khoản&nbsp;</span>của Đồng hành cùng bạn đọc</span>
                </div>
                <button type="text" className='bg-blue-600 text-lg rounded-lg w-64 h-12 text-white mb-10'>Đăng ký</button>
            </div>
        </>
    );
});

export default Register;