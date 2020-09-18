import React, { memo } from 'react';

const Contact = memo(() => {
    return (
        <>
            <div className="mt-6 bg-white py-6 rounded-lg">
                <div className="xs:px-3 md:px-8">
                    <h3 className="text-xl font-semibold">Thông tin liên hệ</h3>
                </div>
                <div className="xs:px-3 md:px-8 mt-6 ">
                    <div className="flex xs:flex-wrap">
                        <div className="w-24 font-light text-gray-500">Địa chỉ:</div><div className="max-w-xl xs:mt-2 md:mt-0">Lô T&S , Đường N7a, KCN Hòa Xá, phường Mỹ Xá, Thành phố Nam Định, tỉnh Nam Định, Việt Nam</div>
                    </div>
                    <div className="flex mt-4 xs:flex-wrap">
                        <div className="w-24 font-light text-gray-500">Hotline:</div><div className="max-w-xl xs:mt-2 md:mt-0" >0987 654 321</div>
                    </div>
                    <div className="flex mt-4 xs:flex-wrap">
                        <div className="w-24 font-light text-gray-500">Email:</div><div className="max-w-xl xs:mt-2 md:mt-0" >donghanhcungbandoc@gmail.com</div>
                    </div>

                    <div className="mt-8 mb-6">
                        <img className="w-full" src="../img/map.png" />
                    </div>
                </div>
            </div>



            <div className="mt-8 bg-white  py-6 rounded-lg">
                <div className="px-8">
                    <h3 className="text-xl font-semibold">Form liên hệ</h3>
                </div>

                <div className="xs:px-3 md:px-24 py-4 mt-5">
                    <div>
                        <div className="font-semibold"><label className="text-black">Họ tên</label></div>
                        <div className="box-border mt-2">
                            <input className="px-6 py-2 w-full border border-gray-400 h-12 rounded-lg" type="text" placeholder="Nhập họ tên" />
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
                    <div className="mt-8">
                        <div className="font-semibold"><label className="text-black">Nội dung</label></div>
                        <div className="box-border mt-2">
                            <textarea className="px-6 py-2  w-full border border-gray-400 h-24 rounded-lg" placeholder="Nhập nội dung" ></textarea>
                        </div>
                    </div>
                    <div className="mt-10">
                        <div className="flex">
                            <button className="m-auto px-16 py-3 bg-blue-700 rounded-lg text-white font-semibold">GỬI</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
});

export default Contact;