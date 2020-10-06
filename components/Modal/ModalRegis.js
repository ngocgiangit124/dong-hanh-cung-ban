import React, { memo, useState, useEffect } from 'react';
import Register from '../Modal/Register'
import Login from '../Modal/Login'
const ModalRegis = memo((props) => {
    const [state, setState] = useState(!props.type)

    const [state2, setState2] = useState({
        display: false,
        code: ''
    })
    const code409 = () => {
        setState2({ display: true, text: "Email đã tồn tại!", code: 409 })
    }
    const code200 = () => {
        setState2({ display: true, text: "Tạo mới thành công!", code: 200 })
    }
    useEffect(() => {
        if (state2.display === true && state2.code === 200) {
            setState(false)
            return
        }
        const interval = setInterval(() => {
            setState2({ display: false, code: '' })
        }, 2000);

        return () => clearInterval(interval);
    }, [state2])
    return (
        <>
            <div id="myModal" className={`modal block`}>
                <div className=" top-0 right-0 bottom-0 left-0 w-full h-screen z-10 absolute " onClick={() => props.onClose()}></div>
                <div className='modal-content overflow-y-hidden sm:w-full md:w-40% relative z-20 xs:h-85vh md:h-auto max-h-85vh' >
                    <div className='absolute border-gray-600 bg-white sm:w-full z-50'>
                        <div className='modal-title flex justify-between items-center my-2 mx-5 text-2xl'>
                            <div className="py-4 px-8 text-lg bg-white rounded-lg font-semibold text-gray-500 leading-6 ">
                                <a className={`mr-12 py-6 cursor-pointer ${state ? 'active-post' : ''}`} onClick={() => setState(!state)}>ĐĂNG KÝ</a>
                                <a className={`py-6 cursor-pointer ${!state ? 'active-post' : ''}`} onClick={() => setState(!state)} >ĐĂNG NHẬP</a>
                            </div>
                            {state2.display && < span className={`${state2.code === 409 ? 'text-red-500' : 'text-green-500'} italic text-lg`}>{state2.text}</span>}
                            <span className="close" onClick={() => props.onClose()}>&times;</span>
                        </div>
                        <hr />
                    </div>
                    <div className='overflow-auto h-full pt-10'>
                        {
                            state
                                ?
                                <Register code409={() => code409()} code200={() => code200()} />
                                :
                                <Login onClose={() => props.onClose()} />
                        }
                    </div>
                </div >
            </div >
        </>
    );
});

export default ModalRegis;