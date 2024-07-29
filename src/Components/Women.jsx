import React, { useEffect } from "react"
import Cnav from "../cnav"
import { Link } from "react-router-dom"
import { useGSAP } from "@gsap/react"
import gsap from 'gsap';
import { Footer } from "../Footer";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

function Women() {

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

    function ScrollToTopOnMount() {
        useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
      
        return null;
      }
      
      ScrollToTopOnMount()


    return (
        <>
            <Cnav />
            <div className=".h sm:flex overflow-hidden m-5 justify-around text-white">
                <h1 className="mt-10 text-4xl text-center md:text-3xl sm:text-center">Women</h1>
                <ul className="flex justify-center mt-7 md:text-xl">
                    <li className="p-5 mnl ">
                        <Link to="/Women/Shoes">Shoes</Link>
                    </li>
                    <li className="p-5 mnl">
                        <Link to="/Women/clothing">Clothing</Link>
                    </li>
                    <li className="p-5 mnl">
                        <Link to="/Women/Gear">Gear</Link>
                    </li>
                </ul>
            </div>

            <div className="vid overflow-hidden flex h-2/3 justify-center mt-40 ">
                <div className="w-4/5">
                    <video src="/women.mp4" autoPlay muted loop></video>
                </div>
            </div>

            <div className="ph overflow-hidden mt-44 sm:mt-80 w-full h-auto">
                <h1 className="ml-10 mb-20 text-white sm:text-3xl">Featured</h1>
                <div className="img-wrp flex text-2xl text-center text-white font-bold flex-wrap justify-evenly">
                    <div className="rj  w-72 hover:scale-110 duration-500 mb-16 h-auto p-10"><Link to="/Women/Shoes"><img src="https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/af9a1a94-e4f4-42f0-bc63-18508fd73f60/women-s-shoes-clothing-accessories.jpg" alt="" /></Link>Shoes</div>
                    <div className="rj  w-72 hover:scale-110 duration-500 mb-16 h-auto p-10 "><Link to="/Women/Clothing"><img src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_512,c_limit/180563ad-2d9d-4420-9f0e-b1e4ac7797ae/women-s-shoes-clothing-accessories.jpg" alt="" /></Link>Clothing</div>
                    <div className="rj  w-72 hover:scale-110 duration-500 mb-16 h-auto p-10 "><Link to="/Women/Gear"><img src="https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/6d32e9f3-781f-4125-aae3-8ac908dedbec/women-s-shoes-clothing-accessories.png" alt="" /></Link>Gear</div>
                </div>
            </div>

        <Footer />

        </>
    )
}

export default Women