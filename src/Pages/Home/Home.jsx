
import { useLoaderData } from "react-router-dom";
import Cursole from "../../Component/Swipper/Cursole";
import HomeCard from "./HomeCard";
import Reveiw from "../../Component/Extrapage/Reveiw";
import Country from "./CountryCard/Country";
import Typewriter from 'react-simple-typewriter';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();  


const Home = () => {
    const places = useLoaderData();
        console.log(places.length)

    return (  
             
        <div  className="my-10 p-2 "  > 
                
        
                  <Cursole></Cursole> 
                <div     className="  mt-6 mb-3 bg-violet-500 rounded-t-3xl py-2"  > 
                   {/* <h1>
                    <Typwriter
          words={['Hello', 'World', 'React']}
          loop={true}
          cursor
          cursorStyle='_'
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
                      {/* Place to travel , <br />
                     <span className="text-4xl" > Dream. Explore. Discover.</span> 
                      </h1>   
                 */}


                 </div>
                       
                      
                  <div  className="  grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 " >
                  {
                    places.slice(0,6).map(  place=> <HomeCard key={place._id}  place={place} ></HomeCard>                     )
                  }      

                  </div>
               
                  
                  <div className="my-12"  >
                     <h1  className="text-center uppercase  text-sky-500 lg:text-5xl  font-bold mb-6  " >    Southeast Asia Categories            </h1>  
                    <Country></Country>
                  </div>
                  <div>
                    <Reveiw></Reveiw>
                  </div>
                     
        </div>
    );
};

export default Home;