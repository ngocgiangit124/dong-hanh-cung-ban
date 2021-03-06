import React, { memo, useState } from 'react';
import * as Types from '../../store/constants/ActionType';
import { useDispatch } from 'react-redux'
import { actGetToken } from '../../store/action/login'
const Login = memo((props) => {
    const dispatch = useDispatch()
    const [state, setState] = useState({
        email: '',
        password: ''
    })
    const [rememberData, setRememberData] = useState(false)
    const [showPass, setShowPass] = useState(false)

    const login = () => {
        if (state.email === '') {
            alert('email null')
            return
        }
        if (state.password === '') {
            alert('pass null')
            return
        }
        if (dispatch(actGetToken(state, rememberData))) props.onClose()
    }

    return (
        <div className='m-8 flex flex-col justify-center items-center '>
            <div className="flex justify-between w-full  py-5">
                <h3>Đăng nhập với email</h3>
            </div>
            <div className='flex justify-between w-full flex-col md:flex-row'>
                <div className="w-full mr-6">
                    <label className="text-black font-semibold">Email</label>
                    <div className="box-border mt-2">
                        <input className="px-6 py-2 w-full border border-gray-400 h-12 rounded-lg" type="text" placeholder="Nhập email" value={state.email} onChange={(e) => setState({ ...state, email: e.target.value })} />
                    </div>
                </div>
                <div className="w-full">
                    <label className="text-black font-semibold" >Mật khẩu</label>
                    <div className="relative flex justify-center items-center  w-full  h-12 rounded-lg mt-2 ">
                        <input className=" w-full py-2 h-12 border border-gray-400 relative  px-5 rounded-lg" type={showPass ? 'text' : 'password'} placeholder="Nhập mật khẩu" value={state.password} onChange={(e) => setState({ ...state, password: e.target.value })} />
                        <img src={showPass ? "../img/ShowShape.png" : "../img/Shape.png"} className="w-6 h-4  absolute right-0 mr-4 bg-gray-100 cursor-pointer" onClick={() => setShowPass(!showPass)} />
                    </div>
                    <div className="float-right my-2 cursor-pointer text-blue-600">Quên mật khẩu</div>
                </div>
            </div>

            <div className="flex items-center w-full  mb-6 ">
                <input type="checkbox" className='mr-3 w-5 h-5 rounded-xl  bg-blue-600' onClick={(e) => setRememberData(e.target.checked)} />
                <span className='font-base'>Ghi nhớ tài khoản</span>
            </div>
            <button type="text" className='bg-blue-600 text-lg rounded-lg w-64 h-12 text-white mb-8' onClick={() => login()}>Đăng nhập</button>
            <hr className="w-full border-1" />
            <div className="text-base m-5">
                Đăng nhập với tài khoản khác
            </div>
            <div className='bg-blue-600 rounded-lg w-64 h-12 text-white mb-5 flex items-center cursor-pointer'>
                <div className="flex items-center">
                    <img className="w-10 h-10" src="../img/fbPath.png" className="mx-5" />
                    <span className="text-base">Đăng nhập bằng Facebook</span>
                </div>
            </div>
            <div className='bg-white rounded-lg w-64 h-12 text-black border-gray-500 border-2 mb-5 flex items-center cursor-pointer'>
                <div className="flex items-center">
                    <img className="w-10 h-10" src="../img/search.png" className="mx-5" />
                    <span className="text-base">Đăng nhập bằng Google</span>
                </div>
            </div>
        </div>
    );
});

export default Login;