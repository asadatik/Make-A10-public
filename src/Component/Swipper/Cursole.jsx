
const Cursole = () => {
    return (
         <div  className='grid   md:grid-cols-2  lg:grid-cols-3'       >
            <div className=' rounded-l-3xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  lg:pt-28 '  >
                      <p   
                            data-aos="zoom-in-left"  
                            data-aos-duration="1000"
                      className='text-center  text-2xl font-bold text-white ' >Welcome to <span className="text-amber-500 uppercase " >Adventures Abound</span>,
                                                                             </p>
                    <p data-aos="zoom-in-right" 
                    data-aos-duration="1500"
                       
                     className='text-center  text-lg m-2  text-black '  > your gateway to unforgettable adventures! Discover stunning destinations, book tickets with ease, and embark on the journey of a lifetime. Start planning your next escape today!</p>
                      <div className='  lg:flex gap-5  justify-center '   >
                      <button  
                       className="btn    btn-outline  btn-secondary">Get Start now</button>
                     
                     <button  
                       className="btn    btn-info">Learn More</button>
                      </div>
            
              </div>
          
        <div className="carousel  rounded-r-3xl lg:col-span-2  lg:w-full ">
        <div id="slide1" className="carousel-item relative lg:w-full">
          <img src="https://i.ibb.co/QftSrbD/pexels-belle-co-99483-1000445.jpg" className="lg:w-full  h-96 " />
          <div className="absolute flex justify-between transform -translate-y-1/2 lg:left-5 lg:right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative lg:w-full">
          <img src="https://i.ibb.co/MZ4YVPQ/pexels-quang-nguyen-vinh-222549-2132180.jpg" className="lg:w-full h-96   " />
          <div className="absolute flex justify-between transform -translate-y-1/2 lg:left-5 lg:right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative  lg:w-full">
          <img src="https://i.ibb.co/MkWkLJM/pexels-fmaderebner-238622.jpg" className="lg:w-full  h-96   " />
          <div className="absolute flex justify-between transform -translate-y-1/2 lg:left-5 lg:right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative lg:w-full">
          <img src="https://i.ibb.co/xHms3qh/pexels-pawan-yadav-1321878-2577274.jpg" className=" lg:w-full h-96   " />
          <div className="absolute flex justify-between transform -translate-y-1/2  lg:left-5 lg:right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
        </div>
        </div>
    );
};

export default Cursole;