/* eslint-disable react/prop-types */
import Filter from "./Filter";
import Block from "./carousel";

const Display=({data})=>{

    return(
       <div>
            <Block/>
            <div className="flex justify-center m-5">
            <Filter />
            </div>
            <div className="  main mx-5 sm:mx-10 md:mx-20 lg:mx-32 xl:mx-48 flex flex-col items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {data.map((info,idx)=>(
               <div className="card w-96 glass" key={idx}>
               <figure><img src={info.img} alt="car!"/></figure>
               <div className="card-body">
                 <h1 className="card-title">{info.Title}</h1>
                 <p>{info.Description}</p>
               </div>
             </div>
            ))}
             </div>
            </div>
       </div>
    )

}

export default Display;