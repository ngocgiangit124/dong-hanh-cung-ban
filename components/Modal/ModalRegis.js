import React, { memo, useState } from 'react';
import Register from '../Modal/Register'
import Login from '../Modal/Login'
const ModalRegis = memo((props) => {
    console.log(props.type)
    const [state, setState] = useState(!props.type)
    return (
        <>
            <div id="myModal" className={`modal block`}>
                <div className=" top-0 right-0 bottom-0 left-0 w-full h-full z-10 absolute " onClick={() => props.onClose()}></div>
                <div className='modal-content h-auto overflow-y-hidden sm:w-full md:w-40% relative z-20' >
                    <div className='absolute border-gray-600 bg-white sm:w-full'>
                        <div className='modal-title flex justify-between items-center my-2 mx-5 text-2xl '>
                            <div className="py-4 px-8 text-lg bg-white rounded-lg font-semibold text-gray-500 leading-6 ">
                                <a className={`mr-12 py-6 cursor-pointer ${state ? 'active-post' : ''}`} onClick={() => setState(!state)}>ĐĂNG KÝ</a>
                                <a className={`py-6 cursor-pointer ${!state ? 'active-post' : ''}`} onClick={() => setState(!state)} >ĐĂNG NHẬP</a>
                            </div>
                            <span className="close" onClick={() => props.onClose()}>&times;</span>
                        </div>
                        <hr />
                    </div>
                    <div className='overflow-auto h-full pt-10'>
                        {
                            state
                                ?
                                <Register />
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