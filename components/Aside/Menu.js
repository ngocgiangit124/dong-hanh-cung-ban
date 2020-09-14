import React, { memo } from 'react';

const Menu = memo(() => {
    return (
        <>
            <div className=' bg-white rounded-lg p-5'>
                <div className='flex items-center pb-2'>
                    <img src='../img/home.png' className='p-2' />
                    <p className='font-semibold text-xs'>TRANG CHỦ</p>
                </div>
                <div className='flex items-center pb-2'>
                    <img src='../img/newsfeed.png' className='p-2' />
                    <p className='font-semibold text-xs'>TIN TỨC</p>
                </div>
                <div className='flex items-center pb-2'>
                    <img src='../img/review.png' className='p-2' />
                    <p className='font-semibold text-xs'> REVIEW</p>
                </div>
                <div className='flex items-center pb-2'>
                    <img src='../img/XMLID_823_.png' className='p-2' />
                    <p className='font-semibold text-xs'>HOT VIDEO</p>
                </div>
                <div className='flex items-center pb-2'>
                    <img src='../img/Combined Shape.png' className='p-2' />
                    <p className='font-semibold text-xs'>ĐỜI SỐNG XÃ HỘI</p>
                </div>
                <div className='flex items-center pb-2'>
                    <img src='../img/writing.png' className='p-2' />
                    <p className='font-semibold text-xs'>BẠN ĐỌC VIẾT</p>
                </div>
            </div >

            {/* <div className='w-4/12 bg-white rounded-lg mt-5 p-5'> */}
            <img src='../img/Aside1.png' className=' mt-5 ' />
            {/* </div> */}
            <img src='../img/Aside2.png' className=' mt-5 ' />
        </>
    );
});

export default Menu;