import React, { useState } from "react";
import ProductList from "../Products/ProductList";
import { useParams } from "react-router-dom";
import { useGSAP } from "@gsap/react";


function Detail(){

    const a = document.querySelector("span")

    const [qty,setQty] = useState(0);

    function inc(){
        if(qty>=15){
            a.innerText = "Max Limit"
        }
        else
        setQty(qty+1)
    }
    
    function dec(){
        if(qty<=0){
            a.innerText = "Oops !"
        }
        else
        setQty(qty-1)
    }

    let {id} = useParams();
    console.log(id)

    return(
        <>
        {ProductList.map((x)=>{
            if(id == x.id)
                return(
        
            <div className="boxs w-full mt-12 flex justify-center">
                <div className="prt1 mr-5 w-2/5 h-auto">
                    <img className="opacity-95" src={x.img} alt="" />
                </div>
                <div className="prt2 ml-5 w-2/5 h-auto">
                    <h1 className="text-white text-4xl m-7 font-semibold">{x.name}</h1>
                    <h1 className="text-white text-2xl m-9 font-mono">{x.mrp}</h1>
                    <div className="mt-9 text-white px-6">
                    <button onClick={dec} className="pr-10 text-xl">-</button><span className="px-5 text-xl">Qty : {qty}</span><button onClick={inc} className="pl-5 text-xl">+</button>
                    </div>
                    <h1 className="text-white text-xl mb-6 mt-14 ml-7 font-bold">Select Size</h1>

                    

                    <div className="flex text-white font-semibold justify-center flex-wrap">
                    <button className="hover:bg-white duraction-500 hover:scale-100 duraction-200 hover:text-black focus:bg-white duration-700 focus:text-black w-32 m-2 h-12 outline-double">UK 6</button>
                    <button className="hover:bg-white duraction-500 hover:scale-100 duraction-200 hover:text-black focus:bg-white duration-700 focus:text-black w-32 m-2 h-12 outline-double">UK 7</button>
                    <button className="hover:bg-white duraction-500 hover:scale-100 duraction-200 hover:text-black focus:bg-white duration-700 focus:text-black w-32 m-2 h-12 outline-double">UK 7.5</button>
                    <button className="hover:bg-white duraction-500 hover:scale-100 duraction-200 hover:text-black focus:bg-white duration-700 focus:text-black w-32 m-2 h-12 outline-double">UK 8</button>
                    <button className="hover:bg-white duraction-500 hover:scale-100 duraction-200 hover:text-black focus:bg-white duration-700 focus:text-black w-32 m-2 h-12 outline-double">UK 9</button>
                    <button className="hover:bg-white duraction-500 hover:scale-100 duraction-200 hover:text-black focus:bg-white duration-700 focus:text-black w-32 m-2 h-12 outline-double">UK 11</button>
                    </div>
                    <div className="flex mt-14 text-2xl text-white font-bold justify-center">
                        <button className="borfer-solid border-2 hover:border-black outline-none rounded-md w-48 h-12 hover:bg-orange-400 hover:text-black duration-300 hover:font-normal">Add To Bag</button>
                    </div>
                </div>
            </div>
            )
        })}
        </>
    )
}

export default Detail