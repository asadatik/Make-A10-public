import React, { useEffect } from 'react';
import{ useContext, useState } from 'react';
import { AuthContext } from '../../Provider/Provider';
import Swal from "sweetalert2";     
import { Link } from 'react-router-dom';

const Mylist = () => {
    const{user} = useContext(AuthContext); 
    const [control,Setcontrol]= useState(false);                 
        const [item, setItem] = useState([]);
        console.log(item)
        console.log(user);
        useEffect(() => {
          fetch(`http://localhost:5000/myspot/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
              setItem(data);
            });
        }, [user,control]);
          
       
        const handleDelete = (id) => {
          console.log(id);
          Swal.fire({
            title: "Are you sure?",
            
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: " delete Confirm!",
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`http://localhost:5000/letsgo/${id}`, {        
                method: "DELETE",
              
              })
                .then((res) => res.json())
                .then((data) => {
                  console.log(data);
                  if (data.deletedCount > 0) {
                    Swal.fire({
                      title: "Deleted!",
                      text: "Your Selected spot  has been deleted.",
                      icon: "success",
                    });
                    // const remaining = user.filter((s) => s._id !==id);
                    // setUpdatedUser(remaining);
                    Setcontrol(!control)
                  }
                });
            }
          });
        }



    return (

       
<div>
   <h1 className='text-center mt-12 text-5xl font-bold uppercase text-purple-600 '   > My Spot List  </h1>

<div className='"border-solid border-2 border-sky-500 mt-5 mb-10 ' >
           
           <div className="overflow-x-auto    ">
             <table className="table">
               {/* head */}
               <thead>
                 <tr className='text-2xl  ' >
                 
                   <th > Spot Name</th>
                   <th>Country </th>
                   <th>Cost </th>
                   <th>Updated or Delete</th>
                 </tr>
               
               </thead>
           
               <tbody>
                 {/* row 1 */}
                
                 {
                   item?.map(p  => (    
                       <tr className='font-medium'  >
                      <td   > {p.spotname}  </td>  
                   <td>{p.countryName}</td>
                   <td>$ {p.cost}</td>
                   <td className='lg:flex gap-3' > <Link to={`/Updated/${p._id}`} >   <button  className='btn btn-info  text-xl ' >Update</button>          </Link>
                   <button onClick={()=>handleDelete(p._id)}   className='btn btn-secondary  text-xl ' >delete</button>  
                     </td>
                 </tr>
                   
                   ))
                 }
           
           
               </tbody>
             </table>
           </div>
                       
                   </div>
</div>

    );
};

export default Mylist;
