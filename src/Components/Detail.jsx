import React, { useEffect, useState } from "react";
import ProductList from "../Products/ProductList";
import { useParams } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import "./Detail.css"
import { Footer } from "../Footer";
import { useContext } from "react";
import { CartContext } from "../Context/Cart";


function Detail(){

    function ScrollToTopOnMount() {
        useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
      
        return null;
      }
      
      ScrollToTopOnMount()

    const a = document.querySelector("span")

    const [qty,setQty] = useState(1);

    function inc(){
        if(qty>=15){
            // a.innerText = "Max Limit"
            setQty(15)
        }
        else
        setQty(qty+1)
    }
    
    function dec(){
        if(qty<=0){
            // a.innerText = "Oops !"
            setQty(0)
        }
        else
        setQty(qty-1)
    }

    let {id} = useParams();
    console.log(id)

    const cart = useContext(CartContext);
    
    
    function added(){
        const cls = document.querySelector(".cls");
        cls.style.display = "block";
        setTimeout(()=>{
            cls.style.display = "none";
        },3000)
    }


    return(
        <>
        
        {ProductList.map((x)=>{
            if(id == x.id)
                return(
        
            <div className="boxs w-full mt-12 max-[1024px]:flex-col max-[1024px]:items-center flex justify-center">
                <div className="prt1 mr-5 w-2/5 h-auto">
                    <img className="max-[431px]:ml-5 opacity-95" src={x.img} alt="" />
                </div>
                <div className="prt2 max-[1024px]:w-2/3 max-[1024px]:text-center max-[1024px]:mt-16 ml-5 w-2/5 h-auto">
                    <h1 className="text-white max-[711px]:text-lg text-4xl m-7 font-semibold">{x.name}</h1>
                    <h1 className="text-white text-2xl m-9 max-[711px]:text-lg font-mono"> ₹  {x.mrp}</h1>
                    <div className="mt-9 text-white px-6">
                    <button onClick={dec} className="pr-10 text-xl">-</button><span className="px-5 text-xl">Qty : {qty}</span><button onClick={inc} className="pl-5 text-xl">+</button>
                    </div>
                    <h1 className="text-white text-xl mb-6 mt-14 max-[431px]:ml-2 ml-7 font-bold">Select Size</h1>

                    

                    <div className="flex text-white font-semibold justify-center flex-wrap">
                    <button className="hover:bg-white duraction-500 hover:scale-100 duraction-200 hover:text-black focus:bg-white duration-700 focus:text-black max-[431px]:w-20 max-[431px]:h-8 border-solid border-2 outline-none w-32 m-2 h-12 outline-double">UK 6</button>
                    <button className="hover:bg-white duraction-500 hover:scale-100 duraction-200 hover:text-black focus:bg-white duration-700 focus:text-black max-[431px]:w-20 max-[431px]:h-8 border-solid border-2 outline-none w-32 m-2 h-12 outline-double">UK 7</button>
                    <button className="hover:bg-white duraction-500 hover:scale-100 duraction-200 hover:text-black focus:bg-white duration-700 focus:text-black max-[431px]:w-20 max-[431px]:h-8 border-solid border-2 outline-none w-32 m-2 h-12 outline-double">UK 7.5</button>
                    <button className="hover:bg-white duraction-500 hover:scale-100 duraction-200 hover:text-black focus:bg-white duration-700 focus:text-black max-[431px]:w-20 max-[431px]:h-8 border-solid border-2 outline-none w-32 m-2 h-12 outline-double">UK 8</button>
                    <button className="hover:bg-white duraction-500 hover:scale-100 duraction-200 hover:text-black focus:bg-white duration-700 focus:text-black max-[431px]:w-20 max-[431px]:h-8 border-solid border-2 outline-none w-32 m-2 h-12 outline-double">UK 9</button>
                    <button className="hover:bg-white duraction-500 hover:scale-100 duraction-200 hover:text-black focus:bg-white duration-700 focus:text-black max-[431px]:w-20 max-[431px]:h-8 border-solid border-2 outline-none w-32 m-2 h-12 outline-double">UK 11</button>
                    </div>
                    <div onClick={added} className="flex mt-14 text-2xl text-white font-bold justify-center">
                       {/*<Link to={`/Detail/cart/${x.id}`}>*/} <button onClick={()=>cart.setItems([...cart.items,{name:x.name,price:x.mrp,img:x.img}])} className="borfer-solid border-2 hover:border-black outline-none rounded-md w-48 h-12 hover:bg-orange-400 hover:text-black duration-300 max-[431px]:w-28 max-[431px]:text-sm max-[431px]:h-10 hover:font-normal">Add To Bag</button>{/*</Link>*/}
                    </div>
                </div>
            </div>
            )
        })}
        <div className="cls top-5 right-5 hidden absolute h-40 w-56">
            <div className="bg-black h-8 text-center py-1 text-white">Added to Cart <i class="fa-solid fa-check px-2 text-lg text-green-500"></i></div>
            <div className="loader w-56"></div>
        </div>
        <Footer />
        </>
    )
}

export default Detail