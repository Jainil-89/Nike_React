import React, { useEffect } from "react";
import Cnav from "../cnav";
import { Link } from "react-router-dom";
import Detail from "./Detail";
import ProductList from "../Products/ProductList"
import Cloth from "../Products/cloths"
import { Footer } from "../Footer";
import '../Shoes.css'
import { ScrollTrigger } from "gsap/ScrollTrigger";


function Clothing(){

    function ScrollToTopOnMount() {
        useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
      
        return null;
      }
      
      ScrollToTopOnMount()


    return(
        <>
            <Cnav />

            <div className="box overflow-hidden mt-36 w-full h-auto justify-evenly flex flex-wrap">
                
                {Cloth.map((x)=>{
                    if(x.id < 25)
                    return(
                       <Link to={`/clothing/Detail/${x.id}`}>
                        <div className="img-box hover:scale-110 duration-500 max-[630px]:ml-36 w-72 sm:w-72 h-auto mt-10">
                         <img className="opacity-80 hover:shadow-2xl hover:shadow-black" src={x.img} alt="" />
                         <h1 className="nme pt-10 text-white text-md max-[630px]:-ml-4 text-xl sm:text-center">{x.name}</h1>
                         <h1 className="mrp pt-3 text-sm text-md max-[630px]:-ml-2 text-white sm:text-center">MRP - ₹   {x.mrp}</h1>
                         </div>
                         </Link>
                    )
                })}
            </div>
            <Footer />
        </>
    )

}

export default Clothing