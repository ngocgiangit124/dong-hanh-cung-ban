import React, { memo, useState } from 'react';
import { useRouter } from 'next/router'
const Comment = memo((props) => {

    const router = useRouter()
    const [comment, setComment] = useState([
        { avatar: '../img/avatar1.png', date: '20H-23/07/2020', name: 'Hoàng Văn Thái', comment: 'Bo lao', numLike: '1313', answer: [{ avatar: '../img/avatar1.png', date: '20H-23/07/2020', name: 'Hoàng Văn Thái', numLike: '12313', comment: 'Bo lao' }, { avatar: '../img/avatar1.png', date: '20H-23/07/2020', name: 'Hoàng Văn Thái', numLike: '12313', comment: 'Bo lao' }, { avatar: '../img/avatar1.png', date: '20H-23/07/2020', name: 'Hoàng Văn Thái', numLike: '12313', comment: 'Bo lao' }] },
        { avatar: '../img/avatar1.png', date: '20H-23/07/2020', name: 'Hoàng Văn Thái11', comment: 'Bo lao vc', numLike: '1313', answer: [{ avatar: '../img/avatar1.png', date: '20H-23/07/2020', name: 'Hoàng Văn Thái', numLike: '12313', comment: 'Bo lao' }] },
        { avatar: '../img/avatar1.png', date: '20H-23/07/2020', name: 'Hoàng Văn Thái112', comment: 'Bo lao vccsssss', numLike: '1313', answer: [{ avatar: '../img/avatar1.png', date: '20H-23/07/2020', name: 'Hoàng Văn Thái', numLike: '12313', comment: 'Bo lao' }] }
    ])


    const [show, setShow] = useState()
    const [state, setState] = useState('')
    const [state2, setState2] = useState({ index: '', idx: '' })
    const [input, setInput] = useState({
        comment: '',
        answer: ''
    })

    const close = () => {
        props.close()
    }
    const sendComment = () => {
        if (input.comment !== '') {
            var add = { avatar: '../img/avatar1.png', date: '20H-23/07/2020', name: 'TTA', comment: input.comment, numLike: '0', answer: [] }
            setComment([...comment, add])
            setState('')
            setInput({ ...input, comment: '' })
            router.replace(`#comment-${comment.length - 1}`)

        }
    }
    const sendAnswer = (index) => {
        if (input.answer !== '') {
            var add = { avatar: '../img/avatar1.png', date: '20H-23/07/2020', name: 'VuongBaka', numLike: '0', comment: input.answer }
            var newAnswer = [...comment]
            newAnswer[index].answer.push(add)
            setComment(newAnswer)
            setInput({ ...input, answer: '' })
            setState2({ index: '', idx: '' })
            setState('')
            router.push(`#comment-${index}-answer-${newAnswer[index].answer.length - 2}`)
        }
    }
    const getAnswer = (answer, index) => {
        return answer.map((item, idx) => {
            return (
                <div id={`comment-${index}-answer-${idx}`}>
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
                            <a
                                onClick={() => {
                                    if (state2.index === index && state2.idx === idx)
                                        setState2({ index: '', idx: '' })
                                    else
                                        setState2({ index, idx })
                                }}
                                className='flex items-center cursor-pointer'><img className='mr-1' src='../img/comment.png' /><span className='text-gray-400'>Trả 1ời</span></a>
                        </div>
                        {

                            state2.index === index && state2.idx === idx && <div>
                                <textarea className="bg-colorinput focus:outline-none focus:shadow-outline border rounded-lg py-2 px-4 
                                    block w-full appearance-none leading-normal resize-none" type="text" placeholder="Bạn đang nghĩ gì?" rows='3' value={input.answer} onChange={(e) => setInput({ ...input, answer: e.target.value })} />
                                <input className='bg-#1472BE rounded-md py-1 text-white font-semibold text-sm w-full my-5' onClick={() => sendAnswer(index)} type='button' value="GỬI BÌNH LUẬN" />
                            </div>
                        }
                    </div>
                </div>
            )
        })
    }
    const getComment = () => {
        return comment.map((item, index) => {
            return (
                <>
                    <div id={`comment-${index}`} className='comment w-full' key={index}>
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
                                <a className='flex items-center cursor-pointer'><img className='mr-1' src='../img/like.png' /><span className='text-blue-800 mr-10'>{item.numLike}</span></a>
                                <a onClick={() => {
                                    if (state === index)
                                        setState('')
                                    else
                                        setState(index)
                                }}
                                    className='flex items-center cursor-pointer'><img className='mr-1' src='../img/comment.png' /><span className='text-gray-400'>Trả 1ời</span></a>
                            </div>
                            {
                                state === index && <div>
                                    <textarea className="bg-colorinput focus:outline-none focus:shadow-outline border rounded-lg py-2 px-4 
                                    block w-full appearance-none leading-normal resize-none" type="text" placeholder="Bạn đang nghĩ gì?" rows='3' value={input.answer} onChange={(e) => setInput({ ...input, answer: e.target.value })} />
                                    <input className='bg-#1472BE rounded-md py-1 text-white font-semibold text-sm w-full my-5 ' onClick={() => sendAnswer(index)} type='button' value="GỬI BÌNH LUẬN" />
                                </div>
                            }
                            {show !== index &&
                                <div className='w-full flex justify-center items-center' onClick={() => setShow(index)}>
                                    <div className='cursor-pointer text-color1472BE'>Hiển thị tất cả {item.answer.length} câu trả lời</div>
                                </div>
                            }
                            {
                                show === index &&
                                getAnswer(item.answer, index)

                            }
                            {show === index &&
                                <div className='w-full flex justify-center items-center' onClick={() => setShow(!show)}>
                                    <div className='cursor-pointer text-color1472BE'>Ẩn tất cả {item.answer.length} câu trả lời</div>
                                </div>
                            }
                        </div>
                    </div>
                    <hr className='w-full my-5 border-1 border-gray-400' />

                </>
            )
        })
    }

    return (
        <div id="myModal" className={`modal block`}>
            <div className='modal-content h-80vh overflow-y-hidden sm:w-full md:w-40% relative' >
                <div className='absolute border-gray-600 bg-white w-full'>
                    <div className='modal-title flex justify-between items-center my-2 mx-5 text-2xl '>
                        Bình luận
                    <span className="close" onClick={() => close()}>&times;</span>
                    </div>
                    <hr />
                </div>
                <div className='overflow-auto h-full pt-10'>
                    <div className='m-8 flex flex-col justify-center items-center'>
                        <textarea className="bg-colorinput focus:outline-none focus:shadow-outline border rounded-lg py-2 px-4 
                            block w-full appearance-none leading-normal resize-none" type="text" placeholder="Bạn đang nghĩ gì?" rows='3' value={input.comment} onChange={(e) => setInput({ ...input, comment: e.target.value })} />
                        <input className='bg-#1472BE rounded-md py-1 text-white font-semibold text-sm w-full my-5 ' onClick={() => sendComment()} type='button' value="GỬI BÌNH LUẬN" />
                        {getComment()}
                    </div>
                    <div className="flex justify-center items-center m-10">
                        <img src='../img/waiting.png' />
                    </div>
                </div>
                {/* <div>&nbsp;</div> */}
            </div >
        </div >
    );
});

export default Comment;

