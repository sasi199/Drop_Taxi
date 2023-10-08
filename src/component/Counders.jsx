import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faCar, faMapMarkerAlt, faAward } from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup'; // Import the CountUp component
import cars from "../assets/cars.jpg";

const IconCounter = ({ icon, count, title }) => {
  return (
    <div className="flex items-center justify-center flex-col p-4">
      <FontAwesomeIcon icon={icon} className="text-5xl mb-2 text-orange-300" />
      <p className="text-4xl font-bold text-white mt-4">
        <CountUp start={0} end={count} duration={2.5} separator="," /> {/* Use CountUp component */}
      </p>
      <p className="text-sm text-white">{title}</p>
    </div>
  );
};

const Numbers = () => {
  const happyClientsCount = 1000;
  const carsCount = 500;
  const destinationsCount = 50;
  const awardsCount = 10;

  const containerStyle = {
    backgroundImage: `url(${cars})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <div className="flex justify-around mt-16 h-[250px] border rounded-lg shadow-neutral-700" style={containerStyle}>
      <IconCounter icon={faSmile} count={happyClientsCount} title="Happy Clients" />
      <IconCounter icon={faCar} count={carsCount} title="Cars" />
      <IconCounter icon={faMapMarkerAlt} count={destinationsCount} title="Destinations" />
      <IconCounter icon={faAward} count={awardsCount} title="Awards" />
    </div>
  );
};

export default Numbers;
