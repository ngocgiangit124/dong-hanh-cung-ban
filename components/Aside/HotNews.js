import React, { memo } from 'react';

const HotNews = memo(() => {
    return (
        <div className='my-5 text-3xl font-semibold not-italic'>
            <p>TIN NỔI BẬT</p>

            <hr className='border-blue-500 border-2 my-5' />

            <div className='flex flex-row text-base'>
                <div className='flex flex-col justify-between'>
                    <div>Review Bộ Vô Lăng Winner DIY Có Thực Sự Ngon Hơn G29</div>
                    <div className='flex text-xs font-light'>
                        <img src='../img/comment.png' className="mr-2" /><p className="mr-10">141</p>
                        <img src='../img/share.png' className="mr-2" /><p>12121</p>
                    </div>
                </div>
                <img src='../img/hotnews1.png' />
            </div>
            <hr className='border-gray-500 border-1 my-8' />

            <div className='flex flex-row text-base'>
                <div className='flex flex-col justify-between'>
                    <div>Review Bộ Vô Lăng Winner DIY Có Thực Sự Ngon Hơn G29</div>
                    <div className='flex text-xs font-light'>
                        <img src='../img/comment.png' className="mr-2" /><p className="mr-10">141</p>
                        <img src='../img/share.png' className="mr-2" /><p>12121</p>
                    </div>
                </div>
                <img src='../img/hotnews1.png' />
            </div>
            <hr className='border-gray-500 border-1 my-8' />
        </div >

    );
});

export default HotNews;