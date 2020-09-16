import React, { memo } from 'react';
import HotNews from '../Aside/HotNews'
import HasTag from '../Aside/HasTag'
import Bottom from '../Aside/Bottom'
const Menu = memo(() => {
    return (
        <>
            <div className=' bg-white rounded-lg p-5'>
                <div className='flex items-center pb-2'>
                    <div className='w-16'>
                        <img src='../img/home.png' className='p-2' />
                    </div>
                    <div className='font-semibold text-sm'>TRANG CHỦ</div>
                </div>
                <div className='flex items-center pb-2'>
                    <div className='w-16'>
                        <img src='../img/newsfeed.png' className='p-2' />
                    </div>
                    <span className='font-semibold text-sm'>TIN TỨC</span>
                </div>
                <div className='flex items-center pb-2'>
                    <div className='w-16'>
                        <img src='../img/review.png' className='p-2' />
                    </div>
                    <div className='font-semibold text-sm'> REVIEW</div>
                </div>
                <div className='flex items-center pb-2'>
                    <div className='w-16'>
                        <img src='../img/XMLID_823_.png' className='p-2' />
                    </div>
                    <div className='font-semibold text-sm'>HOT VIDEO</div>
                </div>
                <div className='flex items-center pb-2'>
                    <div className='w-16'>
                        <img src='../img/Combined Shape.png' className='p-2' />
                    </div>
                    <div className='font-semibold text-sm'>ĐỜI SỐNG XÃ HỘI</div>
                </div>
                <div className='flex items-center pb-2'>
                    <div className='w-16'>
                        <img src='../img/writing.png' className='p-2' />
                    </div>
                    <div className='font-semibold text-sm'>BẠN ĐỌC VIẾT</div>
                </div>
            </div >

            {/* <div className='w-4/16 bg-white rounded-lg mt-5 p-5'> */}
            <img src='../img/Aside1.png' className=' mt-5 ' />
            {/* </div> */}
            <img src='../img/Aside2.png' className=' mt-5 ' />

            <HotNews />
            <HasTag />
            <Bottom />
        </>
    );
});

export default Menu;