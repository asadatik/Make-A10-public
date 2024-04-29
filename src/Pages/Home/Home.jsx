
import { useLoaderData } from "react-router-dom";
import Cursole from "../../Component/Swipper/Cursole";
import HomeCard from "./HomeCard";

   
const Home = () => {
    const places = useLoaderData();
        console.log(places.length)

    return (  
             
        <div  className="my-10"  > 
                
             {/* <Helmet>
             <title> Adventures Abound/ Home </title>
            </Helmet>  */}
                  <Cursole></Cursole> 
                 
                  <div  className="  grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 " >
                  {
                    places.map(  place=> <HomeCard key={place._id}  place={place} ></HomeCard>                     )
                  }      

                  </div>
                     
        </div>
    );
};

export default Home;