import Link from 'next/link';
import React, { memo } from 'react';

const Bottom = memo(() => {
    return (
        <div className='text-sm my-10 xs:px-3 md:px-0  '>
            <div className="flex">
                <div className="w-1/2">
                    <Link href="/contact">
                        <a>
                            <p className='mr-8 flex items-center'>
                                <em className='mr-2'>
                                    <svg className="w-3 font-semibold" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </em>
                                <span>Quyền riêng tư</span>
                            </p>
                        </a>
                    </Link>
                    <Link href="/contact">
                        <a>
                            <p className='mr-8  flex items-center'>
                                <em className='mr-2'>
                                    <svg className="w-3 font-semibold" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </em>
                                <span>Quảng cáo</span>
                            </p>
                        </a>
                    </Link>
                    <Link href="/contact">
                        <a>
                            <p className='mr-8 w-48 flex items-center'>
                                <em className='mr-2'>
                                    <svg className="w-3 font-semibold" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </em>
                                <span>Liên hệ</span>
                            </p>
                        </a>
                    </Link>
                </div>
                <div className="w-1/2">
                    <Link href="/contact">
                        <a>
                            <p className='mr-8 flex items-center'>
                                <em className='mr-2'>
                                    <svg className="w-3 font-semibold" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </em>
                                <span>Điều khoản</span>
                            </p>
                        </a>
                    </Link>
                    <Link href="/contact">
                        <a>
                            <p className='mr-8 flex items-center'>
                                <em className='mr-2'>
                                    <svg className="w-3 font-semibold" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </em>
                                <span>Cookie</span>
                            </p>
                        </a>
                    </Link>
                </div>

            </div>
            <img src='../img/fb.png' className='my-8' />
            <p className='text-gray-400'>@2020 donghanhcungbandoc.vn, Inc</p>
            <Link href="#__next"><a>
                <div className='fixed bottom-0 right-0 xs:mr-3 xs:mb-3 md:mr-12 md:mb-12 cursor-pointer'>
                    <img src='../img/ArrowHeader.png' />
                </div></a>
            </Link>

        </div >
    );
});

export default Bottom;