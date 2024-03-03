import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const GetDoctors = () => {
  const [formData, setFormData] = useState({
    name: "",
    id: "",
    department: "",
  });
  const [doctordetails, setDoctorDetails] = useState([]);
  const { currentUser } = useSelector((state) => state.admin);
  const [error, setError] = useState(false);
  const [added, setAdded] = useState("");
  const token = localStorage.getItem("token");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fetching = await fetch("http://localhost:3000/api/admin/addDoctor", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await fetching.json();
    if (data.success === false) {
      setError(data.message);
      setAdded(""); // Clear the success message if there was an error
    } else {
      setError("");
      setAdded("Doctor added successfully");
      setFormData({
        name: "",
        id: "",
        department: "",
      });
      // Fetch the updated doctor list after adding a new doctor
      fetchDoctorDetails();
    }
  };

  const fetchDoctorDetails = async () => {
    const fetchdata = await fetch(
      `https://doctor-appoinment-web.onrender.com/api/admin/gettingdcotordetails/${currentUser._id}`,
      {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await fetchdata.json();
    if (data.success === false) {
      console.log(data.message);
      setError(data.message);
    } else {
      setDoctorDetails(data.doctordetails);
    }
  };

  useEffect(() => {
    fetchDoctorDetails();
  }, [currentUser._id]);

  console.log(doctordetails);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Add Doctor</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-600"
          >
            Doctor's Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="id"
            className="block text-sm font-medium text-gray-600"
          >
            Doctor's ID
          </label>
          <input
            type="text"
            id="id"
            name="id"
            value={formData.id}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="department"
            className="block text-sm font-medium text-gray-600"
          >
            Department
          </label>
          <select
            id="department"
            name="department"
            value={formData.department}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            required
          >
            <option value="" disabled>
              Select Department
            </option>
            <option value="Cardiologist">Cardiologist</option>
            <option value="Orthopedic Surgeon">Orthopedic Surgeon</option>
            <option value="Pediatrician">Pediatrician</option>
            <option value="Dermatologist">Dermatologist</option>
            <option value="Neurologist">Neurologist</option>
          </select>
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          >
            Add Doctor
          </button>
        </div>
      </form>
      {error && (
        <div className="mb-4 text-red-500 text-center font-semibold">
          {error}
        </div>
      )}

      {added && (
        <div className="mb-4 text-green-500 text-center font-semibold">
          {added}
        </div>
      )}

      <h2 className="text-2xl font-bold mb-4">Doctor Details</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Department</th>
            </tr>
          </thead>
          <tbody>
            {doctordetails &&
              doctordetails.map((doctor) => (
                <tr key={doctor._id}>
                  <td className="py-2 px-4 border-b">{doctor.name}</td>
                  <td className="py-2 px-4 border-b">{doctor.id}</td>
                  <td className="py-2 px-4 border-b">{doctor.department}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GetDoctors;
