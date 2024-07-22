import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

export function Footer() {
    

    return (
        <>
           <div className='w-full bg-black border-t-2 mt-20'>
                <div className='cont flex justify-evenly mt-10'>
                    <div className="logo text-white">
                        <img className='w-20 ml-5' src="/nike(1).png" alt="" />
                        <h1 className='text-3xl mt-5 font-semibold'>Just Do It .</h1>
                    </div>

                    <div className='men text-white'>
                        <ul className='text-center'>
                            <h1 className='text-xl p-3 font-semibold'><li><Link to="/Men">Men</Link></li></h1>
                            <li className='p-2'><Link to="/Men/Shoes">Shoes</Link></li>
                            <li className='p-2'><Link to="/Men/clothing">Clothing</Link></li>
                            <li className='p-2'><Link to="/Men/Gear">Gears</Link></li>
                        </ul>
                    </div>

                    <div className='women text-white'>
                        <ul className='text-center'>
                            <h1 className='text-xl p-3 font-semibold'><li><Link to="/Women">Women</Link></li></h1>
                            <li className='p-2'><Link to="/Women/Shoes">Shoes</Link></li>
                            <li className='p-2'><Link to="/Women/clothing">Clothing</Link></li>
                            <li className='p-2'><Link to="/Women/Gear">Gears</Link></li>
                        </ul>
                    </div>

                    <div className='kid text-white'>
                        <ul className='text-center'>
                            <h1 className='text-xl p-3 font-semibold'><li><Link to="/Kid">Kids</Link></li></h1>
                            <li className='p-2'><Link to="/Kid/Shoes">Shoes</Link></li>
                            <li className='p-2'><Link to="/Kid/clothing">Clothing</Link></li>
                            <li className='p-2'><Link to="/Kid/Gear">Gears</Link></li>
                        </ul>
                    </div>

                </div>

                <div className='flex justify-center mt-24'>
                    <div className='w-3/5 h-px bg-red-800'>.</div>
                </div>

                <div className='mt-20'>
                    <h1 className='text-white text-center text-2xl'>Support</h1>
                    <div className='flex justify-center'>
                        <ul className='flex mt-5'>
                            <li className='w-12 h-12'><a href="https://www.instagram.com/jainil__borisagar/?igsh=MW00d2I2cWMzOW1teQ%3D%3D"><img src="/instagram.png" alt="" /></a></li>
                            <li className='w-12 h-12'><a href="https://in.linkedin.com/in/jainil-borisagar-72a2a4242"><img src="/linkedin.png" alt="" /></a></li>
                            <li className='w-11 mt-1 pl-1 h-11'><a href="https://x.com/Jainil089?t=Zawm-_ClFZvVRBQiPIBXhw&s=09&mx=2"><img src="/twitter.png" alt="" /></a></li>
                            <li className='w-12 h-12'><a href="https://github.com/Jainil-89"><img src="/github.png" alt="" /></a></li>
                        </ul>
                        
                    </div>
                    <div className='text-white text-lg text-center mt-5'>
                            <h1 className='pb-8'>&#169;Copyright. All rights reserved</h1>
                    </div>
                </div>
            </div> 
        </>
    )
}
