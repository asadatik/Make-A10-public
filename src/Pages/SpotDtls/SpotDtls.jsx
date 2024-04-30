import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { MdPlace } from "react-icons/md";
const SpotDtls = () => {   
        
    const {id} = useParams();                                 
    const Spot = useLoaderData();
        
     console.log() 
    const singleId =Spot.find(spot =>spot._id == id )
     console.log(singleId);

      const {spotname, countryName, image,visitYear, location,description, cost,seasonality,time ,name,email} = singleId
           
         


    return (  
         <div className='mt-12 '  >   
             <div className=" my-5 bg-sky-500 rounded-t-lg py-2" >
               <h1
                className="text-center text-4xl font-semibold text-white "  > Details Of {spotname} </h1>
               </div>      
<div  className="lg:flex rounded-3xl p-10 flex-col lg:flex-row  gap-10 lg:px-32 bg-white border-double border-4 border-sky-500  "  >
      
    <div className="  rounded-2xl " >
       <img  
       className="  lg:w-[750px] lg:h-[300px]  rounded-2xl " src={image} alt="" />
    </div>
<div>
<div>
      <div className="lg:flex gap-5"  >
      <p      className="  lg:font-bold lg:text-4xl  " > {spotname}   </p>
      <div className="rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-500 text-3xl font-medium text-black p-1 "   > <span  className=" flex" ><MdPlace className="text-3xl text-white  " />  {location} </span> </div>
          </div>
      </div>
       <hr className="mt-2" />
       <p  className="my-1 font-bold text-2xl text-[#131313CC]  "  > Country :  <span  className=" font-medium text-xl text-[#131313CC]  "    > {countryName}. </span> </p>
     
          <h3  className=" text-[#131313CC] text-xl  font-bold  " > Description : <span  className=" text-[#131313CC] text-xl  font-medium  "  > {description}. </span>  </h3>
           <div   className="lg:flex   my-4 gap-5"  >
           <h2  className=" text-[#131313CC] text-xl  font-bold " >    seasonality :  <span className="  text-[#131313CC] text-xl  font-medium  "  > {seasonality}. </span>     </h2> 
                 
                 <h2  className="text-[#131313CC] text-xl  font-bold " >    Travel time :  <span className="  text-[#131313CC] text-xl  font-medium  "  > {time}. </span>     </h2>    
           </div>
{/* location */}

<div   className="lg:flex   my-4 gap-5"  >
           <h2  className="  text-[#131313CC] text-xl  font-bold " >   totaVisitorsPerYear  :  <span className="  text-[#131313CC] text-xl  font-medium  "  > {visitYear}. </span>     </h2> 
                 
                 <h2  className="text-[#131313CC] text-xl  font-bold " >    Price :  <span className="  text-[#131313CC] text-xl  font-medium  "  > {cost}. </span>     </h2>    
           </div>
             
</div>
    </div>
   
       </div>
      

        
        
    );
};

export default SpotDtls;