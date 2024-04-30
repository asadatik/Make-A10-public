
import { useLoaderData } from "react-router-dom";
import Cursole from "../../Component/Swipper/Cursole";
import HomeCard from "./HomeCard";
import Reveiw from "../../Component/Extrapage/Reveiw";

   
const Home = () => {
    const places = useLoaderData();
        console.log(places.length)

    return (  
             
        <div  className="my-10"  > 
                
             {/* <Helmet>
             <title> Adventures Abound/ Home </title>
            </Helmet>  */}
                  <Cursole></Cursole> 
                <div     className=" my-5 bg-sky-200 rounded-t-2xl py-2"  > 
                <h1 className="text-center  text-3xl my-6 font-bold "  >Place to travel , <br />
                     <span className="text-4xl" > Dream. Explore. Discover.</span></h1>  
                
                 </div>
                       
                      
                  <div  className="  grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 " >
                  {
                    places.slice(0,6).map(  place=> <HomeCard key={place._id}  place={place} ></HomeCard>                     )
                  }      

                  </div>
                  <div>
                    <Reveiw></Reveiw>
                  </div>
                     
        </div>
    );
};

export default Home;