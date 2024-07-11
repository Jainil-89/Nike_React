import { useGSAP } from "@gsap/react"
import { useState } from "react"


function Mrp(){

    
    const [qty,setqty] = useState(1)
 
    function dec(){
        if(qty<=0){
            crt.innerHTML = "Add To Cart"
            btn1.style.opacity = 0
            btn2.style.opacity = 0
        }
        else{
        
        setqty(qty-1)
        crt.innerHTML = `Qty : ${qty}`
        }
   }

   function inc(){
    if(qty>15){
        crt.innerHTML = "Max Limit"
    }
    else{
       setqty(qty+1)
       crt.innerHTML = `Qty : ${qty}`
    }
    
   }
   

    let btn1 = document.querySelector(".btn1")
    let btn2 = document.querySelector(".btn2")
    let crt = document.querySelector(".crt")

    
    function ct(){

        
        btn1.style.opacity = 1;
        btn2.style.opacity = 1;
        crt.innerHTML = "Added"

    }
    

    
    return(


        <>
        <div className="mrp mt-40 w-96 ml-32 text-white h-auto text-3xl font-semibold">
            <h1 className="text-3xl p-5">Air Jordan 1 Low</h1>
            <h1 className="text-2xl pl-9">Men's Shoes -  ₹ 9899</h1>
            <div className="clr w-8 h-8 rounded-full bg-blue-500 cursor-pointer border-solid border-2 border-white hover:scale-110 mt-10 ml-48"></div>
            <button onClick={dec} className="btn1 opacity-0">-</button>
            <button onClick={ct} className="crt text-lg w-48 m-9 ease-out duration-700 h-10 bg-gray-500 cursor-pointer hover:bg-orange-700 hover:rounded-md">Add to Cart</button>
            <button onClick={inc} className="btn2 opacity-0">+</button>
          </div>
        </>

    )

}

export default Mrp