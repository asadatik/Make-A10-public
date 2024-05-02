import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const CountryCard = () => {

    //Params(countyName) 
    const {name} = useParams(); 
    console.log(name)
    
    const CountryName = useLoaderData();
        
    const singleId =CountryName.filter(spot=>spot.countryName==name)
     console.log(singleId);
     

                
    return (
      <div>
        { singleId.map(id=>        
             <div
             className="card card-compact  p-5  border bg-green-300 shadow-xl">  
             <figure><img  className="h-52 rounded-t-xl  lg:w-full" src={id.image} alt="Shoes" /></figure>
             <div className="card-body">
               <div className="lg:flex gap-5   "  >
               <h2 className="card-title text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500   "> {id.spotname} </h2>
               <div className="rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-500 text-xl font-medium text-black p-1 "   > <span  className=" flex" >{id.countryName} </span> </div>
               </div>
               <p  className=" font-medium text-black"  >{id.description}</p>
               <div className="card-actions">
                 <button  className="btn bg-gradient-to-r from-violet-500 to-fuchsia-500   "> <Link to={`/singleCard/${id._id}`}  className="font-bold text-white text-lg " >View Details</Link> </button>  
               </div>
             </div>
           </div>)
        }
      </div> 
    );
};

export default CountryCard;