import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Updated = () => {
    
    const SingleSpot = useLoaderData()
     const { _id, spotname,visitYear, countryName, image, location,description, cost,seasonality,time}    =  SingleSpot;
      
     const handleUpdatePlACE = event => {
        event.preventDefault();
        const form = event.target;      
        const spotname = form.spotname.value;
        const countryName = form.countryName.value;
        const image = form.image.value;
        const location = form.location.value;
        const description = form.description.value;
        const  cost = form.cost.value;
        const seasonality = form.seasonality.value;
        const visitYear = form.visitYear.value;
        const  time = form.time.value;
       
        const addTour = { spotname,visitYear, countryName, image, location,description, cost,seasonality,time }
                  
        console.log(addTour);
         
        // send data to the server
        fetch(`http://localhost:5000/letsgo/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addTour)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount>0){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your Selected Spot Updated  Successfully',
                        icon: 'success',
                        confirmButtonText: 'ok'
                      })
                }
            }) 
    }      




    return (
        <div className=" mt-12 rounded-2xl  bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-300 hover:to-green-400 p-24">
        <h2 className="text-4xl  text-black  text-center font-bold">Update <span className='text-amber-800 font-extrabold    ' > {spotname}</span> Tourist Spot</h2>

        <form  onSubmit={handleUpdatePlACE} className="mt-10">  

            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text uppercase font-medium text-black "> Tourists Spot Name  </span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="spotname"  defaultValue={spotname} placeholder="tourists_spot_name" required  className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text font-medium text-black uppercase">country Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="countryName" defaultValue={countryName}  required placeholder="Select your Country" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/*  */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text uppercase font-medium text-black "> Location </span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="location" defaultValue={location}  placeholder="location" required className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text  uppercase font-medium text-black ">Image Url </span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="image" defaultValue={image} placeholder="Image URL" required className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
          
            {/*  */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text uppercase font-medium text-black "> Average Cost</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="cost" defaultValue={cost} placeholder=" average cost" required className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text font-medium text-black uppercase">seasonality</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="seasonality" defaultValue={seasonality} placeholder="like summer, winter" required className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
              {/*  */}
              <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text uppercase font-medium text-black "> travel time</span>          
                    </label>
                    <label className="input-group">
                        <input type="text" name="time" defaultValue={time} placeholder="like- '7 days'" required className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text font-medium text-black uppercase">   total Visitors PerYear  </span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="visitYear" defaultValue={visitYear} placeholder=" like- 10000" required className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
        

            {/* */}


            <div className="mb-8">
                    <div className="form-control w-full">
                  
                        <label className="label">
                            <span className="label-text uppercase font-medium text-black ">Short Description</span>
                        </label>
                        <label className="input-group  ">
                            <input type="text" name="description" defaultValue={description} required className="input lg:h-24 input-bordered w-full" />
                        </label>
                    
                    </div>
                </div>
           
              <button className="btn btn-info text-2xl   w-full " >Update</button>     
        </form>
    </div>
    );
};

export default Updated;