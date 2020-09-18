import Link from 'next/link';
import React, { memo } from 'react'

const AddPost = memo(() => {
    return (
        <>
            <div className="mt-8 pt-4 pb-4 xs:px-3 md:px-6 bg-white rounded-lg">
                <div className={` w-full flex items-center xs:justify-start md:justify-between`}>
                    <div className="flex items-center">
                        <div className="mr-5" ><img className="rounded xs:w-10 md:w-8" src="../img/avatar.png" alt="logo" /></div>
                    </div>
                    <div className="flex items-center md:justify-between w-full">
                        <div className=" xs:hidden md:block font-semibold">Hoàng Văn Thái</div>
                        <div>
                            Bạn muốn chia sẻ điều gì?
                        </div>
                    </div>
                </div>
                <div className="mt-2 pt-2 pb-2 flex items-center justify-between xs:flex-wrap">
                    <div className="xs:w-full md:w-1/2 border-gray-900  md:pr-3 md:p-0 xs:pb-4">
                        <Link href="/post/create">
                            <a className="rounded-full text-lg items-center flex justify-center border border-gray-400 w-full p-3 font-semibold">
                                <img className="mr-4" src="../img/icon_writing.png" />
                                <span>Tin Tức</span>
                            </a>
                        </Link>
                    </div>
                    <div className="xs:w-full md:w-1/2 border-gray-900  md:pl-3">
                        <Link href="/post/create">
                            <a className="rounded-full text-lg items-center flex justify-center border border-gray-400 w-full p-3 font-semibold bg-blue-700 text-white">
                                <img className="mr-4" src="../img/icon_yout.png" />
                                <span>Video</span>
                            </a>
                        </Link>
                    </div>
                </div>
            </div >
        </>
    )
});
export default AddPost;