

const Cursole = () => {
    return (
        <div className="carousel   w-full ">
        <div id="slide1" className="carousel-item relative lg:w-full">
          <img src="https://i.ibb.co/QftSrbD/pexels-belle-co-99483-1000445.jpg" className="w-full   h-96 " />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative lg:w-full">
          <img src="https://i.ibb.co/MZ4YVPQ/pexels-quang-nguyen-vinh-222549-2132180.jpg" className="w-full h-96   " />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative  lg:w-full">
          <img src="https://i.ibb.co/MkWkLJM/pexels-fmaderebner-238622.jpg" className="w-full  h-96   " />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative lg:w-full">
          <img src="https://i.ibb.co/xHms3qh/pexels-pawan-yadav-1321878-2577274.jpg" className="w-full h-96   " />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Cursole;