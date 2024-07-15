
function Card({img,name,mrp}){

    return(

        <>
            
                <div className="b hover:scale-95 duration-500 w-72 max-[460px]:w-40 mt-16 h-auto">
                    <div className="img w-full h-auto">
                        <img src={img} alt="" />
                    </div>
                    <div className="cont w-full text-lg font-semibold mt-5 text-white h-auto">
                        <h1 className="pb-2 text-center">{name}</h1>
                        <h1 className="text-center">MRP : ₹ {mrp}</h1>
                    </div>
                </div>

        </>

    )

}

export default Card