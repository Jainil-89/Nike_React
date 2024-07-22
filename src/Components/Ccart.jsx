import wcl from "../Products/wcl";
import { useParams } from "react-router-dom";

function Ccart() {
    
    let ct = useParams();
    let Id = ct.id;
    

    return (
        <>
            {wcl.map((x)=>{

                if(Id == x.id){
                    return(
                        <div className='w-full max-[983px]:flex-col max-[983px]:items-center flex justify-around h-screen bg-slate-800'>

                <div className='flex max-[627px]:flex-col max-[627px]:text-center max-[420px]:text-xl max-[627px]:items-center  mt-56 text-white'>
                    <div className='w-56 h-56'><img src={x.img} alt="" /></div>

                    <div className='m-9 '>
                        <p className='p-3 font-bold text-2xl'>{x.name}</p>
                        <p className='p-3 text-xl'>{x.mrp}</p>
                    </div>
                </div>

                <div className='text-white  bg-slate-800 max-[983px]:text-center mt-52'>
                    <h1 className='text-3xl max-[639px]:text-xl mb-7 font-bold'>Summary</h1>
                    <span className='text-xl max-[639px]:text-sm font-semibold pb-5'>{x.mrp}</span><br />
                    <span className='text-xl border-b-2 max-[639px]:text-sm pb-7 border-slate-500 font-semibold'>Estimeted Delivery & Handling :</span><span className='text-xl font-semibold'>  ₹ 0</span><br />
                    <h1 className='mt-10 text-xl font-medium'>Total   {x.mrp}</h1>
                        
                    <div className='flex bg-slate-800 w-full max-[983px]:w-screen pt-14 justify-center mt-10 text-xl font-semibold'>
                    <button className='w-40 rounded-xl bg-zinc-900 hover:scale-110 duration-500 h-14'>Place Order</button>
                    </div>
                </div>


            </div>
                    )
                }

            })}
               
        </>
    )

}

export default Ccart
