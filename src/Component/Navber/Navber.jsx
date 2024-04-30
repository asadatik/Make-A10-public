import { Link, NavLink } from "react-router-dom";    
import './Navber.css'
import { useContext } from "react";
import { AuthContext } from "../../Provider/Provider";
import userDefaultPic from '../../assets/user.png';
   

const Navber = () => {

  const{user,LogOut} = useContext(AuthContext);
  console.log(user)   
     const  signOut =() =>{
         LogOut()
         .then()
         .catch()
 
     }
    return (
        <div className="navbar bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-800 lg:px-40  ">
        <div className="navbar-start   ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5  text-white w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <a className="text-xl text-black " >  <NavLink   to="/">  Home </NavLink></a>
            <a className="text-xl text-white mx-2  " >         <NavLink  to="/allspot"  >   All Tourists Spot  </NavLink> </a>
            <a className="text-xl text-white mx-2 " >    <NavLink  to="/addspot"  >  Add Tourists Spot</NavLink></a>      
              <a className="text-xl text-white mx-2  "  >         <NavLink    to="/myspot"  >  My list  </NavLink>                  </a>   
                      
            </ul>
          </div>
          <a className="  lg:text-4xl font-extrabold  text-orange-200   ">Adventures Abound</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           <a className="text-xl text-white " >  <NavLink   to="/">  Home </NavLink></a>
           <a className="text-xl text-white mx-4  " >         <NavLink  to="/allspot"  >   All tourists spot  </NavLink> </a>
           <a className="text-xl text-white  mx-4" >    <NavLink  to="/addtour"  >  Add tourists spot   </NavLink></a>
             
           <a className="text-xl text-white mx-2  " >         <NavLink  to="/myspot"  >  My  list  </NavLink> </a>
            </ul>
            
        </div>
        <div className="navbar-end space-x-2 "> 
       
                 {
                    user? <div className="tooltip tooltip-bottom " data-tip={user.displayName?user.displayName:'user name not found'}>
                   <button>    { user.photoURL?<img className="w-12  rounded-full  " src={user.photoURL} 
                alt="" /> :  <img className="w-12 rounded-full "  src={userDefaultPic}  />  }   </button>
                       </div> 
                     :
                   <label  tabIndex={0} className="btn tooltip  btn-ghost btn-circle avatar">           
                  </label>
                }
                   {user ? <Link onClick={signOut} className="  p-1  rounded-xl bg-green-800 text-white  text-lg  "  >Log Out</Link> 
                        :  <div >
                      <a className="text-xl text-white mx-3  " >    <NavLink  to="/login"> Login    </NavLink></a>   
                      <a className="text-xl text-white   " >    <NavLink  to="/register"> Register   </NavLink></a>
                      </div> }
               
                      </div>
                </div>
    );
};

export default Navber;