import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export function Signup() {

    const [pass,setPass ] = useState("")

    function pas(e){

        const p1 = document.querySelector(".p1").value;
        const p2 = document.querySelector(".p2");

        setPass(p1)
        
        
    }

    

    return (
        <>
           <>
            <div className='w-screen h-screen max-[419px]:bg-neutral-800 bg-zinc-950 items-center flex justify-center'>
            <h1 className='absolute top-4 text-white text-3xl font-semibold text-center'>Sign Up</h1>
                <div className='w-4/12 max-[825px]:w-9/12 max-[1050px]:w-6/12  mt-8 h-4/5 bg-neutral-800'>
                    <div className='flex justify-center'>
                        <img className='w-20' src="/nike(1).png" alt="" />
                    </div>
                    <div className='flex justify-center mt-3'>
                        <input className='p-5 border-b-2 border-zinc-700 bg-transparent text-white outline-none w-72 h-8' type="text" name="" id="" placeholder='Username' />
                    </div>
                    <div className='flex justify-center mt-2'>
                        <input className='p-5 border-b-2 border-zinc-700 bg-transparent text-white outline-none w-72 h-8' type="email" name="" id="" placeholder='Email' />
                    </div>
                    <div className='flex justify-center mt-2'>
                        <input onChange={pas} className='p1 p-5 border-b-2 border-zinc-700 bg-transparent text-white outline-none w-72 h-8' type="password" name="" id="" placeholder='Create Password' />
                    </div>
                    <div className='flex justify-center mt-2'>
                        <input className='p2 p-5 border-b-2 border-zinc-700 bg-transparent text-white outline-none w-72 h-8' type="password" name="" id="" placeholder='Confirm Password' value={pass} />
                    </div>
                    <div className='flex justify-center text-white mt-8'>
                        <button className='px-5 hover:scale-105 duration-200  w-52 h-9 bg-blue-600'>Sign Up</button>
                    </div>
                    <div className='flex text-white font-bold justify-center mt-5'>
                        <h1 className='border-b-2 pb-2 border-gray-600'>OR</h1>
                    </div>
                    <div className='flex justify-center text-white mt-8'>
                        <button className='px-5 flex hover:scale-105 duration-200 w-72 items-center h-9 bg-blue-600'><img className='w-5 mx-2 h-5' src="/google.png" alt="" /> <h1>Create Account with Google</h1></button>
                    </div>
                    <div className='flex justify-center text-white mt-12'>
                        <h1 className='text-lg font-semibold'>Already have an Account ? <Link className='text-blue-500' to="/Login">Log In</Link></h1>
                    </div>
                </div>
            </div>
        </> 
        </>
    )
}
