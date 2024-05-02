import { Outlet } from "react-router-dom";
import Navber from "../Component/Navber/Navber";
import Footer from "../Component/Footer/Footer";
  

const Root = () => {
    return (
        <div className="sm:p-2 md:p-4  " >
               <Navber></Navber>
                 
             <div className=" 2xl:container mx-auto">
                  <Outlet></Outlet>                 
                      
               </div>
              
                   <Footer></Footer>
            </div>
    );
};

export default Root;