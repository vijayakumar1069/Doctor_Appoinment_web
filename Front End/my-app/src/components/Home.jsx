import React from 'react';
import ho1 from "../assets/h1.jpg" 
import ho2 from "../assets/h2.jpg" 
import ho3 from "../assets/h3.jpg" 

const Home = () => {
  const hospitals = [
    {
      imageSrc: ho1,
      title: 'Hospital 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      services: ['Cardiology', 'Orthopedics', 'Radiology'],
      address: '123 Main Street, Cityville',
      contact: 'Phone: (555) 123-4567',
    },
    {
      imageSrc: ho2,
      title: 'Hospital 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      services: ['Pediatrics', 'Dermatology', 'Ophthalmology'],
      address: '456 Oak Avenue, Townsville',
      contact: 'Phone: (555) 987-6543',
    },
    {
      imageSrc: ho3,
      title: 'Hospital 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      services: ['Obstetrics', 'Neurology', 'Internal Medicine'],
      address: '789 Pine Lane, Villagetown',
      contact: 'Phone: (555) 456-7890',
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-8 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Our Hospitals</h1>
      <p className="text-lg text-gray-600 mb-8">
        Providing quality healthcare services to our community.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {hospitals.map((hospital, index) => (
          <HospitalImage
            key={index}
            src={hospital.imageSrc}
            title={hospital.title}
            description={hospital.description}
            services={hospital.services}
            address={hospital.address}
            contact={hospital.contact}
          />
        ))}
      </div>
    </div>
  );

  
};
const HospitalImage = ({ src, title, description, services, address, contact }) => (
    <div className="bg-white rounded-md shadow-md overflow-hidden w-full md:max-w-md">
      <img
        src={src}
        alt={title}
        className="w-full h-48 object-cover rounded-t-md"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
        <div className="mt-4">
          <h3 className="text-lg font-bold text-gray-800 mb-2">Services:</h3>
          <ul className="list-inside text-gray-700 list-none">
            {services.map((service, index) => (
              <li key={index} className="mb-1">{service}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <p className="text-gray-700">{address}</p>
          <p className="text-gray-700">{contact}</p>
        </div>
      </div>
    </div>
  );
  
  

export default Home;
