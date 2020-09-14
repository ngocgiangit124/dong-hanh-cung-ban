import React, { memo } from 'react'

const DropMenu = memo(() => {
    return (
        <>
            <div className="bg-blue-700 px-2 py-5">
                <div className="flex items-center px-6 text-white leading-5  py-3 rounded hover:bg-blue-800">
                    <div className="w-12"><img src="../img/icon-user-circle.png" /></div>
                    <div>THÔNG TIN TÀI KHOẢN</div>
                </div>
                <div className="flex items-center px-6 text-white leading-5 py-3 rounded hover:bg-blue-800">
                    <div className="w-12"><img src="../img/icon-newspaper.png" /></div>
                    <div>BÀI ĐÃ ĐĂNG</div>
                </div>
                <div className="flex items-center px-6 text-white leading-5 py-3 rounded hover:bg-blue-800">
                    <div className="w-12"><img src="../img/icon-shape.png" /></div>
                    <div>XEM GẦN ĐÂY</div>
                </div>
                <div className="flex items-center px-6 text-white leading-5 py-3 rounded hover:bg-blue-800">
                    <div className="w-12"><img src="../img/icon-sign-out-alt.png" /></div>
                    <div>ĐĂNG XUẤT</div>
                </div>
            </div>
        </>
    );
});
export default DropMenu;