import React, { memo } from 'react';

const test = memo(() => {
    return (
        <div>
            <div id="myModal" className={`modal block`}>
                <div className='modal-content h-screen overflow-y-hidden sm:w-full md:w-40% relative' >
                    <div className='absolute border-gray-600 bg-white w-full'>
                        <div className='modal-title flex justify-between items-center my-2 mx-5 text-2xl '>
                            Bình luận
                        </div>
                        <hr />
                    </div>
                    <div className='overflow-auto h-full pt-10'>

                        <div className="block justify-center items-center m-10">
                            <img src='../img/waiting.png' />
                            <img src='../img/waiting.png' />


                            <img src='../img/waiting.png' />
                            <img src='../img/waiting.png' />

                            <img src='../img/waiting.png' />
                            <img src='../img/waiting.png' />
                            <img src='../img/waiting.png' />
                            <img src='../img/waiting.png' />
                            <img src='../img/waiting.png' />
                            <img src='../img/waiting.png' />
                            <img src='../img/waiting.png' />
                            <img src='../img/waiting.png' />
                            <img src='../img/waiting.png' />
                            <img src='../img/waiting.png' />
                            <img src='../img/waiting.png' />
                            <img src='../img/waiting.png' />
                            <img src='../img/waiting.png' />


                        </div>
                    </div>
                    {/* <div>&nbsp;</div> */}
                </div >
            </div >
        </div>
    );
});

export default test;