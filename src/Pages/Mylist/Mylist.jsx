import React, { useEffect } from 'react';
import{ useContext, useState } from 'react';
import { AuthContext } from '../../Provider/Provider';
const Mylist = () => {
    const{user} = useContext(AuthContext); 
                         
        const [item, setItem] = useState([]);
        console.log(item)
        console.log(user);
        useEffect(() => {
          fetch(`http://localhost:5000/myspot/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
              setItem(data);
            });
        }, [user]);
           

    return (
        <div className='"border-solid border-2 border-sky-500 my-10 ' >

<div className="overflow-x-auto    ">
  <table className="table">
    {/* head */}
    <thead>
      <tr className='text-2xl  ' >
      
        <th >Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th>Updated or Delete</th>
      </tr>
    
    </thead>

    <tbody>
      {/* row 1 */}
     
      {
        item?.map(p => (  
          
            <tr className='font-medium'  >
           <td> {p.spotname}  </td>  
        <td>{p.countryName}</td>
        <td>{p.cost}</td>
        <td className='lg:flex gap-3' >  <button className='btn btn-info  text-xl ' >Update</button>
        <button className='btn btn-secondary  text-xl ' >delete</button>  
          </td>
      </tr>
        
        ))
      }


    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default Mylist;
// 



// const myList = () => {
      
//   c

//     return (
//         <div>
//             <h1>hhhhhhhhhhhhh</h1>
//         </div>
//     );

//