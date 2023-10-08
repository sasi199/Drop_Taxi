import React, { useState, useEffect } from 'react';
import car from "../assets/car 3.png";
import phoneIcon from "../assets/call 4.png";
import whatsappIcon from "../assets/what 4.png";
import Typewriter from 'typewriter-effect'; // Import the Typewriter component
import './Home.css';

const Home = () => {
  const phoneNumber = '8190081777';
  const [blinkPhone, setBlinkPhone] = useState(false);
  const [blinkWhatsapp, setBlinkWhatsapp] = useState(false);

  const openWhatsApp = () => {
    window.open('https://api.whatsapp.com/send?phone=8190081777', '_blank');
  };

  useEffect(() => {
    const phoneBlinkInterval = setInterval(() => {
      setBlinkPhone((prevBlink) => !prevBlink);
    }, 500);

    return () => clearInterval(phoneBlinkInterval);
  }, []);

  useEffect(() => {
    const whatsappBlinkInterval = setInterval(() => {
      setBlinkWhatsapp((prevBlink) => !prevBlink);
    }, 500);

    return () => clearInterval(whatsappBlinkInterval);
  }, []);

  return (
    <div className="relative min-h-screen">
      <img
        className="w-full h-auto "
        src={car}
        alt="Home Image"
      />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">WELCOME TO OUR <span className='text-orange-500'>JANANI DROP TAXI!!!</span></h1>
        {/* Use Typewriter component for automatic typing */}
        <div className="text-1xl mb-6 font-semibold text-white">
          <Typewriter
            options={{
              strings: ["Safe, secure, and Comfortable Journey"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <button
          className="bg-orange-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded mr-4"
          onClick={() => alert("Book Now clicked")}
        >
          Book Now
        </button>
      </div>

      <img
        src={whatsappIcon}
        alt="WhatsApp Icon"
        className={`w-10 h-10 cursor-pointer fixed bottom-4 left-4 z-50 ${blinkWhatsapp ? 'blink wave' : 'wave'}`}
        onClick={openWhatsApp}
      />

      <a href={`tel:${phoneNumber}`} className={`fixed bottom-4 right-4 z-50 text-orange-500 ${blinkPhone ? 'blink wave' : 'wave'}`}>
        <img
          src={phoneIcon}
          alt="Phone Icon"
          className="w-10 h-10 cursor-pointer"
        />
      </a>
    </div>
  );
}

export default Home;
