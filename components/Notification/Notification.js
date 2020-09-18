import React, { memo } from 'react';

const Notification = memo(() => {
    const noti = () => {
        return (
            <div className="hover:bg-blue-900 p-5 cursor-pointer">
                <div className='flex flex-row text-white text-sm leading-4 hover:bg-blue-900'>
                    <div className='flex flex-col justify-between pr-2'>
                        <p>
                            <span className='font-semibold'>HoangVanThai </span>da binh luan bai viet cua ban
    </p>
                        <div className='text-xs'>20H15-23/07/2020</div>
                    </div>
                    <img src='../img/pexels-photo-936722.png' />
                </div>
            </div>
        )
    }


    return (
        <>
            {/* <div className="top-0 bottom-0 right-0 left-0 w-full h-full z-10 fixed" onClick={props.onClose}></div> */}
            <div className='absolute bg-blue-700 right-0 mt-4 w-ct23 overflow-auto h-auto max-h-30rem customScrollbar z-20'>
                {noti()}
                {noti()}
                {noti()}
                {noti()}
                {noti()}
                {/* ? */}
            </div>
        </>
    );
});

export default Notification;