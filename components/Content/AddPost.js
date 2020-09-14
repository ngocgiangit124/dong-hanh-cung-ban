import React, { memo } from 'react'

const AddPost = memo(() => {
    return (
        <>
            <div className="mt-8 pt-4 pb-4 pl-6 pr-6 bg-white rounded-lg">
                <div className={` w-full flex items-center justify-between`}>
                    <div className="flex items-center">
                        <div className="mr-5" ><img className="rounded" src="../img/avatar.png" alt="logo" /></div>
                        <div>Hoàng Văn Thái</div>

                    </div>
                    <div>
                        Bạn muốn chia sẻ điều gì?
                    </div>
                </div>
                <div className="pt-2 pb-2 flex items-center justify-between">
                    <div>
                        <a href="javascrit:" className="flex border-gray-400">
                            <img className="mr-1" src="../img/icon_writing.png" />
                            <span>Tin Tức</span>
                        </a>
                    </div>
                    <div>
                        <a href="javascrit:" className="flex">
                            <img className="mr-1" src="../img/icon_yout.png" />
                            <span>Tin Tức</span>
                        </a>
                    </div>
                </div>
            </div >
        </>
    )
});
export default AddPost;