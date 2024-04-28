import { Outlet } from "react-router-dom";
import Navber from "../Component/Navber/Navber";
  

const Root = () => {
    return (
        <div>
               <Navber></Navber>
                 
             <div className=" 2xl:container mx-auto">
                  <Outlet></Outlet>                 
                      
               </div>
              
                  {/* <Footer></Footer> */}
            </div>
    );
};

export default Root;