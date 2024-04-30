import React, { useContext } from 'react';

import {Navigate,useLocation} from 'react-router-dom'
import { AuthContext } from '../../Provider/Provider';



const PrivetRoute = ({children}) => {
    const location =  useLocation();
    
    const {user,loading} = useContext(AuthContext);
    console.log(user)
     if(  loading ) {
        return  <div  className=" mt-20 flex justify-center   "  >
      <span className="loading loading-dots text-info  loading-xs"></span>
<span className="loading loading-dots text-info loading-sm"></span>
<span className="loading loading-dots text-info loading-md"></span>
<span className="loading loading-dots text-info loading-lg"></span> </div> 
     
     } 
                   
       if(user)   {    
          return children 
       }
    
      return <Navigate state={location.pathname}  to='/login' >    </Navigate> 
  
};

export default PrivetRoute;



          
  