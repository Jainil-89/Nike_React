import React from 'react'
import { Link } from 'react-router-dom'

export function Login() {
    

    return (
        <>
            <div className='w-screen h-screen max-[419px]:bg-neutral-800 bg-zinc-950 items-center flex justify-center'>
            <h1 className='absolute top-4 text-white text-3xl font-semibold text-center'>Login</h1>
                <div className='w-4/12 max-[825px]:w-9/12  mt-8 h-4/5 bg-neutral-800'>
                    <div className='flex justify-center'>
                        <img className='w-20' src="/nike(1).png" alt="" />
                    </div>
                    <div className='flex justify-center mt-5'>
                        <input className='p-5 border-b-2 border-zinc-700 bg-transparent text-white outline-none w-72 h-8' type="email" name="" id="" placeholder='Email' />
                    </div>
                    <div className='flex justify-center mt-5'>
                        <input className='p-5 border-b-2 border-zinc-700 bg-transparent text-white outline-none w-72 h-8' type="password" name="" id="" placeholder='Password' />
                    </div>
                    <div className='flex my-3 justify-center'>
                        <Link className='text-blue-400' to="">Forgot Password ?</Link>
                    </div>
                    <div className='flex justify-center text-white mt-14'>
                        <button className='px-5 hover:scale-105 duration-200  w-52 h-9 bg-blue-600'>LogIn</button>
                    </div>
                    <div className='flex text-white font-bold justify-center mt-12'>
                        <h1 className='border-b-2 pb-2 border-gray-600'>OR</h1>
                    </div>
                    <div className='flex justify-center text-white mt-12'>
                        <h1 className='text-lg font-semibold'>Don't Have an Account ? <Link className='text-blue-500' to="/Signup">Sign Up</Link></h1>
                    </div>
                </div>
            </div>
        </>
    )
}
