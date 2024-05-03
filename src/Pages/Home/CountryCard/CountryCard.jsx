
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { AiOutlineDoubleRight } from "react-icons/ai";
const CountryCard = () => {

    //Params(countyName) 
    const {name} = useParams(); 
    console.log(name)
    
    const CountryName = useLoaderData();
        
    const singleId =CountryName.filter(spot=>spot.countryName==name)
     console.log(singleId);
     

                
    return (
          <div>
            <h1 className='text-center mt-12 text-4xl font-bold  text-cyan-700 ' >Tourist  Spots Of    <span className='uppercase  font-extrabold' > {name} </span>   </h1>    
               
         <div className='mt-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        { singleId.map(id=>        
                  <div 
 
                      key={singleId._id}
                  className="card card-compact  p-5  border bg-green-300 shadow-xl">  
                  <figure><img  className="h-52 rounded-t-xl  lg:w-full" src={id.image} alt="Shoes" /></figure>
                  <div className="card-body">
                    <div className="lg:flex gap-5   "  >
                    <h2 className="card-title text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500   "> {id.spotname} </h2>
                    <div className="rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-500 text-xl font-medium text-black p-1 "   >  {id.countryName} </div>
                    </div>
                    <p  className=" font-medium text-black flex  "  > <span  > <AiOutlineDoubleRight className='text-xl text-purple-700   ' /> </span>   {id.description}</p>
                    
                    <h2  className="  text-[#131313CC] text-xl  font-bold " >  Location  :  <span className="  text-[#131313CC] text-xl  font-medium  "  > {id.location}. </span>     </h2> 

                    
                    <div   >
                <h2  className="  text-[#131313CC] text-xl  font-bold " >   totaVisitorsPerYear  :  <span className="  text-[#131313CC] text-xl  font-medium  "  > {id.visitYear}. </span>     </h2> 
                 
                 <h2  className="text-[#131313CC] text-xl  font-bold " >    Price :  <span className="  text-[#131313CC] text-xl  font-medium  "  > ${id.cost}. </span>     </h2>    
               </div>
             
                    <div className="card-actions">
                      <button  className="btn bg-gradient-to-r from-violet-500 to-fuchsia-500   "> <Link to={`/singleCard/${id._id}`}  className="font-bold text-white text-lg " >View Details</Link> </button>  
                    </div>
                  </div>
                </div> 
               )
        }
      </div> 
      </div> 
    );
};

export default CountryCard;