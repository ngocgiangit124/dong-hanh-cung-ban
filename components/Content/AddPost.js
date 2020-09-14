import React, { memo } from 'react'

const AddPost = memo(() => {
    return (
        <>
            <div className="mt-8 pt-4 pb-4 pl-6 pr-6 bg-white rounded-lg">
                <div className={` w-full flex items-center justify-between`}>
                    <div className="flex items-center">
                        <div className="mr-5" ><img className="rounded" src="../img/avatar.png" alt="logo" /></div>
                        <div className="font-semibold">Hoàng Văn Thái</div>

                    </div>
                    <div>
                        Bạn muốn chia sẻ điều gì?
                    </div>
                </div>
                <div className="mt-2 pt-2 pb-2 flex items-center justify-between ">
                    <div className="w-1/2 border-gray-900 sm:w-full pr-3">
                        <a href="" className="rounded-full text-lg items-center flex justify-center border border-gray-400 w-full p-3 font-semibold">
                            <img className="mr-4" src="../img/icon_writing.png" />
                            <span>Tin Tức</span>
                        </a>
                    </div>
                    <div className="w-1/2 border-gray-900 sm:w-full pl-3">
                        <a href="" className="rounded-full text-lg items-center flex justify-center border border-gray-400 w-full p-3 font-semibold bg-blue-700 text-white">
                            <img className="mr-4" src="../img/icon_yout.png" />
                            <span>Video</span>
                        </a>
                    </div>

                </div>
            </div >
        </>
    )
});
export default AddPost;