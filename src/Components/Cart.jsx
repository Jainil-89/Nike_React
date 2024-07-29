import React,{useContext} from 'react'
import { CartContext } from '../Context/Cart'
import "../Components/Cart.css"
import { Empty } from './Empty';
import { Link } from 'react-router-dom';


export function Cart() {

    const cart = useContext(CartContext);

    const isEmpty = cart.items.length === 0;
    
    
    const subtotal = cart.items.reduce((a,b)=> a + b.price,0);
    const total = subtotal + 1250;

    return (

        <>
            {isEmpty ?
             (<Empty />)
            
        : (
            
            <div className='w-screen max-[835px]:flex-col flex items-center h-screen bg-violet-500'>
              
                <div className='w-4/6 max-[835px]:w-screen max-[835px]:h-fit h-5/6 overflow-scroll shadow-2xl shadow-black overflow-x-hidden bg-violet-500'>
                    {cart && cart.items.map((i)=>{
                        return(
                            <div className='flex max-[535px]:block max-[483px]:text-center max-[483px]:mx-28 max-[535px]:mx-44 items-center justify-evenly'>
                            <div className='w-48 my-5 h-48'>
                                <img src={i.img} alt="" />
                            </div>

                            <div className='text-lg max-[483px]:text-sm max-[483px]:font-bold font-semibold'>
                                <h1>{i.name}</h1>
                            </div>

                            <div>
                                <h1>MRP : ₹  {i.price}</h1>
                            </div>
                            </div>
                        )
                    })}
                </div>




                <div className='w-4/12 max-[835px]:w-screen max-[835px]:mt-24 h-5/6 bg-violet-500'>
                            <div className='m-7 font-semibold text-3xl'>
                                <h1>Summary</h1>
                            </div>

                            <div className='m-7 font-semibold'>
                                <h1 className='my-3'>Subtotal : ₹  {subtotal}.00</h1>
                                <h1 className=' border-b-2 pb-5 border-black'>Estimated Delivery & Handling : ₹ 1 250.00</h1>
                            </div>
                            <div className='m-7'>
                                <h1 className='text-2xl font-bold border-b-2 pb-5 border-black'>Total : ₹  {total}.00</h1>
                            </div>
                            <div className=' h-16 flex text-xl text-white justify-center my-24'>
                                <button className='w-48 rounded-xl hover:scale-105 duration-500 bg-black'><Link to="/">Place Order</Link></button>
                            </div>
                        
                
                </div>


            </div>






        )}
        </>
    )
}
