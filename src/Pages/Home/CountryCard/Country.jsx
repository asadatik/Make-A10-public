import  { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';


const Country = () => {
    const [ Country ,Setcountry] = useState([]);
    useEffect( () =>{
          fetch ('https://tuor-management.vercel.app/country')
          .then(res=>res.json())
                
          .then(data =>Setcountry(data))
             

        },[])
               console.log(Country) 
          
    return (
    
      <div>
        
         <div   className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 
            '>  
                      
         { 
            Country.map( SingleCountry=>   
                <NavLink  key={SingleCountry._1d}  to={`/countrycard/${SingleCountry.countryname}`}>
            <div    data-aos="flip-up"  
           data-aos-duration="2000"  className="hero rounded-2xl bg-violet-400">

              <div className="hero-content flex-col lg:flex-row">  
              <img src={ SingleCountry.image} className=" lg:w-40 lg:h-64 rounded-lg shadow-2xl" />
              <div>        
                      
                
                <h1 className="text-3xl  text-slate-600   font-bold"> {SingleCountry.countryname}</h1>
                <hr />
                <p className=" text-slate-600 font-medium " >{SingleCountry.description}</p>
                
              </div>
              </div>
               </div>   </NavLink>)
         }


        </div>
      

      </div>
       
    );
};

export default Country;