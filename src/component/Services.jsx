import React from 'react';

const ServicePage = () => {
  return (
    <div className=" min-h-screen py-8">
      <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center my-8 mt-20 px-4 lg:px-0">
      <h3 className="text-5xl font-semibold text-center">
        ABOUT OUR <span className="text-orange-500">DROP TAXI</span>
      </h3>
      <hr className="border-t-2 border-orange-500 my-2 w-14" />

      <p className="text-xl mt-4 text-center text-gray-400 max-w-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        magni explicabo itaque, ad amet temporibus repellat, molestias ipsam
        recusandae perferendis in iste veritatis culpa nobis commodi! Dolor illo
        dolore error.
      </p>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 flex items-center">
            <img
              src="https://th.bing.com/th?id=ODL.bafdc4d73b39213e0d540cd108d36817&w=197&h=110&c=7&rs=1&qlt=80&o=6&dpr=1.3&pid=RichNav" // Replace with the actual URL of the luxury car image
              alt="Luxury Car"
              className="rounded-lg w-32 h-32 mr-6"
            />
            <div>
              <h2 className="text-3xl font-semibold mb-4">Luxury Car Pick-Up</h2>
              <p className="text-gray-600 leading-7">
                We arrange cheap and accessible local taxi hiring facilities for
                travelers who want to rent a car for in-city usage. This includes
                local sightseeing, in-city transfers, pick and up drop services,
                short-time booking, and more.
              </p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 flex items-center">
            <img
              src="https://th.bing.com/th?id=OIP.UCxthHissS16WQb5jc2RGQHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" // Replace with the actual URL of the car hire image
              alt="Car Hiring Options"
              className="rounded-lg w-32 h-32 mr-6"
            />
            <div>
              <h2 className="text-3xl font-semibold mb-4">Car Hiring Options</h2>
              <p className="text-gray-600 leading-7">
                We provide both half-day and full-day car hiring facilities to our
                customers, allowing them to choose as per their convenience and
                needs. Whether you need it for local travel or long-distance
                journeys, we've got you covered.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 mt-8 flex items-center">
          <img
            src="https://th.bing.com/th/id/OIP.X42b4q5g88ldlViDnsLj9QHaEK?w=326&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7" // Replace with the actual URL of the city transfer image
            alt="City Transfers"
            className="rounded-lg w-32 h-32 mr-6"
          />
          <div>
            <h2 className="text-3xl font-semibold mb-4">City Transfers</h2>
            <p className="text-gray-600 leading-7">
              Planning for weekend getaways or family leisure trips outside the
              city? We arrange safe and timely transfers to any city you want to
              travel, ensuring you reach your destination comfortably.
            </p>
          </div>
        </div>
        <div className='flex justify-center'>
        <div className="bg-white p-8 w-[800px] rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 mt-8 flex justify-center">
          <div className="w-32 h-32 flex items-center justify-center bg-green-500 text-white rounded-full mr-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-16 h-16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l-4 1m8-5l-4 10M12 8l4 10"
              />
            </svg>
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-4">Why Choose Us?</h2>
            <ul className="list-disc list-inside text-gray-600 leading-7">
              <li>Best Price in the Market.</li>
              <li>Luxury and Comfortable Vehicles.</li>
              <li>Well Experienced Driving Service.</li>
              <li>Cover the Entire South India at Best Cost.</li>
              <li>Available in Multiple Days Packages.</li>
            </ul>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;