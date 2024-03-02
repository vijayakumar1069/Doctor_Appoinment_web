import React from 'react';
import d1 from "../assets/d1.jpg" 
import d2 from "../assets/d2.jpg" 
import d3 from "../assets/d3.jpg" 
import d4 from "../assets/d4.jpg" 
import d5 from "../assets/d5.jpg" 
import d6 from "../assets/d6.jpg" 
import d7 from "../assets/d7.jpg" 

const Doctors = () => {
  const doctorsData = [
    {
      id: 1,
      name: 'Dr. John Doe',
      specialization: 'Cardiologist',
      imageSrc: d2,
      bio: 'Dr. John Doe is a highly skilled Cardiologist with years of experience in diagnosing and treating cardiovascular conditions. He is dedicated to providing personalized care to his patients, focusing on both prevention and intervention.',
    },
    {
      id: 2,
      name: 'Dr. Jane Smith',
      specialization: 'Orthopedic Surgeon',
      imageSrc: d5,
      bio: 'Dr. Jane Smith is an Orthopedic Surgeon specializing in joint replacement and sports injuries. With a passion for helping patients regain mobility and improve their quality of life, she combines surgical expertise with compassionate care.',
    },
    {
      id: 3,
      name: 'Dr. Michael Johnson',
      specialization: 'Pediatrician',
      imageSrc: d3,
      bio: 'Dr. Michael Johnson is a caring and experienced Pediatrician, dedicated to ensuring the health and well-being of children. He believes in building strong relationships with families to provide comprehensive and compassionate pediatric care.',
    },
    {
      id: 4,
      name: 'Dr. Emily White',
      specialization: 'Dermatologist',
      imageSrc: d7,
      bio: 'Dr. Emily White is a Dermatologist committed to helping patients achieve healthy and radiant skin. She combines medical expertise with a personalized approach, offering a wide range of dermatological services.',
    },
    {
      id: 5,
      name: 'Dr. Robert Brown',
      specialization: 'Neurologist',
      imageSrc: d2,
      bio: 'Dr. Robert Brown is a Neurologist specializing in the diagnosis and treatment of neurological disorders. With a focus on patient-centered care, he employs the latest advancements in neurology to improve the lives of his patients.',
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Meet Our Doctors</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {doctorsData.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>
    </div>
  );
};

const DoctorCard = ({ doctor }) => (
  <div className="bg-white rounded-md shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
    <img
      src={doctor.imageSrc}
      alt={doctor.name}
      className="w-full h-48 object-cover rounded-t-md md:h-64 object-center "
    />
    <div className="p-4">
      <h2 className="text-xl font-bold text-gray-800 mb-2">{doctor.name}</h2>
      <p className="text-gray-600">{doctor.specialization}</p>
      <p className="text-gray-700 mt-2">{doctor.bio}</p>
    </div>
  </div>
);

export default Doctors;
