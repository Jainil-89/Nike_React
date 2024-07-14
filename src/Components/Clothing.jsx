import React from "react";
import Cnav from "../cnav";
import { Link } from "react-router-dom";
import Detail from "./Detail";
import ProductList from "../Products/ProductList"
import Cloth from "../Products/cloths"
// import Cnav from "../cnav";
import '../Shoes.css'
import { ScrollTrigger } from "gsap/ScrollTrigger";


function Clothing(){


    return(
        <>
            <Cnav />

            <div className="box mt-20 w-full h-auto justify-evenly flex flex-wrap">
                
                {Cloth.map((x)=>{
                    return(
                       <Link to={`/clothing/Detail/${x.id}`}>
                        <div className="img-box hover:scale-110 duration-500 max-[630px]:ml-36 w-72 sm:w-72 h-auto mt-10">
                         <img className="opacity-80 hover:shadow-2xl hover:shadow-black" src={x.img} alt="" />
                         <h1 className="nme pt-10 text-white text-md max-[630px]:-ml-4 text-xl sm:text-center">{x.name}</h1>
                         <h1 className="mrp pt-3 text-sm text-md max-[630px]:-ml-2 text-white sm:text-center">{x.mrp}</h1>
                         </div>
                         </Link>
                    )
                })}
            </div>
        </>
    )

}

export default Clothing