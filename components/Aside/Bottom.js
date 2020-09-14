import React, { memo } from 'react';

const Bottom = memo(() => {
    return (
        <div className='text-sm my-10'>
            <div className="flex flex-row mt-2">
                <p className='mr-8 w-48'> <em className='mr-2'>{'>'}</em>Quyền riêng tư</p>
                <p className='mr-8 w-48'><em className='mr-2'>{'>'}</em>Điều khoản</p>
            </div>
            <div className="flex flex-row mt-2">
                <p className='mr-8 w-48'> <em className='mr-2'>{'>'}</em>Quảng cáo </p>
                <p className='mr-8 w-48'><em className='mr-2'>{'>'}</em>Cookie</p>
            </div>
            <div className="flex flex-row mt-2">
                <p className='mr-8 w-48'> <em className='mr-2'>{'>'}</em>Liên hệ</p>

            </div>
            <img src='../img/fb.png' className='my-8' />
            <p className='text-gray-400'>@2020 donghanhcungbandoc.vn, Inc</p>
            <div className='fixed bottom-0 right-0'>
                <img src='../img/ArrowHeader.png' />
            </div>
        </div >
    );
});

export default Bottom;