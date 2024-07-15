import React from 'react'
import './Footer.css'

export function Footer() {
    

    return (
        <>
           <div className='w-full bg-black border-t-2 mt-16'>
                <div className='cont flex justify-evenly mt-10'>
                    <div className="logo text-white">
                        <img className='w-20 ml-5' src="/nike(1).png" alt="" />
                        <h1 className='text-3xl mt-5 font-semibold'>Just Do It .</h1>
                    </div>

                    <div className='men text-white'>
                        <ul className='text-center'>
                            <h1 className='text-xl p-3 font-semibold'><li><a href="/Men">Men</a></li></h1>
                            <li className='p-2'><a href="/Men/Shoes">Shoes</a></li>
                            <li className='p-2'><a href="/Men/clothing">Clothing</a></li>
                            <li className='p-2'><a href="/Men/Gear">Gears</a></li>
                        </ul>
                    </div>

                    <div className='women text-white'>
                        <ul className='text-center'>
                            <h1 className='text-xl p-3 font-semibold'><li><a href="/Men">Women</a></li></h1>
                            <li className='p-2'><a href="/Men/Shoes">Shoes</a></li>
                            <li className='p-2'><a href="/Men/clothing">Clothing</a></li>
                            <li className='p-2'><a href="/Men/Gear">Gears</a></li>
                        </ul>
                    </div>

                    <div className='kid text-white'>
                        <ul className='text-center'>
                            <h1 className='text-xl p-3 font-semibold'><li><a href="/Men">Kids</a></li></h1>
                            <li className='p-2'><a href="/Men/Shoes">Shoes</a></li>
                            <li className='p-2'><a href="/Men/clothing">Clothing</a></li>
                            <li className='p-2'><a href="/Men/Gear">Gears</a></li>
                        </ul>
                    </div>

                </div>

                <div className='mt-32'>
                    <h1 className='text-white text-center text-2xl'>Support</h1>
                    <div className='flex justify-center'>
                        <ul className='flex mt-5'>
                            <li className='w-12 h-12'><a href=""><img src="/instagram.png" alt="" /></a></li>
                            <li className='w-12 h-12'><a href=""><img src="/linkedin.png" alt="" /></a></li>
                            <li className='w-11 mt-1 pl-1 h-11'><a href=""><img src="/twitter.png" alt="" /></a></li>
                        </ul>
                        
                    </div>
                    <div className='text-white text-lg text-center mt-5'>
                            <h1>&#169;Copyright. All rights reserved</h1>
                    </div>
                </div>
            </div> 
        </>
    )
}
