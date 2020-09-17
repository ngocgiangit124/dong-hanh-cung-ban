import React, { memo } from 'react';

const ItemProfile = memo(() => {
    return (
        <>
            <div className="mt-6 bg-white py-6 rounded-lg">
                <div className="px-8">
                    <h3 className="text-xl font-semibold">Thông tin người dùng</h3>
                </div>
                <div className="relative mt-10">
                    <div className="relative">
                        <div className="m-auto h-40 w-40 bg-gray-300 rounded-full flex items-center content-center  relative">
                            <img className="m-auto" src="../img/icon_plus.png" />
                        </div>
                        <div className="absolute flex w-full top-0">
                            <input type="file" className="cursor-poiter m-auto h-40 w-40 bg-transparent opacity-0" />
                        </div>
                    </div>
                    <div className="flex w-full mt-4 relative">
                        <span className=" m-auto">Thêm ảnh đại diện</span>
                    </div>
                </div>
                <div className="px-24  py-4 mt-5">
                    <div>
                        <div className="font-semibold"><label className="text-black">Họ tên</label></div>
                        <div className="box-border mt-2">
                            <input className="px-6 py-2 w-full border border-gray-400 h-12 rounded-lg" type="text" placeholder="Tiêu đề" />
                        </div>
                    </div>
                    <div className="mt-8">
                        <div className="font-semibold"><label className="text-black">Email</label></div>
                        <div className="box-border mt-2">
                            <input className="px-6 py-2 w-full border border-gray-400 h-12 rounded-lg" type="text" placeholder="Nhập email" />
                        </div>
                    </div>
                    <div className="mt-8">
                        <div className="font-semibold"><label className="text-black">Số điện thoại</label></div>
                        <div className="box-border mt-2">
                            <input className="px-6 py-2 w-full border border-gray-400 h-12 rounded-lg" type="text" placeholder="Nhập số điện thoại" />
                        </div>
                    </div>
                </div>
            </div>



            <div className="mt-8 bg-white  py-6 rounded-lg">
                <div className="px-8">
                    <h3 className="text-xl font-semibold">Đổi mật khẩu</h3>
                </div>

                <div className="px-24  py-4 mt-5">
                    <div>
                        <div className="font-semibold"><label className="text-black">Mật khẩu cũ</label></div>
                        <div className="box-border mt-2">
                            <input className="px-6 py-2 w-full border border-gray-400 h-12 rounded-lg" type="text" placeholder="Nhập mật khẩu cũ" />
                        </div>
                    </div>
                    <div className="mt-8">
                        <div className="font-semibold"><label className="text-black">Mật khẩu mới</label></div>
                        <div className="box-border mt-2">
                            <input className="px-6 py-2 w-full border border-gray-400 h-12 rounded-lg" type="text" placeholder="Nhập mật khẩu mới" />
                        </div>
                    </div>
                    <div className="mt-8">
                        <div className="font-semibold"><label className="text-black">Nhập lại mật khẩu mới</label></div>
                        <div className="box-border mt-2">
                            <input className="px-6 py-2 w-full border border-gray-400 h-12 rounded-lg" type="text" placeholder="Nhập lại mật khẩu mới" />
                        </div>
                    </div>
                    <div className="mt-8">
                        <div className="flex">
                            <input type="checkbox" className="w-5 h-5 mr-4 leading-5" /><span className="leading-5">Xác nhận thay đổi mật khẩu </span>
                        </div>
                    </div>
                </div>
            </div>


            <div className="mt-8 bg-white  py-6 rounded-lg">
                <div className="px-8">
                    <h3 className="text-xl font-semibold">Mạng xã hội</h3>
                </div>

                <div className="px-24  py-4 mt-5">
                    <div className="flex items-center content-center justify-between pb-8 border-b-2 border-gray-300 mb-8">
                        <div className=" flex items-center">
                            <div className="mr-3">
                                <img src="../img/logo_fb.png" />
                            </div>
                            <div>
                                <div className="font-semibold leading-5">Facebook</div>
                                <div className="text-xs text-gray-500">Chưa liên kết</div>
                            </div>
                        </div>
                        <div className="box-border  text-sm text-gray-500 leading-4">
                            <div>
                                <a className="px-6 py-3 rounded-lg border border-gray-500 flex  items-center">
                                    <span className="mr-2">LIÊN KẾT </span>
                                    <img className="h-3" src="../img/right.png" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center content-center justify-between ">
                        <div className=" flex items-center">
                            <div className="mr-3">
                                <img src="../img/logo_gg.png" />
                            </div>
                            <div>
                                <div className="font-semibold leading-5">Google</div>
                                <div className="text-xs text-gray-500">Chưa liên kết</div>
                            </div>
                        </div>
                        <div className="box-border  text-sm text-gray-500 leading-4">
                            <div>
                                <a className="px-6 py-3 rounded-lg border border-gray-500 flex  items-center">
                                    <span className="mr-2">LIÊN KẾT </span>
                                    <img className="h-3" src="../img/right.png" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8  py-6 rounded-lg">
                <div className="flex">
                    <button className="m-auto px-16 py-3 bg-blue-700 rounded-lg text-white font-semibold">CẬP NHẬT</button>
                </div>
            </div>
        </>
    );
});

export default ItemProfile;