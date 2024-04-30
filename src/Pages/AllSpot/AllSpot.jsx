import { useLoaderData } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
 
import { useState } from "react";
import TouristSpotCard from "./TouristSpotCard";


const AllSpot = () => {
    const allTouristSpot = useLoaderData();
    const [sortTouristSpot, setSortAllTouristSpot] = useState(allTouristSpot);  
    console.log(allTouristSpot);
      const sortAllTouristSpotByCost = () => {
        const sortedTouristSpot = [...sortTouristSpot].sort((a, b) => {
         return a.cost - b.cost;   
       
             }); 
             setSortAllTouristSpot(sortedTouristSpot);
            } 
  
    
    return(
        
        <div>
        
          <div className="container mx-auto my-10  ">
      <div className="dropdown dropdown-bottom mb-20 flex  justify-center">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-outline m-1 bg-transparent pr-0"
        >
          Sort By
          <RiArrowDropDownLine className="text-4xl " />
        </div>
        <ul
          tabIndex={0}
          className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow"
        >
          <li>
            <button
              className="btn btn-outline"
              onClick={sortAllTouristSpotByCost}
            >
              Average Cost
            </button>
          </li>
        </ul>
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortTouristSpot.map((Spot) => {
          return (
            <TouristSpotCard
              key={Spot._id}
              Spot={Spot}
            ></TouristSpotCard>
          );
        })}
      </div>
    </div>



        </div>
      );
     }
  

export default AllSpot;



