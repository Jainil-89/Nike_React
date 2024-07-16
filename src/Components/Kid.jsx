import React from "react"
import Cnav from "../cnav"
import { Link } from "react-router-dom"
import { useGSAP } from "@gsap/react"
import gsap from 'gsap';
import Shoes from "./Shoes";
import { Footer } from "../Footer";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

function Kid() {

    useGSAP(()=>{
        gsap.from(".rj",{
            opacity:0,
            x:-300,
            duration:0.6,
            scrollTrigger:{
                trigger:".img-wrp",
                pin:true,
                scrub:true,
                start:'top 60%',
                end:'top 90%',
                // markers:true
            }
        
        })
    })


    useGSAP(() => {
        const t = gsap.timeline()
        t.from("h1", {
            y: -300,
            opacity: 0,
            duration: 0.7
        })
        t.from(".mnl", {
            y: -50,
            opacity: 0,
            duration: 0.5,
            stagger: 0.3
        })
        t.from(".vid", {
            y: 300,
            opacity: 0,
            duration: 0.3
        })
    })


    return (
        <>
            <Cnav />
            <div className=".h sm:flex overflow-hidden m-5 justify-around text-white">
                <h1 className="mt-10 text-4xl text-center md:text-3xl sm:text-center">Kids</h1>
                <ul className="flex justify-center mt-7 md:text-xl">
                    <li className="p-5 mnl ">
                        <Link to="/Kid/Shoes">Shoes</Link>
                    </li>
                    <li className="p-5 mnl">
                        <Link to="/Kid/clothing">Clothing</Link>
                    </li>
                    <li className="p-5 mnl">
                        <Link to="/Kid/Gear">Gear</Link>
                    </li>
                </ul>
            </div>

            <div className="vid overflow-hidden flex h-2/3 justify-center mt-40 ">
                <div className="w-4/5">
                    <video src="/kid.mp4" autoPlay muted loop></video>
                </div>
            </div>

            <div className="ph overflow-hidden mt-44 sm:mt-80 w-full h-auto">
                <h1 className="ml-10 mb-20 text-white sm:text-3xl">Featured</h1>
                <div className="img-wrp flex text-2xl text-center text-white font-bold flex-wrap justify-evenly">
                    <div className="rj  w-80 h-96 hover:scale-110 duration-500 mb-16 p-10"><Link to="/Kid/Shoes"><img src="https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/6f3572f0-7b66-4b13-8cdb-0674c233c273/nike-kids.jpg" alt="" /></Link>Shoes</div>
                    <div className="rj  w-80 hover:scale-110 duration-500 mb-16 h-auto p-10 "><Link to="/Kid/Clothing"><img src="https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/f7053060-d40f-4ae1-a0d5-c89380c0acb4/nike-kids.jpg" alt="" /></Link>Clothing</div>
                    <div className="rj  w-80 hover:scale-110 duration-500 mb-16 h-auto p-10 "><Link to="/Kid/Gear"><img src="https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/24aa2c8c-15b1-4fd0-a54d-e0296ff093ec/nike-kids.png" alt="" /></Link>Gear</div>
                </div>
            </div>

        <Footer />

        </>
    )
}

export default Kid