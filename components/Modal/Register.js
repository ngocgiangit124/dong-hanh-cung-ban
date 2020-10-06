import React, { memo, useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux'
import { actRegister } from '../../store/action/register'
const Register = memo((props) => {
    const [showPass, setShowPass] = useState({
        pass: false,
        checkPass: false
    })

    const dispatch = useDispatch()
    const { register, handleSubmit, watch, errors } = useForm();
    async function onSubmit(data) {
        let value = await dispatch(actRegister({
            first_name: data.name, last_name: '',
            email: data.email, password: data.password, role: 3, status: "active"
        }))
        if (value === '409') {
            props.code409()
        } else {
            props.code200()
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='m-8 flex flex-col justify-center items-center'>
                <div className="flex justify-between w-full xs:pt-5 xs:pb-5 md:p-5">
                    <p>Tạo tài khoản để sử dụng đầy đủ tính năng và tham gia cùng cộng đồng</p>
                </div>
                <div className='justify-between w-full  flex flex-col md:flex-row mb-8'>
                    <div className="w-full mr-6">
                        <label className="text-black font-semibold">Họ tên</label>
                        <div className="box-border mt-2">
                            <input ref={register({ required: "Không được để trống trường!" })} name="name" className="px-6 py-2 w-full border border-gray-400 h-12 rounded-lg" type="text" placeholder="Nhập họ tên của bạn" />
                        </div>
                        {errors.name && <span className="text-red-500 italic text-xs">{errors.name.message}</span>}
                    </div>
                    <div className="w-full  ">
                        <label className="text-black font-semibold">Email</label>
                        <div className="box-border mt-2 ">
                            <input ref={register({
                                required: "Không được để trống trường!",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Sai định dạng email!"
                                }
                            })} name="email" className="px-6 py-2 w-full border border-gray-400 h-12 rounded-lg" type="text" placeholder="Nhập email của bạn" />
                        </div>
                        {errors.email && <span className="text-red-500 italic text-xs">{errors.email.message}</span>}
                    </div>
                </div>
                <div className='flex justify-between w-full  flex-col md:flex-row mb-8'>
                    <div className="w-full mr-6">
                        <label className="text-black font-semibold">Mật khẩu</label>
                        <div className=" flex justify-center items-center w-full  h-12 rounded-lg mt-2 relative">
                            <input ref={register({ required: "Không được để trống trường!" })} name="password" className="w-full px-5 border border-gray-400 h-12 relative rounded-lg" type={showPass.pass ? 'text' : 'password'} placeholder="Nhập mật khẩu" />
                            <img src={showPass.pass ? "../img/ShowShape.png" : "../img/Shape.png"} onClick={() => setShowPass({ ...showPass, pass: !showPass.pass })} className="w-6 h-4 mx-3 absolute right-0 mr-4 bg-gray-100 cursor-pointer" />
                        </div>
                        {errors.password && <span className="text-red-500 italic text-xs">{errors.password.message}</span>}
                    </div>
                    <div className="w-full ">
                        <label className="text-black font-semibold">Nhập lại mật khẩu</label>
                        <div className="flex justify-center items-center  w-full  rounded-lg mt-2 relative">
                            <input ref={register({
                                required: "Không được để trống trường!",
                                validate: {
                                    passCheck: value => value === watch('password')
                                },
                            })} name="password_again" className="w-full px-5 relative border border-gray-400 h-12 rounded-lg" type={showPass.checkPass ? 'text' : 'password'} placeholder="Nhập lại mật khẩu" />
                            <img src={showPass.checkPass ? "../img/ShowShape.png" : "../img/Shape.png"} onClick={() => setShowPass({ ...showPass, checkPass: !showPass.checkPass })} className="w-6 h-4 mx-3 absolute right-0 mr-4 bg-gray-100 cursor-pointer" />
                        </div>
                        {errors.password_again && <span className="text-red-500 italic text-xs">{errors.password_again.message}</span>}
                        {errors.password_again?.type === 'passCheck' && <span className="text-red-500 italic text-xs">Mật khẩu phải trùng nhau!</span>}
                    </div>
                </div>
                <div className=" mb-12 w-full">
                    <div className="flex  items-center">
                        <input ref={register({ required: "Bạn chưa đồng ý!" })} name="check_Ido" type="checkbox" className='w-10 h-10 md:h-5 sm:w-5 mr-3' />
                        <span className='font-base'>Tôi đồng ý với <span className="text-blue-600">  &nbsp;Chính sách bảo mật  &nbsp;</span> và <span className="text-blue-600"> &nbsp;Điều khoản&nbsp;</span>của Đồng hành cùng bạn đọc</span>
                        <br />

                    </div>
                    <div className="flex w-full mb-12 items-center">
                        {errors.check_Ido && <span className="text-red-500 italic text-xs">{errors.check_Ido.message}</span>}
                    </div>
                </div>

                <button type="submit" className='bg-blue-600 text-lg rounded-lg w-64 h-12 text-white mb-5'>Đăng ký</button>
            </div>
        </form >
    );
});

export default Register;