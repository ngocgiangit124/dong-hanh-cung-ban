import React, { memo, useState } from 'react';

const Comment = memo((props) => {
    const [comment, setComment] = useState([
        { avatar: '../img/avatar1.png', date: '20H-23/07/2020', name: 'Hoàng Văn Thái', comment: 'Bo lao', numLike: '1313', answer: [{ avatar: '../img/avatar1.png', date: '20H-23/07/2020', name: 'Hoàng Văn Thái', numLike: '12313', comment: 'Bo lao' }, { avatar: '../img/avatar1.png', date: '20H-23/07/2020', name: 'Hoàng Văn Thái', numLike: '12313', comment: 'Bo lao' }, { avatar: '../img/avatar1.png', date: '20H-23/07/2020', name: 'Hoàng Văn Thái', numLike: '12313', comment: 'Bo lao' }] },
        { avatar: '../img/avatar1.png', date: '20H-23/07/2020', name: 'Hoàng Văn Thái11', comment: 'Bo lao vc', numLike: '1313', answer: [{ avatar: '../img/avatar1.png', date: '20H-23/07/2020', name: 'Hoàng Văn Thái', numLike: '12313', comment: 'Bo lao' }] },
        { avatar: '../img/avatar1.png', date: '20H-23/07/2020', name: 'Hoàng Văn Thái112', comment: 'Bo lao vccsssss', numLike: '1313', answer: [{ avatar: '../img/avatar1.png', date: '20H-23/07/2020', name: 'Hoàng Văn Thái', numLike: '12313', comment: 'Bo lao' }] }
    ])
    const close = () => {
        props.close()
    }

    const getAnswer = (answer) => {
        return answer.map((item, index) => {
            return (
                <div>
                    <div className='flex flex-rows items-center w-full'>
                        <img className='mr-2' src='../img/avatar1.png' />
                        <div className=' w-full flex md:flex-row justify-between md:items-center sm:flex-col sm:items-start'>
                            <p className='text-base'>{item.name}</p>
                            <div className='float-right text-sm text-gray-500'>{item.date}</div>
                        </div>
                    </div>
                    <div className='my-4 ml-12 text-base'>
                        {item.comment}
                        <div className='flex text-xs my-5'>
                            <a className='flex items-center cursor-pointer'><img className='mr-1' src='../img/like.png' /><span className='text-blue-800 mr-10'>{item.numLike}</span></a>
                            <a className='flex items-center cursor-pointer'><img className='mr-1' src='../img/comment.png' /><span className='text-gray-400'>Trả 1ời</span></a>
                        </div>
                    </div>
                </div>
            )
        })
    }

    const getComment = () => {
        return comment.map((item, index) => {
            return (
                <>
                    <div className='comment w-full' key={index}>
                        <div className='flex flex-rows items-center w-full'>
                            <img className='mr-2' src='../img/avatar1.png' />
                            <div className=' w-full flex md:flex-row justify-between md:items-center sm:flex-col sm:items-start '>
                                <p className='text-base'>{item.name}</p>
                                <div className='float-right text-sm text-gray-500'>{item.date}</div>
                            </div>
                        </div>
                        <div className='my-4 ml-12 text-base'>
                            <p>{item.comment}</p>
                            <div className='flex text-xs my-5'>
                                <img className='mr-1' src='../img/like.png' /><p className='text-blue-800 mr-10'>{item.numLike}</p>
                                <img className='mr-1' src='../img/comment.png' /><p className='text-gray-400'>Trả 1ời</p>
                            </div>

                            {/* <div>
                                <textarea className="bg-colorinput focus:outline-none focus:shadow-outline border rounded-lg py-2 px-4 
                                    block w-full appearance-none leading-normal resize-none" type="text" placeholder="Bạn đang nghĩ gì?" rows='3' />

                                <input className='bg-#1472BE rounded-md py-1 text-white font-semibold text-sm w-full my-5 ' type='button' value="GỬI BÌNH LUẬN" />
                            </div> */}
                            {/* BEGIN ANSWER */}
                            {getAnswer(item.answer)}
                        </div>
                    </div>
                </>
            )
        })
    }


    return (
        <div id="myModal" className={`modal block`}>
            <div className='modal-content sm:w-full md:w-40%'>
                <div className='modal-title flex justify-between items-center my-2 mx-5 text-2xl'>
                    Bình luận
                    <span className="close" onClick={() => close()}>&times;</span>
                </div>
                <hr />
                <div className='overflow-auto h-38rem'>
                    <div className='m-8 flex flex-col justify-center items-center'>
                        <textarea className="bg-colorinput focus:outline-none focus:shadow-outline border rounded-lg py-2 px-4 
                            block w-full appearance-none leading-normal resize-none" type="text" placeholder="Bạn đang nghĩ gì?" rows='3' />
                        <input className='bg-#1472BE rounded-md py-1 text-white font-semibold text-sm w-full my-5 ' type='button' value="GỬI BÌNH LUẬN" />


                        {getComment()}

                        {/* comment */}
                        {/* <div className='flex flex-rows items-center w-full'>
                            <img className='mr-2' src='../img/avatar1.png' />
                            <div className=' w-full flex md:flex-row justify-between md:items-center sm:flex-col sm:items-start'>
                                <p className='text-base'>Hoàng Văn Thái</p>
                                <div className='float-right text-sm text-gray-500'>20H-23/07/2020</div>
                            </div>
                        </div>
                        <div className='my-4 ml-12 text-base'>
                            Trang Travel & Leisure đã đưa ra danh sách giải World's Best Awards dựa trên bình chọn của độc giả. Ở hạng mục khu nghỉ dưỡng tốt nhất Đông Nam Á, Việt Nam có mặt ở vị trí số 10.
                        <div className='flex text-xs my-5'>
                                <img className='mr-1' src='../img/like.png' /><p className='text-blue-800 mr-10'>121</p>
                                <img className='mr-1' src='../img/comment.png' /><p className='text-gray-400'>Trả 1ời</p>
                            </div>
                        </div> */}
                        {/*  */}




                    </div>
                    <div className="flex justify-center items-center m-10">
                        <img src='../img/waiting.png' />
                    </div>
                </div>
                <div>&nbsp;</div>
            </div>
        </div>
    );
});

export default Comment;

