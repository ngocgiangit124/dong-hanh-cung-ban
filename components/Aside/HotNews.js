import React, { memo } from 'react';

const HotNews = memo(() => {
    return (
        <div className='my-5 text-3xl font-semibold not-italic'>
            <p>TIN NỔI BẬT</p>

            <hr className='border-blue-500 border-2 my-5' />

            <div className='flex flex-row text-base'>
                <div className='flex flex-col justify-between cursor-pointer'>
                    <div>Review Bộ Vô Lăng Winner DIY Có Thực Sự Ngon Hơn G29</div>
                    <div className='flex text-xs font-light leading-4'>
                        <img src='../img/icon_commentsm.png' className="mr-2  cursor-pointer" /><span className="mr-10">141</span>
                        <img src='../img/icon_chiasesm.png' className="mr-2  cursor-pointer" /><span>12121</span>
                    </div>
                </div>
                <img src='../img/hotnews1.png' />
            </div>
            <hr className='border-gray-500 border-1 my-8' />

            <div className='flex flex-row text-base'>
                <div className='flex flex-col justify-between'>
                    <div>Review Bộ Vô Lăng Winner DIY Có Thực Sự Ngon Hơn G29</div>
                    <div className='flex text-xs font-light leading-4'>
                        <img src='../img/icon_commentsm.png' className="mr-2" /><span className="mr-10">141</span>
                        <img src='../img/icon_chiasesm.png' className="mr-2" /><span>12121</span>
                    </div>
                </div>
                <img src='../img/hotnews1.png' />
            </div>
            <hr className='border-gray-500 border-1 my-8' />
        </div >

    );
});

export default HotNews;