import React, { memo } from 'react';

const HasTag = memo(() => {
    return (
        <div className='bg-white rounded-lg p-5 '>
            <p>Các chủ đề phổ biến của các bài viết</p>
            <div className='flex flex-wrap'>
                <p className='bg-blue-100 rounded-full py-2 px-4 m-2 text-color1472BE'>#dddsdffaf</p>
                <p className='bg-blue-100 rounded-full py-2 px-4 m-2 text-color1472BE'>#ddddffsfsfsfsfsfssdf</p>
                <p className='bg-blue-100 rounded-full py-2 px-4 m-2 text-color1472BE'>#dddsdf</p>
                <p className='bg-blue-100 rounded-full py-2 px-4 m-2 text-color1472BE'>#dddsdf</p>
                <p className='bg-blue-100 rounded-full py-2 px-4 m-2 text-color1472BE'>#dddsdf</p>
            </div>

        </div >
    );
});

export default HasTag;