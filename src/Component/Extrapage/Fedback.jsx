import { Fade } from "react-awesome-reveal";
import { RiSpeakLine } from "react-icons/ri";

const Fedback = () => {
    return (
        <div className="col-span-2 flex mt-10 flex-col gap-4 lg:col-span-1">
        <h1

          className="text-center text-3xl font-bold"
        >
          
        </h1>
        <Fade cascade damping={0.1}>
                  <h1  className="text-center uppercase  text-sky-500 lg:text-5xl  font-bold " >    Our Top Review  </h1>       
  
       
                    </Fade>
                    <Fade cascade damping={0.1}>
        <div
          
          className="rounded-2xl border border-black  p-4"
        >
          <h1 className="pb-2 text-2xl font-bold"> Unforgettable Experience!</h1>
          <h2 className="text-lg font-medium">Reviewed by: [ Visitor]</h2>
          <p className="pl-4 text-gray-500 flex gap-1 "> <RiSpeakLine className="text-2xl text-black " />
        From the moment I stepped foot in Shundarban, I was captivated by its charm. The scenic beauty, coupled with the warmth of the locals, made my stay truly memorable. I highly recommend  for an authentic cultural experience!
          


          </p>
        </div>
              </Fade>
              <Fade cascade damping={0.1}>
        <div
         
          className="rounded-2xl border border-black  p-4"
        >
          <h1 className="pb-2 text-2xl font-bold">A Hidden Gem!</h1>
          <h2 className="text-lg font-medium">
Reviewed by: [Visitor]</h2>

          <p className="pl-4 text-gray-500  flex gap-1  " > <RiSpeakLine className="text-2xl text-black " />
        Discovering  Bangkok was like stumbling upon a hidden treasure. The breathtaking landscapes and rich history left me in awe. Don`t miss  - it`s an absolute must-see!
          </p>
       
        </div>
            </Fade>

        <div
        
          className="rounded-2xl border border-black  p-4"
        >
          <h1 className="pb-2 text-2xl font-bold">Perfect Getaway!</h1>
          <h2 className="text-lg font-medium">Reviewed by: [Visitor]</h2>
          <p className="pl-4 text-gray-500 flex gap-1 "> <RiSpeakLine className="text-2xl text-black " />
          I couldn`t have asked for a better getaway than  Angkor Wat. From thrilling outdoor adventures to cozy cafes, there`s something here for everyone. My stay at [Accommodation Name] was nothing short of fantastic - impeccable service and stunning views!
          </p>
        </div>
        <Fade cascade damping={0.1}>

        <div
        
        className="rounded-2xl border border-black  p-4"
      >
        <h1 className="pb-2 text-2xl font-bold">Paradise Found!</h1>
        <h2 className="text-lg font-medium">Reviewed by: [Visitor]</h2>
        <p className="pl-4 text-gray-500 flex gap-1 "> <RiSpeakLine className="text-2xl text-black " />
        Visiting Ha Long Bay felt like stepping into paradise. The serene beaches, lush forests, and vibrant culture stole my heart. Whether you`re an adventure seeker or a relaxation enthusiast, this destination has it all. I can1t wait to return!
          </p>
      </div>
       </Fade>


      </div>
    );
};

export default Fedback;