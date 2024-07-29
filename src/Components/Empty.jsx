import React from 'react'
import { Link } from 'react-router-dom'

export function Empty() {
    

    return (
        <>
            <div className='w-screen h-screen bg-gray-900 flex justify-center items-center'>
                <img src="./cart.png" alt="" />
                <div className='absolute text-xl font-bold text-yellow-100 bottom-44'>
                <h1>Your Cart Is Empty</h1>
                </div>
            </div>
        </>
    )
}
