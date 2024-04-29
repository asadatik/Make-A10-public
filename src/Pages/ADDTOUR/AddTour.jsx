import Swal from 'sweetalert2'


const AddTour = () => {


    const handleAddPlACE = event => {
        event.preventDefault();

        const form = event.target;
            
        const spotname = form.spotname.value;
        const countryName = form.countryName.value;
        const image = form.image.value;
        const location = form.location.value;
        const description = form.description.value;
        const  cost = form.cost.value;
        const seasonality = form.seasonality.value;
        const  time = form.time.value;
        const name= form.name.value;
        const  email = form.email.value;
       
        const addTour = { spotname, countryName, image, location,description, cost,seasonality,time ,name,email }

        console.log(addTour);
         
        // send data to the server
        fetch('http://localhost:5000/letsgo', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addTour)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: ' Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            }) 
    }
    return (
        <div className=" mt-12 rounded-2xl  bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-300 hover:to-green-400 p-24">
            <h2 className="text-4xl   text-center font-bold">Add Tourists Spot</h2>

            <form className="mt-10"  onSubmit={handleAddPlACE}>  
            {/* a. image ( use image URL)
b. tourists_spot_name
c.country_Name
d. location
e. short description
f. average_cost
g. seasonality - like summer, winter
h. travel_time => like- 7 days
i. totaVisitorsPerYear => like- 10000
j. User Email
k. User Name
l. “Add” button */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text uppercase  "> Tourists Spot Name  </span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="spotname" placeholder="tourists_spot_name" required  className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text uppercase">country Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="countryName" required placeholder="Available Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/*  */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text uppercase  "> Location </span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="location" placeholder="location" required className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text  uppercase ">Image</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" placeholder="Image URL" required className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
              
                {/*  */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text uppercase "> Average Cost</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="cost" placeholder=" average cost" required className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text uppercase">seasonality</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="seasonality" placeholder="like summer, winter" required className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                  {/*  */}
                  <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text uppercase "> travel time</span>          
                        </label>
                        <label className="input-group">
                            <input type="text" name="time" placeholder="like- '7 days'" required className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text uppercase">   total Visitors PerYear  </span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="seasonality" placeholder="like summer, winter" required className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                     {/*  */}
                  <div className="md:flex mb-8">
                   
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text uppercase">  Your Name  </span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="your name" required className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text uppercase "> Your Email</span>          
                        </label>
                        <label className="input-group">
                            <input type="email" name="email" placeholder="Enter your Email" required className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                {/* */}
                <div className="mb-8">
                    <div className="form-control w-full">
                  
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" placeholder="Write a Short description" required className="input input-bordered w-full" />
                        </label>
                    
                    </div>
                </div>
               
                  <button className="btn btn-info w-full " >Add</button>     
            </form>
        </div>
    );
};

export default AddTour;