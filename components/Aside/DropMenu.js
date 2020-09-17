import React, { memo, useState } from 'react'
import ModalRegis from '../../components/Modal/ModalRegis'
import Link from 'next/link'
const DropMenu = (props) => {
    const [state, setState] = useState(false)
    return (
        <>
            {state &&
                <ModalRegis />
            }
            <div className={`bg-blue-700 px-2 py-5 relative xs:text-sm xs:relative md:absolute h-auto  md:right-0 md:w-ct21 md:top-0 md:mt-12 `}>
                <div className="flex items-center xs:pl-6 md:px-6 text-white leading-5  py-3 rounded hover:bg-blue-800">
                    <div className="w-12"><img src="../img/icon-user-circle.png" /></div>
                    <div><Link href="/profile"><a>THÔNG TIN TÀI KHOẢN</a></Link></div>
                </div>
                <div className="flex items-center xs:pl-6 md:px-6 text-white leading-5 py-3 rounded hover:bg-blue-800">
                    <div className="w-12"><img src="../img/icon-newspaper.png" /></div>
                    <div>BÀI ĐÃ ĐĂNG</div>
                </div>
                <div className="flex items-center xs:pl-6 md:px-6 text-white leading-5 py-3 rounded hover:bg-blue-800">
                    <div className="w-12"><img src="../img/icon-shape.png" /></div>
                    <div>XEM GẦN ĐÂY</div>
                </div>
                <div className="flex items-center xs:pl-6 md:px-6 text-white leading-5 py-3 rounded hover:bg-blue-800" onClick={() => setState(true)}>
                    <div className="w-12"><img src="../img/icon-sign-out-alt.png" /></div>
                    <div>ĐĂNG XUẤT</div>
                </div>
            </div>
        </>
    );
};
export default DropMenu;