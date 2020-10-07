import React, { memo, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { actGetListPost } from '../../store/action/profile.js'
const ItemProfile = memo(() => {
    const dispatch = useDispatch()
    const [state, setState] = useState({
        name: '',
        email: '',
        phone: '',
        img: '',
        img_default: ''
    })
    const data = useSelector(state => state.login.data)
    useEffect(() => {
        if (data.id && data.avatar_img) {
            setState({ ...state, name: data.first_name, email: data.email, phone: data.title, img: data.avatarFull_img.thumbnails[4].url, img_default: data.avatarFull_img.thumbnails[4].url })
        } else if (data.id && !data.avatar_img) {
            setState({ ...state, name: data.first_name, email: data.email, phone: data.title })
        }
    }, [data])

    const onChange = (e) => {
        const target = e.target
        const value = target.value
        const name = target.name
        setState({
            ...state,
            [name]: value
        })
    }
    const getBase64Img = (data) => {
        try {
            var reader = new FileReader();
            reader.readAsDataURL(data);
            reader.onloadend = function () {
                var base64data = reader.result;
                // console.log(base64data);
                setState({ ...state, img: base64data })
                return;
            }
        } catch (error) {
            alert('Loi upload anh')
        }

    }
    console.log(state)
    const submit = () => {
        dispatch(actEditProfile(data.avatar, data.token, data.id, state.img_default, state.img, { first_name: state.name, email: state.email, title: state.phone }))
    }
    return (
        <>
            <div className="mt-6 bg-white py-6 rounded-lg">
                <div className="xs:px-3 md:px-8">
                    <h3 className="text-xl font-semibold">Thông tin người dùng</h3>
                </div>
                <div className="relative mt-10">
                    <div className="relative">
                        <div className="m-auto h-40 w-40 bg-gray-300 rounded-full flex items-center content-center  relative">
                            {state.img === '' ? <img className="m-auto rounded avatar" src="../img/icon_plus.png" /> :
                                <img className=" h-full w-full rounded avatar-full" src={state.img} />}

                        </div>
                        <div className="absolute flex w-full top-0">
                            <input type="file" className="cursor-poiter m-auto h-40 w-40 bg-transparent opacity-0" onChange={(e) => getBase64Img(e.target.files[0])} />
                        </div>
                    </div>
                    <div className="flex w-full mt-4 relative">
                        <span className=" m-auto">Thêm ảnh đại diện</span>
                    </div>
                </div>
                <div className="xs:px-3 md:px-24   py-4 mt-5">
                    <div>
                        <div className="font-semibold"><label className="text-black">Họ tên</label></div>
                        <div className="box-border mt-2">
                            <input className="px-6 py-2 w-full border border-gray-400 h-12 rounded-lg" type="text" value={state.name} name="name" placeholder="Tiêu đề" onChange={(e) => onChange(e)} />
                        </div>
                    </div>
                    <div className="mt-8">
                        <div className="font-semibold"><label className="text-black">Email</label></div>
                        <div className="box-border mt-2">
                            <input className="px-6 py-2 w-full border border-gray-400 h-12 rounded-lg" type="text" value={state.email} placeholder="Nhập email" name="email" onChange={(e) => onChange(e)} />
                        </div>
                    </div>
                    <div className="mt-8">
                        <div className="font-semibold"><label className="text-black">Số điện thoại</label></div>
                        <div className="box-border mt-2">
                            <input className="px-6 py-2 w-full border border-gray-400 h-12 rounded-lg" type="text" value={state.phone} placeholder="Nhập số điện thoại" name="phone" onChange={(e) => onChange(e)} />
                        </div>
                    </div>
                </div>
            </div>



            <div className="mt-8 bg-white  py-6 rounded-lg">
                <div className="xs:px-3 md:px-8">
                    <h3 className="text-xl font-semibold">Đổi mật khẩu</h3>
                </div>

                <div className="xs:px-3 md:px-24   py-4 mt-5">
                    <div>
                        <div className="font-semibold"><label className="text-black">Mật khẩu cũ</label></div>
                        <div className="box-border mt-2">
                            <input className="px-6 py-2 w-full border border-gray-400 h-12 rounded-lg" type="text" placeholder="Nhập mật khẩu cũ" />
                        </div>
                    </div>
                    <div className="mt-8">
                        <div className="font-semibold"><label className="text-black">Mật khẩu mới</label></div>
                        <div className="box-border mt-2">
                            <input className="px-6 py-2 w-full border border-gray-400 h-12 rounded-lg" type="text" placeholder="Nhập mật khẩu mới" />
                        </div>
                    </div>
                    <div className="mt-8">
                        <div className="font-semibold"><label className="text-black">Nhập lại mật khẩu mới</label></div>
                        <div className="box-border mt-2">
                            <input className="px-6 py-2 w-full border border-gray-400 h-12 rounded-lg" type="text" placeholder="Nhập lại mật khẩu mới" />
                        </div>
                    </div>
                    <div className="mt-8">
                        <div className="flex">
                            <input type="checkbox" className="w-5 h-5 mr-4 leading-5" /><span className="leading-5">Xác nhận thay đổi mật khẩu </span>
                        </div>
                    </div>
                </div>
            </div>


            <div className="mt-8 bg-white  py-6 rounded-lg">
                <div className="xs:px-3 md:px-8">
                    <h3 className="text-xl font-semibold">Mạng xã hội</h3>
                </div>

                <div className="xs:px-3 md:px-24 py-4 mt-5">
                    <div className="flex items-center content-center justify-between pb-8 border-b-2 border-gray-300 mb-8">
                        <div className=" flex items-center">
                            <div className="mr-3">
                                <img src="../img/logo_fb.png" />
                            </div>
                            <div>
                                <div className="font-semibold leading-5">Facebook</div>
                                <div className="text-xs text-gray-500">Chưa liên kết</div>
                            </div>
                        </div>
                        <div className="box-border  text-sm text-gray-500 leading-4">
                            <div>
                                <a className="px-6 py-3 rounded-lg border border-gray-500 flex  items-center">
                                    <span className="mr-2">LIÊN KẾT </span>
                                    <img className="h-3" src="../img/right.png" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center content-center justify-between ">
                        <div className=" flex items-center">
                            <div className="mr-3">
                                <img src="../img/logo_gg.png" />
                            </div>
                            <div>
                                <div className="font-semibold leading-5">Google</div>
                                <div className="text-xs text-gray-500">Chưa liên kết</div>
                            </div>
                        </div>
                        <div className="box-border  text-sm text-gray-500 leading-4">
                            <div>
                                <a className="px-6 py-3 rounded-lg border border-gray-500 flex  items-center">
                                    <span className="mr-2">LIÊN KẾT </span>
                                    <img className="h-3" src="../img/right.png" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 mb-8  py-6 rounded-lg">
                <div className="flex">
                    <button className="m-auto px-16 py-3 bg-blue-700 rounded-lg text-white font-semibold" onClick={() => submit()}>CẬP NHẬT</button>
                </div>
            </div>
        </>
    );
});

export default ItemProfile;