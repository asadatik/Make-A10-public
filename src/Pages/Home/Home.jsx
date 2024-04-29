
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
                  {
                    places.map(  place=> <HomeCard key={place._id}  place={place} ></HomeCard>                     )
                  }
                     
        </div>
    );
};

export default Home;