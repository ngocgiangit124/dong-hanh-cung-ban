import React, { memo, useState } from 'react'
import Editer from './Editer'
import Hastag from './Hastag'

const CreatePost = memo(() => {
    const [state, setState] = useState({
        tintuc: true,
        video: false,
    })
    return (
        <>
            <div className="py-4 px-8 text-lg bg-white rounded-lg font-semibold text-gray-500 leading-6 ">
                <a className={`mr-12 py-4 ${state.tintuc ? 'active-post' : ''}`} onClick={() => setState({ ...state, tintuc: !state.tintuc, video: !state.video })}>TIN TỨC</a>
                <a className={`py-4 ${state.video ? 'active-post' : ''}`} onClick={() => setState({ ...state, tintuc: !state.tintuc, video: !state.video })}>VIDEO</a>
            </div>

            <div id="tab1" className={`mt-6 py-4 px-8 text-lg bg-white rounded-lg font-semibold text-gray-500 ${state.tintuc ? '' : 'hidden'}`}>
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
                    <div className="box-border mt-2 border border-gray-400 rounded-lg h-64 ">
                        <Editer />
                    </div>
                </div>
                {/*  */}
                <div className="mt-6">
                    <div className=""><label className="text-black">Chọn chuyên mục</label><span className="text-red-500"> *</span></div>
                    <div className="box-border mt-2 ">
                        <select className="px-6 w-full border border-gray-400 h-12 rounded-lg" type="text" placeholder="Tiêu đề" >
                            <option>Giang</option>\
                            <option>Giang</option>
                            <option>Giang</option>
                            <option>Giang</option>
                        </select>
                    </div>
                </div>

                <div className="mt-6">
                    <div className=""><label className="text-black">Tag</label><span className="text-red-500"> *</span></div>
                    <div className="box-border mt-2">

                        <Hastag />
                    </div>
                </div>

                <div className="mt-6">
                    <button className="w-full bg-blue-700 py-3 rounded-lg text-white font-semibold">GỬI BÀI VIẾT</button>
                </div>
            </div>



            <div id="tab2" className={`mt-6 py-4 px-8 text-lg bg-white rounded-lg font-semibold text-gray-500 ${state.video ? '' : 'hidden'}`}>
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
                            <option>Review</option>\
                            <option>Giang</option>
                            <option>Giang</option>
                            <option>Giang</option>
                        </select>
                    </div>
                </div>

                <div className="mt-6">
                    <div className=""><label className="text-black">Tag</label><span className="text-red-500"> *</span></div>
                    <div className="box-border mt-2">
                        giang giang
                    </div>
                </div>

                <div className="mt-6">
                    <button className="w-full bg-blue-700 py-3 rounded-lg text-white font-semibold">GỬI VIDEO</button>
                </div>
            </div>
        </>
    );
});
export default CreatePost;