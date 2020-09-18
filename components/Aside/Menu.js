import React, { memo } from 'react';
import HotNews from '../Aside/HotNews'
import HasTag from '../Aside/HasTag'
import Bottom from '../Aside/Bottom'
import Link from 'next/link';
const Menu = memo(() => {
    return (
        <>
            <div className=' bg-white rounded-lg p-5'>
                <Link href="/">
                    <a>
                        <div className='flex items-center pb-2'>

                            <div className='w-16'>
                                <img src='../img/home.png' className='p-2' />
                            </div>
                            <div className='font-semibold text-sm'>TRANG CHỦ</div>

                        </div>
                    </a>
                </Link>
                <Link href="/">
                    <a>
                        <div className='flex items-center pb-2'>
                            <div className='w-16'>
                                <img src='../img/newsfeed.png' className='p-2' />
                            </div>
                            <span className='font-semibold text-sm'>TIN TỨC</span>
                        </div>
                    </a>
                </Link>
                <Link href="/review">
                    <a>
                        <div className='flex items-center pb-2'>
                            <div className='w-16'>
                                <img src='../img/review.png' className='p-2' />
                            </div>
                            <div className='font-semibold text-sm'> REVIEW</div>
                        </div>
                    </a>
                </Link>
                <Link href="/">
                    <a>
                        <div className='flex items-center pb-2'>
                            <div className='w-16'>
                                <img src='../img/XMLID_823_.png' className='p-2' />
                            </div>
                            <div className='font-semibold text-sm'>HOT VIDEO</div>
                        </div>
                    </a>
                </Link>
                <Link href="/post">
                    <a>
                        <div className='flex items-center pb-2'>
                            <div className='w-16'>
                                <img src='../img/Combined Shape.png' className='p-2' />
                            </div>
                            <div className='font-semibold text-sm'>ĐỜI SỐNG XÃ HỘI</div>
                        </div>
                    </a>
                </Link>
                <Link href="/post">
                    <a>
                        <div className='flex items-center pb-2'>
                            <div className='w-16'>
                                <img src='../img/writing.png' className='p-2' />
                            </div>
                            <div className='font-semibold text-sm'>BẠN ĐỌC VIẾT</div>
                        </div>
                    </a>
                </Link>
            </div >




        </>
    );
});

export default Menu;