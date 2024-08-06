import { useEffect, useState } from "react";


function OverviewCard({name,icon,total,completed}){

    let [count,setCount] = useState(0);
    
        const handleIncrement=()=>{
                setInterval(()=>{
                    setCount(()=>{
                        if(count<completed) return count = count+1;
                        else return count;
                    });
                },100 )  
        }

        useEffect(()=>{
           handleIncrement();
            
            // return()=>clearInterval(handleIncrement);
        },[])

    return(
        <> 
            <div className="icon w-10 h-10 border-2 border-black-100 text-2xl text-gray-600 rounded-full flex justify-center items-center bg-blue-200">
                {icon}
            </div>
            
            <h3 className="heading my-2 text-sm text-zinc-700">{name}</h3>
            <h1 className="data text-lg font-extrabold my-3" onLoad={handleIncrement}>{count}/{total}</h1>
        </>
    );
}

export default OverviewCard;