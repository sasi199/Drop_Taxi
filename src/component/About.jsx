import React from 'react';
import cars from '../assets/cars8.jpg'; // Make sure the path is correct
import '@fortawesome/fontawesome-free/css/all.css';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center my-8 mt-60 px-4 lg:px-0">
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
      <div className="flex mt-9 flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 p-4">
          <div className="flex flex-wrap justify-around">
            {/* Card 1 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="bg-gray-200 p-6 rounded-lg drop-shadow-md flex flex-col items-center justify-center">
                {/* Icon */}
                <i className="fas fa-car text-4xl text-black"></i>
                <p className="text-sm text-orange-300 text-center font-semibold mt-4">
                  Mauris convallis felis
                </p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="bg-gray-200 p-6 rounded-lg drop-shadow-md flex flex-col items-center justify-center">
                {/* Icon */}
                <i className="fas fa-calendar-alt text-4xl text-black"></i>
                {/* Text */}
                <p className="text-sm text-orange-300 font-semibold text-center mt-4">
                  Mauris convallis felis
                </p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="bg-gray-200 p-6 rounded-lg drop-shadow-md flex flex-col items-center justify-center">
                {/* Icon */}
                <i className="fas fa-road text-4xl text-black"></i>
                {/* Text */}
                <p className="text-sm text-orange-300 font-semibold text-center mt-4">
                  Mauris convallis felis
                </p>
              </div>
            </div>
          </div>
          <div className='p-4'>
          <p className="mt-8 text-lg text-gray-400 max-w-2xl">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita minima ipsum animi. Minus rerum quaerat omnis deleniti consequuntur quisquam odio neque, officia excepturi dolorem doloremque, facere iusto blanditiis, laboriosam cum!      </p>

      <p className="mt-8 text-lg text-gray-400 max-w-2xl">
       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, tenetur! Sit, iste! Ad aliquam voluptatem nobis quisquam. Error quasi numquam quod temporibus non atque quisquam eaque dolorem ipsam totam. Amet?
      </p>
     
      <ul className="mt-8 text-lg font-bold text-gray-500 max-w-2xl pl-10 ">
  <li >&#x2713; Best Price in Market.</li>
  <li >&#x2713; Luxury and Comfortable Vehicles.</li>
  <li >&#x2713; Well Experienced Driving Service.</li>
  <li >&#x2713; Cover the Entire South India at Best Cost.</li>
  <li >&#x2713; Available in Multiple Days Packages.</li>
</ul>

      </div>
        </div>
        <div className="w-full lg:w-1/2 p-4">
          <img
            src={cars} // Replace with your car-related image URL
            alt="Car"
            className="object-cover w-full h-full rounded-2xl"
          />
        </div>


        
      </div>
     
    </div>
  );
};

export default About;
