import { useGSAP } from "@gsap/react";
import React from "react";
import { Link } from "react-router-dom";
import gsap from 'gsap';

function Cnav(){

    useGSAP(()=>{
        const t = gsap.timeline()
        t.from(".cnav img",{
            scale : 3,
            opacity : 0,
            duration : 0.5
        })

        t.from(".lnk",{
            x:30,
            opacity:0,
            duration:0.6
        })
    })


    return(
        <>
            <div className="cnav flex justify-center">
                <img className='w-28 h-auto mr-6 fill-white-900' src="./src/assets/nike(1).png" alt="" />
            </div>
                <Link className="lnk overflow-hidden absolute right-10 sm:text-xl -mt-20 text-white" to="/">Home</Link>
        </>
        
    )
}

export default Cnav