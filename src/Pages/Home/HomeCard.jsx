import { Link } from "react-router-dom";
import { MdPlace } from "react-icons/md";
const HomeCard = ({place}) => {

     const {_id,spotname, countryName, image, location,description, cost,seasonality,time ,name,email} = place ;
     console.log(_id)
        
    return (
        <div 
        // data-aos="flip-up"
        //   data-aos-duration="2000"
         
        className="card card-compact  p-5  border bg-base-300 shadow-xl">  
        <figure><img  className="h-52 rounded-t-xl  lg:w-full" src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <div className="lg:flex gap-5   "  >
          <h2 className="card-title text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500   "> {spotname} </h2>
          <div className="rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-500 text-xl font-medium text-black p-1 "   > <span  className=" flex" ><MdPlace className="text-2xl" />  {countryName} </span> </div>
          </div>
          <p  className=" font-medium text-black"  >{description}</p>
          <div className="card-actions">
            <button  className="btn bg-gradient-to-r from-violet-500 to-fuchsia-500   "> <Link to={`/SinglePlace/${_id}`}  className="font-bold text-white text-lg " >View Details</Link> </button>  
          </div>
        </div>
      </div>
    );
};

export default HomeCard;