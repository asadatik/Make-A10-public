import React from 'react';

const Reveiw = () => {
    return (
        <div>
             <div>
        <h1
          className="mt-10 rounded-t-lg text-center text-4xl font-semibold "
        >
          Frequently Asked Questions.
         
        </h1>
        <div
          
          className="my-6 flex flex-col gap-4 rounded-xl border border-black p-4"
        >
          <div
            
           
            className="collapse collapse-arrow bg-base-200 "
          >
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              How can I book a tour?
            </div>
            <div className="collapse-content">
              <p>Explore our simple tour booking process.</p>
            </div>
          </div>
          <div
          
            className="collapse collapse-arrow bg-base-200"
          >
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              What destinations do you offer tours to?
            </div>
            <div className="collapse-content">
              <p>Discover our diverse range of travel destinations.</p>
            </div>
          </div>
          <div
           
            className="collapse collapse-arrow bg-base-200"
          >
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Can I customize my tour itinerary?
            </div>
            <div className="collapse-content">
              <p>Learn about our flexible travel options.</p>
            </div>
          </div>
          <div
           
            className="collapse collapse-arrow bg-base-200"
          >
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              What safety measures are in place during tours?
            </div>
            <div className="collapse-content">
              <p>Find out about our commitment to traveler safety.</p>
            </div>
          </div>
          <div
           
            className="collapse collapse-arrow bg-base-200"
          >
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              How can I cancel or modify my booking?
            </div>
            <div className="collapse-content">
              <p>
                Understand our booking cancellation and modification policies.
              </p>
            </div>
          </div>
          <div
           
            className="collapse collapse-arrow bg-base-200"
          >
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              What should I pack for my trip?
            </div>
            <div className="collapse-content">
              <p>Get tips on essential items to bring for a memorable journey.</p>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Reveiw;




