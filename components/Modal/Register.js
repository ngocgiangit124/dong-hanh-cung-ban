import React, { memo } from 'react';

const Register = memo((props) => {
    return (
        <>
            <div className='m-8 flex flex-col justify-center items-center'>
                <div className="flex justify-between w-full xs:pt-5 xs:pb-5 md:p-5">
                    <p>Tạo tài khoản để sử dụng đầy đủ tính năng và tham gia cùng cộng đồng</p>
                </div>
                <div className='justify-between w-full  flex flex-col md:flex-row mb-8'>
                    <div className="w-full mr-6">
                        <label className="text-black font-semibold">Họ tên</label>
                        <div className="box-border mt-2">
                            <input className="px-6 py-2 w-full border border-gray-400 h-12 rounded-lg" type="text" placeholder="Nhập họ tên của bạn" />
                        </div>
                    </div>
                    <div className="w-full  ">
                        <label className="text-black font-semibold">Email</label>
                        <div className="box-border mt-2 ">
                            <input className="px-6 py-2 w-full border border-gray-400 h-12 rounded-lg" type="text" placeholder="Nhập email của bạn" />
                        </div>
                    </div>
                </div>
                <div className='flex justify-between w-full  flex-col md:flex-row mb-8'>
                    <div className="w-full mr-6">
                        <label className="text-black font-semibold">Mật khẩu</label>
                        <div className=" flex justify-center items-center w-full  h-12 rounded-lg mt-2 relative">
                            <input className="w-full px-5 border border-gray-400 h-12 relative rounded-lg" type="password" placeholder="Nhập mật khẩu" />
                            <img src="../img/Shape.png" className="w-6 h-4 mx-3 absolute right-0 mr-4 bg-gray-100" />
                        </div>
                    </div>
                    <div className="w-full ">
                        <label className="text-black font-semibold">Nhập lại mật khẩu</label>
                        <div className="flex justify-center items-center  w-full  rounded-lg mt-2 relative">
                            <input className="w-full px-5 relative border border-gray-400 h-12 rounded-lg" type="password" placeholder="Nhập lại mật khẩu" />
                            <img src="../img/Shape.png" className="w-6 h-4 mx-3 absolute right-0 mr-4 bg-gray-100" />
                        </div>
                    </div>
                </div>

                <div className="flex w-full mb-12 items-center">
                    <input type="checkbox" className='w-10 h-10 md:h-5 sm:w-5 mr-3' />
                    <span className='font-base'>Tôi đồng ý với <span className="text-blue-600">  &nbsp;Chính sách bảo mật  &nbsp;</span> và <span className="text-blue-600"> &nbsp;Điều khoản&nbsp;</span>của Đồng hành cùng bạn đọc</span>
                </div>
                <button type="text" className='bg-blue-600 text-lg rounded-lg w-64 h-12 text-white mb-5'>Đăng ký</button>
            </div>
        </>
    );
});

export default Register;