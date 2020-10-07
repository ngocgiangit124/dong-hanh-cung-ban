import React, { memo, useState, useEffect } from 'react'
import Comment from '../Modal/Comment'
import * as dayjs from 'dayjs'
// const Comment = dynamic(
//     () => import('../Modal/Comment'),
//     { ssr: false }
// )
import Share from '../Modal/Share'
import Link from 'next/link'
import axios from 'axios'
const IteamPost = memo((props) => {
    console.log(props);
    const [stateImg, setStateImg] = useState({
        url: props.item.image_thumbnail ? props.item.image_thumbnail.data.thumbnails[6].url : '',
        alt: props.item.image_thumbnail ? props.item.image_thumbnail.title : '',
    });
    const [stateUser, setStateUser] = useState({
        urlAv: props.item.userid ? (props.item.userid.avatar ? props.item.userid.avatar.data.thumbnails[1].url : '') : '',
        altAv: props.item.userid ? props.item.userid.first_name : '',
        nameAV: props.item.userid ? props.item.userid.first_name : '',
    });
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
    const [itemPost, setStateItem] = useState(props.item);

    return (
        <>
            {state.comment === 'block' && <Comment display={state.comment} close={() => closeComment()} />}
            {state.share === 'block' && <Share display={state.share} close={() => closeShare()} />}
            <div className={`${props.firstClass ? '' : "mt-8"} pt-4 pb-4  bg-white rounded-lg`}>
                <div className="xs:px-3 md:px-6">
                    <div className={` w-full flex items-center justify-between`}>
                        <div className="flex items-center">
                            <div className="mr-5 xs:w-10 md:w-8 xs:h-10 md:h-8" ><img className="rounded-full xs:w-10 md:w-8 xs:h-10 md:h-8 object-cover" src={stateUser.urlAv} alt={stateUser.altAv} /></div>
                        </div>
                        <div className=" items-center xs:block  md:flex md:justify-between w-full">
                            <div className="font-semibold ">{stateUser.nameAV}</div>
                            <div className="text-gray-500 text-sm">
                                {dayjs(itemPost.created_on).format('HH') + 'h' + dayjs(itemPost.created_on).format('mm DD/MM/YYYY')}
                            </div>
                        </div>
                    </div>
                    <div className="mt-6">
                        <p>{itemPost.content_short} </p>
                    </div>
                    <div className="mt-6 flex flex-wrap font-medium text-blue-700">
                        {itemPost.hashtag.map((item, index) => {
                            return <a href="" className="p-2 leading-5 rounded-full bg-blue-200 w-24 text-center mr-2 mb-2" key={index}>{item}</a>
                        })}
                    </div>

                </div>
                <div className="mt-6 w-full">
                    <Link href="/review">
                        <a>
                            <img className="w-full" src={stateImg.url} alt={stateImg.alt} />
                        </a>
                    </Link>
                </div>
                <div className="xs:px-3 md:px-6">
                    <div className="mt-6">
                        <Link href="/review"><a>
                            <h3 className="text-xl font-medium">{itemPost.title}</h3>
                        </a>
                        </Link>
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