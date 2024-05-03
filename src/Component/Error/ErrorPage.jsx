import { NavLink } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
        <div className='text-center'>
       <h1 className='text-[400px] font-bold'>
           404
       </h1>

       <h2 className='text-5xl font-bold'>
           NOT FOUND
       </h2>
         
      
   </div>
   <div className=" text-center  mt-8 "  >    <NavLink  to='/'  > < button    className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-300 text-2xl font-medium text-black btn   "  > Back to Home </button> </NavLink>     </div>
   </div>
    );
};

export default ErrorPage;