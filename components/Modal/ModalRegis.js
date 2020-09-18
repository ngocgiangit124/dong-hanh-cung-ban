import React, { memo, useState } from 'react';
import Register from '../Modal/Register'
import Login from '../Modal/Login'
import useCloseModal from '../../hook/useCloseModal'
const ModalRegis = memo((props) => {
    const [state, setState] = useState(true)
    const a = useCloseModal('aa', 'vv')
    return (
        <div id="myModal" className={`modal block`} onClick={() => console.log('a')}>
            {a}
            <div className='modal-content h-auto overflow-y-hidden max-h-80vh sm:w-full md:w-40% relative' onClick={() => console.log('b')}>
                <div className='absolute border-gray-600 bg-white sm:w-full' >
                    <div className='modal-title flex justify-between items-center my-2 mx-5 text-2xl '>
                        <div className="py-4 px-8 text-lg bg-white rounded-lg font-semibold text-gray-500 leading-6 ">
                            <a className={`mr-12 py-6 cursor-pointer ${state ? 'active-post' : ''}`} onClick={() => setState(!state)}>ĐĂNG KÝ</a>
                            <a className={`py-6 cursor-pointer ${!state ? 'active-post' : ''}`} onClick={() => setState(!state)} >ĐĂNG NHẬP</a>
                        </div>
                        <span className="close" onClick={() => props.onClose()}>&times;</span>
                    </div>
                    <hr />
                </div>
                <div className='overflow-auto h-auto max-h-80vh pt-10 '>

                    {
                        state
                            ?
                            <Register />
                            :
                            <Login />
                    }
                </div>
            </div >
        </div >
    );
});

export default ModalRegis;