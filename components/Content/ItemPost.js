import React, { memo, useState, useEffect } from 'react'
import Comment from '../Modal/Comment'
import Share from '../Modal/Share'

const IteamPost = memo(() => {

    const [state, setState] = useState({
        comment: 'hidden',
        share: 'hidden'
    })
    const hideComment = () => {
        setState({ ...state, comment: 'block' })
    }
    const closeComment = () => {
        setState({ ...state, comment: 'hidden' })
    }
    const hideShare = () => {
        setState({ ...state, share: 'block' })
    }
    const closeShare = () => {
        setState({ ...state, share: 'hidden' })
    }
    return (
        <>
            {state.comment === 'block' && <Comment display={state.comment} close={() => closeComment()} />}
            {state.share === 'block' && <Share display={state.share} close={() => closeShare()} />}
            <div className="mt-8 pt-4 pb-4  bg-white rounded-lg">
                <div className="xs:px-3 md:px-6">
                    <div className={` w-full flex items-center justify-between`}>
                        <div className="flex items-center">
                            <div className="mr-5 xs:w-10 md:w-8 xs:h-10 md:h-8" ><img className="rounded xs:w-10 md:w-8 xs:h-10 md:h-8" src="../img/avatar.png" alt="logo" /></div>
                        </div>
                        <div className=" items-center xs:block  md:flex md:justify-between w-full">
                            <div className="font-semibold ">Hoàng Văn Thái</div>
                            <div className="text-gray-500 text-sm">
                                20h15 - 23/07/2020
                            </div>
                        </div>
                    </div>
                    <div className="mt-6">
                        <p>Trang Travel & Leisure đã đưa ra danh sách giải World's Best Awards dựa trên bình chọn của độc giả. Ở hạng mục khu nghỉ dưỡng tốt nhất Đông Nam Á, Việt Nam có mặt ở vị trí số 10. </p>
                    </div>
                    <div className="mt-6 flex flex-wrap font-medium text-blue-700">
                        <a href="" className="p-2 leading-5 rounded-full bg-blue-200 w-24 text-center mr-2 mb-2">#travel</a>
                        <a href="" className="p-2 leading-5 rounded-full bg-blue-200 w-24 text-center mr-2 mb-2">#travel</a>
                        <a href="" className="p-2 leading-5 rounded-full bg-blue-200 w-24 text-center mr-2 mb-2">#travel</a>
                    </div>

                </div>
                <div className="mt-6 w-full">
                    <a href="/review">
                        <img className="w-full" src="../img/img_item_post.png" alt="" />
                    </a>
                </div>
                <div className="xs:px-3 md:px-6">
                    <div className="mt-6">
                        <a href="/review">
                            <h3 className="text-xl font-medium">Resort ở Hội An vào top khu nghỉ dưỡng hàng đầu Đông Nam Á </h3>
                        </a>
                    </div>
                    <div className='flex text-xs  mt-6 leading-4'>
                        <img src='../img/icon_commentsm.png' className="mr-2" /><span className="mr-10">141</span>
                        <img src='../img/icon_chiasesm.png' className="mr-2" /><span>12121</span>
                    </div>
                    <div className="border-t-2 mt-6 pt-2 pb-2 flex items-center justify-between ">
                        <div className="w-1/2 border-gray-900 sm:w-full pr-3">
                            <div className="rounded-full xs:text-xs md:text-lg items-center flex justify-center w-full p-3 font-semibold" style={{ cursor: 'pointer' }} onClick={() => hideComment()}>
                                <img className="mr-4 xs:w-6 md:w-8" src="../img/icon_comment.png" />
                                <span>Bình luận</span>
                            </div>
                        </div>
                        <div className="w-1/2 border-gray-900 sm:w-full pl-3">
                            <div className="rounded-full xs:text-xs md:text-lg items-center flex justify-center w-full p-3 font-semibold" style={{ cursor: 'pointer' }} onClick={() => hideShare()} >
                                <img className="mr-4 xs:w-6 md:w-8" src="../img/icon_chiase.png" />
                                <span>Chia sẻ</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
});
export default IteamPost;