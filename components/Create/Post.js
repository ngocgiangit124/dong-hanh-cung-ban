import React, { memo, useState, useEffect } from 'react'
import Editer from './Editer'
import Hastag from './Hastag'
import { actGetListCategory } from '../../get/category/listcategory'
import { useSelector, useDispatch } from 'react-redux'

const CreatePost = memo(() => {
    const dispatch = useDispatch()
    const [state, setState] = useState({
        tintuc: true,
        video: false,
        categories: {},
    })
    const [data, setData] = useState({
        status: 'published',

    })
    useEffect(() => {
        dispatch(actGetListCategory());
    }, []);
    const data_category = useSelector(state => state.category.data);
    useEffect(() => {
        setState({ ...state, categories: data_category })
    }, [data_category])


    return (
        <>
            <div className="py-4 xs:px-3 md:px-8 text-lg bg-white rounded-lg font-semibold text-gray-500 leading-6 mt-4">
                <span className={`cursor-poiter mr-12 py-4 ${state.tintuc ? 'active-post' : ''}`} onClick={() => setState({ ...state, tintuc: !state.tintuc, video: !state.video })}>TIN TỨC</span>
                <span className={`cursor-poiter py-4 ${state.video ? 'active-post' : ''}`} onClick={() => setState({ ...state, tintuc: !state.tintuc, video: !state.video })}>VIDEO</span>
            </div>

            <div id="tab1" className={`mt-6 py-4 xs:px-3 md:px-8 text-lg bg-white rounded-lg font-semibold text-gray-500 ${state.tintuc ? '' : 'hidden'}`}>
                <div className="mt-4">
                    <div className=""><label className="text-black">Tiêu đề</label><span className="text-red-500"> *</span></div>
                    <div className="box-border mt-2">
                        <input className="px-6 py-2 w-full border border-gray-400 h-12 rounded-lg" type="text" placeholder="Tiêu đề" />
                    </div>
                </div>
                <div className="mt-6">
                    <div className=""><label className="text-black">Mô tả</label><span className="text-red-500"> *</span></div>
                    <div className="box-border mt-2">
                        <textarea className="px-6 py-2  w-full border border-gray-400 h-24 rounded-lg" placeholder="Viết mô tả" >
                        </textarea>
                    </div>
                </div>
                {/*  */}
                <div className="mt-6">
                    <div className=""><label className="text-black">Nội dung</label><span className="text-red-500"> *</span></div>
                    <div className="box-border mt-2 border border-gray-400 rounded-lg min-h-18rem">
                        <Editer />
                    </div>
                </div>
                <div className="mt-6">
                    <div className=""><label className="text-black">Chọn chuyên mục</label><span className="text-red-500"> *</span></div>
                    <div className="box-border mt-2 ">
                        <select className="px-6 w-full border border-gray-400 h-12 rounded-lg" type="text" placeholder="Tiêu đề" >
                            {state.categories.length > 0 && data_category.map((item, index) => {
                                return <option value={item.id} key={index}>{item.name}</option>
                            })}
                        </select>
                    </div>
                </div>

                <div className="mt-6">
                    <div className=""><label className="text-black">Tag</label><span className="text-red-500"> *</span></div>
                    <div className="box-border mt-2">
                        <Hastag />
                    </div>
                </div>

                <div className="mt-6 mb-6">
                    <button className="w-full bg-blue-700 py-3 rounded-lg text-white font-semibold">GỬI BÀI VIẾT</button>
                </div>
            </div>



            <div id="tab2" className={`mt-6 py-4 xs:px-3 md:px-8 text-lg bg-white rounded-lg font-semibold text-gray-500 ${state.video ? '' : 'hidden'}`}>
                <div className="mt-4">
                    <div className=""><label className="text-black">Tiêu đề</label><span className="text-red-500"> *</span></div>
                    <div className="box-border mt-2">
                        <input className="px-6 py-2 w-full border border-gray-400 h-12 rounded-lg" type="text" placeholder="Tiêu đề" />
                    </div>
                </div>
                <div className="mt-6">
                    <div className=""><label className="text-black">Mô tả</label><span className="text-red-500"> *</span></div>
                    <div className="box-border mt-2">
                        <textarea className="px-6 py-2  w-full border border-gray-400 h-24 rounded-lg" placeholder="Viết mô tả" >
                        </textarea>
                    </div>
                </div>
                <div className="mt-6">
                    <div className=""><label className="text-black">File đính kèm</label><span className="text-red-500"> *</span></div>
                    <div className="box-border mt-2">
                        <textarea className="px-6 py-2  w-full border border-gray-400 h-56 rounded-lg" placeholder="Viết mô tả" >
                        </textarea>
                    </div>
                </div>

                <div className="mt-6">
                    <div className=""><label className="text-black">Chọn chuyên mục</label><span className="text-red-500"> *</span></div>
                    <div className="box-border mt-2 ">
                        <select className="px-6 w-full border border-gray-400 h-12 rounded-lg" type="text" placeholder="Tiêu đề" >
                            {state.categories.length > 0 && data_category.map((item, index) => {
                                return <option value={item.id} key={index}>{item.name}</option>
                            })}
                        </select>
                    </div>
                </div>

                <div className="mt-6">
                    <div className=""><label className="text-black">Tag</label><span className="text-red-500"> *</span></div>
                    <div className="box-border mt-2">
                        giang giang
                    </div>
                </div>

                <div className="mt-6 mb-6">
                    <button className="w-full bg-blue-700 py-3 rounded-lg text-white font-semibold">GỬI VIDEO</button>
                </div>
            </div>
        </>
    );
});
export default CreatePost;