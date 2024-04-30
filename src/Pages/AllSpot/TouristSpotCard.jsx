import React from 'react';
import { Link } from 'react-router-dom';

const TouristSpotCard = ({Spot}) => {

    const {_id,spotname, countryName, image, cost,seasonality,time,visitYear} =Spot;


    return (
        <div 
 
         
        className="card card-compact  p-5  border bg-green-300 shadow-xl">  
        <figure><img  className="h-52 rounded-t-xl  lg:w-full" src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <div className="lg:flex gap-5   "  >
          <h2 className="card-title text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500   "> {spotname} </h2>
          <div className="rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-500 text-xl font-medium text-black p-1 "   > <span  className=" flex" >  {countryName} </span> </div>
          </div>
          <div   className=""  >
           <h2  className=" text-[#131313CC] text-xl  font-bold " >    seasonality :  <span className="  text-[#131313CC] text-xl  font-medium  "  > {seasonality}. </span>     </h2> 
                 
                 <h2  className="text-[#131313CC] text-xl  font-bold " >    Travel time :  <span className="  text-[#131313CC] text-xl  font-medium  "  > {time}. </span>     </h2>    
           </div>

           <div   className=""  >
           <h2  className="  text-[#131313CC] text-xl  font-bold " >   Total Visitors PerYear  :  <span className="  text-[#131313CC] text-xl  font-medium  "  > {visitYear}. </span>     </h2> 
                 
                 <h2  className="text-[#131313CC] text-xl  font-bold " >    Price :  <span className="  text-[#131313CC] text-xl  font-medium  "  > ${cost}. </span>     </h2>    
           </div>
          <div className="">
            <button  className="btn w-full  bg-gradient-to-r from-violet-500 to-fuchsia-500   "> <Link to={`/singleCard/${_id}`}  className="font-bold text-white text-lg " >View Details</Link> </button>  
          </div>
        </div>
      </div>
    );
};

export default TouristSpotCard;

// . average_cost
// d. totaVisitorsPerYear
// e. travel_time
// f. seasonality
