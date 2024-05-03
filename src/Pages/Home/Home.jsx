
import { useLoaderData } from "react-router-dom";
import Cursole from "../../Component/Swipper/Cursole";
import HomeCard from "./HomeCard";
import Reveiw from "../../Component/Extrapage/Reveiw";
import Country from "./CountryCard/Country";
import { Fade } from "react-awesome-reveal";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Fedback from "../../Component/Extrapage/Fedback";
// ..
AOS.init();  


const Home = () => {
    const places = useLoaderData();
        console.log(places.length)

    return (  
             
        <div  className="my-10 p-2 "  > 
                
        
                  <Cursole></Cursole> 
                <div  
                
                className=" text-center font-bold mt-6 mb-3 bg-violet-500 rounded-t-3xl py-2"  > 
                 
                 <Fade cascade>
  <p className="text-3xl"   >                       Place to travel ,  </p>
        <p><span className="text-4xl" > Dream. Explore. Discover.</span></p>
</Fade>            


                 </div>
                       
                      
                  <div  className="  grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 " >
                  {
                    places.slice(0,6).map(  place=> <HomeCard key={place._id}  place={place} ></HomeCard>                     )
                  }      

                  </div>
               
                  
                  <div className="my-12"  >
                  <Fade cascade damping={0.1}>
                  <h1  className="text-center uppercase  text-sky-500 lg:text-5xl  font-bold mb-6  " >    Southeast Asia Categories     </h1>       
  
                    </Fade>
                     
                    <Country></Country>
                  </div>
                  <div>
                    <Reveiw></Reveiw>
                  </div>
                  <div>
                    <Fedback></Fedback>
                  </div>
                     
        </div>
    );
};

export default Home;