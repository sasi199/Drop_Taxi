import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import emailjs from 'emailjs-com';

const BookingForm = () => {
  const initialFormData = {
    name: '',
    email: '',
    mobile: '',
    from: '',
    to: '',
    date: null,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [successMessage, setSuccessMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false); // Add this line

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleDateChange = (date) => {
    setFormData((prevData) => ({ ...prevData, date }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
alert("thank you booking succesfully")
    // Prepare the email parameters
    const emailParams = {
      from_name: formData.name,
      from_email: formData.email,
      mobile: formData.mobile,
      from_location: formData.from,
      to_location: formData.to,
      date_time: formData.date ? formData.date.toLocaleString() : '',
    };

    // Send the email using EmailJS
    emailjs
      .send('service_b9ukk2i', 'template_q45lqcf', emailParams, 'n50L2fRrrahr6c-HI')
      .then((response) => {
        console.log('Email sent successfully:', response);
        // Display success message
        setSuccessMessage('Thank you for your booking!'); 
    
        // Reset the form to its initial state
        setFormData(initialFormData);
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        // Handle the error and display an error message to the user if needed.
      });
  };

  return (
    <div className="absolute top-6/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-black">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border drop-shadow-sm  mx-auto w-[900px]">
        <h2 className="text-2xl font-bold mb-4 text-center text-orange-500">Book Easy Ride with Us</h2>

        {formSubmitted && (
          <div className="text-green-500 mb-4">
            {successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit}>

        {/* First Row: Name and Email */}
        <div className="mb-4 grid grid-cols-3 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm text-black font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-black font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="mobile" className="block text-sm text-black font-semibold">
              Mobile
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
        </div>

        {/* Second Row: Mobile Number and Date */}
        <div className="mb-4 grid grid-cols-3 gap-4">
          <div>
            <label htmlFor="from" className="block text-sm text-black font-semibold">
              From
            </label>
            <input
              type="text"
              id="from"
              name="from"
              value={formData.from}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="to" className="block text-sm text-black font-semibold">
              To
            </label>
            <input
              type="text"
              id="to"
              name="to"
              value={formData.to}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="date" className="block text-sm text-black font-semibold">
              Date & Time
            </label>
            <DatePicker
              selected={formData.date}
              onChange={handleDateChange}
              showTimeSelect
              dateFormat="yyyy/MM/dd HH:mm"
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
        </div>

        {/* Button Row */}
        <div className='mt-4 flex justify-center items-center'>
            <button
              type="submit"
              className="bg-orange-500 text-white p-2 w-20 rounded-md hover:bg-orange-600 text-xl"
            >
              Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;