import React from 'react';
import carsImage from '../assets/cars.jpg';

const ContactUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-8 py-16 bg-white shadow-lg rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src={carsImage} // Replace with an actual car-themed image
              alt="Contact Us Background"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="text-gray-800 font-semibold mb-2">Your Name</label>
                <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="text-gray-800 font-semibold mb-2">Email Address</label>
                <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="text-gray-800 font-semibold mb-2">Message</label>
                <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 focus:outline-none">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
                                