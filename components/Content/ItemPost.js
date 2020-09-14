import React, { memo } from 'react'

const IteamPost = memo(() => {
    return (
        <>
            <div className="mt-8 pt-4 pb-4  bg-white rounded-lg">
                <div className=" pl-6 pr-6">
                    <div className={` w-full flex items-center justify-between`}>
                        <div className="flex items-center">
                            <div className="mr-5" ><img className="rounded" src="../img/avatar.png" alt="logo" /></div>
                            <div className="font-semibold">Hoàng Văn Thái</div>

                        </div>
                        <div className="text-gray-500 text-sm">
                            20h15 - 23/07/2020
                    </div>
                    </div>
                    <div className="mt-6">
                        <p>Trang Travel & Leisure đã đưa ra danh sách giải World's Best Awards dựa trên bình chọn của độc giả. Ở hạng mục khu nghỉ dưỡng tốt nhất Đông Nam Á, Việt Nam có mặt ở vị trí số 10. </p>
                    </div>
                    <div className="mt-6 flex flex-wrap font-medium text-blue-700">
                        <a href="" className="p-2 leading-5 rounded-full bg-blue-200 w-24 text-center mr-2">#travel</a>
                        <a href="" className="p-2 leading-5 rounded-full bg-blue-200 w-24 text-center mr-2">#travel</a>
                        <a href="" className="p-2 leading-5 rounded-full bg-blue-200 w-24 text-center mr-2">#travel</a>
                    </div>

                </div>
                <div className="mt-6 w-full">
                    <img className="w-full" src="../img/img_item_post.png" alt="" />
                </div>
                <div className=" pl-6 pr-6">
                    <div className="mt-6">
                        <h3 className="text-xl font-medium">Resort ở Hội An vào top khu nghỉ dưỡng hàng đầu Đông Nam Á </h3>
                    </div>
                    <div className='flex text-xs  mt-6'>
                        <img src='../img/icon_commentsm.png' className="mr-2" /><p className="mr-10">141</p>
                        <img src='../img/icon_chiasesm.png' className="mr-2" /><p>12121</p>
                    </div>
                    <div className="border-t-2 mt-6 pt-2 pb-2 flex items-center justify-between ">
                        <div className="w-1/2 border-gray-900 sm:w-full pr-3">
                            <a href="" className="rounded-full text-lg items-center flex justify-center w-full p-3 font-semibold">
                                <img className="mr-4" src="../img/icon_comment.png" />
                                <span>Bình luận</span>
                            </a>
                        </div>
                        <div className="w-1/2 border-gray-900 sm:w-full pl-3">
                            <a href="" className="rounded-full text-lg items-center flex justify-center w-full p-3 font-semibold">
                                <img className="mr-4" src="../img/icon_chiase.png" />
                                <span>Chia sẻ</span>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
});
export default IteamPost;