import React from 'react';

const Reveiw = () => {
    return (
        <div>
          <div>
                     <h1  className="text-center uppercase  text-sky-500 lg:text-4xl  font-bold mb-6"
        
        >
          Frequently Asked Questions.
         
        </h1>
        <div
          
          className="my-6 flex flex-col gap-4 rounded-xl   border border-black p-4"
        >
          <div
            
           
            className="collapse collapse-arrow bg-base-200 "
          >
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
            How can I book tickets or reservations for attractions through this website?
            </div>
            <div className="collapse-content">
              <p>To book tickets or reservations for attractions featured on our website, simply navigate to the booking section of the respective attraction's page. Follow the prompts to select your desired date, time, and number of tickets, then proceed to payment.</p>
            </div>
          </div>
          <div
          
            className="collapse collapse-arrow bg-base-200"
          >
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
            Are the prices listed on the website inclusive of taxes and fees?
            </div>
            <div className="collapse-content">
              <p>Yes, the prices listed on our website typically include all applicable taxes and fees. However, please review the terms and conditions of each booking for specific details regarding additional charges.</p>
            </div>
          </div>
          <div
           
            className="collapse collapse-arrow bg-base-200"
          >
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
            What payment methods are accepted for bookings?
            </div>
            <div className="collapse-content">
              <p>
              The ability to cancel or modify a booking varies depending on the policies of the attraction or service provider. We recommend reviewing the cancellation and modification policy outlined during the booking process or contacting our customer support team for assistance.
                </p>
            </div>
          </div>
          <div
           
            className="collapse collapse-arrow bg-base-200"
          >
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
            Can I cancel or modify my booking?
            </div>
            <div className="collapse-content">
              <p> The ability to cancel or modify a booking varies depending on the policies of the attraction or service provider. We recommend reviewing the cancellation and modification policy outlined during the booking process or contacting our customer support team for assistance.</p>
            </div>
          </div>
         
        </div>
      </div>
        </div>
    );
};

export default Reveiw;




