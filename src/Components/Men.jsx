import React from "react"
import Cnav from "../cnav"
import { Link } from "react-router-dom"
import { useGSAP } from "@gsap/react"
import gsap from 'gsap';
import Shoes from "./Shoes";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

function Men() {

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
                <h1 className="mt-10 text-4xl text-center md:text-3xl sm:text-center">Men</h1>
                <ul className="flex justify-center mt-7 md:text-xl">
                    <li className="p-5 mnl ">
                        <Link to="/Men/Shoes">Shoes</Link>
                    </li>
                    <li className="p-5 mnl">
                        <Link to="">Clothing</Link>
                    </li>
                    <li className="p-5 mnl">
                        <Link to="">Gear</Link>
                    </li>
                </ul>
            </div>

            <div className="vid overflow-hidden flex h-2/3 justify-center mt-40 ">
                <div className="w-4/5">
                    <video src="/men.mp4" autoPlay loop></video>
                </div>
            </div>

            <div className="ph overflow-hidden mt-44 sm:mt-80 w-full h-auto">
                <h1 className="ml-10 mb-20 text-white sm:text-3xl">Featured</h1>
                <div className="img-wrp flex text-2xl text-center text-white font-bold flex-wrap justify-evenly">
                    <div className="rj sm:w-96 w-64 hover:scale-110 duration-500 mb-16 h-auto p-10"><Link to="/Men/Shoes"><img src="https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/a3babaed-553e-4f7e-a3fd-422df398ae29/men-s-shoes-clothing-accessories.jpg" alt="" /></Link>Shoes</div>
                    <div className="rj sm:w-96 w-64 hover:scale-110 duration-500 mb-16 h-auto p-10 "><Link to="/Men/Shoes"><img src="https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/589e4f98-1759-4bc2-9a7e-e029aa0c5336/men-s-shoes-clothing-accessories.png" alt="" /></Link>Clothing</div>
                    <div className="rj sm:w-96 w-64 hover:scale-110 duration-500 mb-16 h-auto p-10 "><Link to="/Men/Shoes"><img src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_512,c_limit/d7198555-f836-4202-a2aa-7f2f96b17205/men-s-shoes-clothing-accessories.jpg" alt="" /></Link>Gear</div>
                </div>
            </div>


        </>
    )
}

export default Men