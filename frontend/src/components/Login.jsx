import React from 'react'
import loginImg from '../components/assets/xsetlogin.png'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const Auth = async(e) => {
        e.preventDefault();
        try{
            await axios.post('http://localhost:5000/login',{
                email: email,
                password: password
            });
            navigate("/")
        }catch (error) {
            if(error.response){
                setMsg(error.response.data.msg);
            }

        }
    }
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
    <div className='hidden sm:block'>
        <img className='w-full h-full object-cover' src={loginImg} alt="Login" />
    </div>

    <div className='bg-gray-800 flex flex-col justify-center'>
        <form onSubmit={Auth} className='max-w-[400px] w-11/12 mx-auto rounded-lg bg-gray-900 p-8'>
            <p className='text-center text-white'>{msg}</p>
            <h2 className='text-4xl text-white font-bold text-center'>LOGIN</h2>
            <div className='flex flex-col text-gray-400 py-2'>
                <label>Email</label>
                <input 
                    className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' 
                    type="text" 
                    autoComplete='current-username'
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className='flex flex-col text-gray-400 py-2'>
                <label>Password</label>
                <input 
                    className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' 
                    type="password" 
                    autoComplete='current-password'
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
            </div>
            <div className='flex justify-between text-gray-400 py-2'>
                <label className='flex items-center'>
                    <input className='mr-2' type="checkbox" /> 
                    Remember Me
                </label>
                <p className='cursor-pointer'>Forgot Password</p>
            </div>
            <button className='w-full my-5 py-2 bg-teal-500 shadow-lg hover:shadow-teal-500/50 text-white font-semibold rounded-lg'>LOGIN</button>
        </form>
    </div>
</div>
  )
}