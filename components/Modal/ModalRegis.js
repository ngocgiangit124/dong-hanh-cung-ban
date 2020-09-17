import React, { memo, useState } from 'react';
import Register from '../Modal/Register'
import Login from '../Modal/Login'

const ModalRegis = memo(() => {
    const [state, setState] = useState(true)

    return (
        <div id="myModal" className={`modal block`}>
            <div className='modal-content h-auto overflow-y-hidden sm:w-full md:w-40% relative' >
                <div className='absolute border-gray-600 bg-white sm:w-full'>
                    <div className='modal-title flex justify-between items-center my-2 mx-5 text-2xl '>
                        <div className="py-4 px-8 text-lg bg-white rounded-lg font-semibold text-gray-500 leading-6 ">
                            <a className={`mr-12 py-6 cursor-pointer ${state ? 'active-post' : ''}`} onClick={() => setState(!state)}>TIN TỨC</a>
                            <a className={`py-6 cursor-pointer ${!state ? 'active-post' : ''}`} onClick={() => setState(!state)} >VIDEO</a>
                        </div>
                        <span className="close">&times;</span>
                    </div>
                    <hr />
                </div>
                <div className='overflow-auto h-full pt-10'>

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