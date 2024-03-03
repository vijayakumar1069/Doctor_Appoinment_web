import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const GetPatients = () => {
  const [patientdetails, setPatientdetails] = useState([]);
  const [error, setError] = useState(false);
  const { currentUser } = useSelector((state) => state.admin);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetching = async () => {
      try {
        const fetchingdata = await fetch(
          `http://localhost:3000/api/admin/gettingpatientdetails/${currentUser?._id}`,
          {
            headers: {
              "content-type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await fetchingdata.json();
        console.log(data.result);
        if (data.success === false) {
          console.log(data.message);
          return setError(data.message);
        }
        setPatientdetails(data.result);
      } catch (error) {
        setError(error.message);
      }
    };
    fetching();
  }, [currentUser?._id, token]);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Patient Details</h1>
      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4">
          {error}
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Department</th>
              <th className="py-2 px-4 border-b">Appointment Time</th>
              <th className="py-2 px-4 border-b">Appointment Date</th>
              {/* Add more table headers based on your data */}
            </tr>
          </thead>
          <tbody>
            {patientdetails &&
              patientdetails.map((patient, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b">{patient.name}</td>
                  <td className="py-2 px-4 border-b">{patient.department}</td>
                  <td className="py-2 px-4 border-b">{patient.time}</td>
                  <td className="py-2 px-4 border-b">{patient.date}</td>
                  {/* Add more table data cells based on your data */}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GetPatients;
