import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-orange-300 text-black py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className='justify-start mx-10'>
          <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
          <p className="text-black">
            123 Taxi Avenue, City Name<br />
            Email: info@yourtaxi.com<br />
            Phone: +123 456 7890
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
          <ul className="text-black">
            <li className="mb-2"><a href="#">Home</a></li>
            <li className="mb-2"><a href="#">Services</a></li>
            <li className="mb-2"><a href="#">Fleet</a></li>
            <li className="mb-2"><a href="#">Pricing</a></li>
            <li className="mb-2"><a href="#">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-black hover:text-white">
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
            <a href="#" className="text-black hover:text-white">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="#" className="text-black hover:text-white">
              <i className="fab fa-instagram text-xl"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p className="text-sm text-black-400">© {new Date().getFullYear()} Your Taxi. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
