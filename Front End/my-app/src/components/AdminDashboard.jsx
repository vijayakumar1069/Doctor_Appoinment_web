import React from "react";
import { Link } from "react-router-dom"; // If you're using React Router

const AdminDashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 shadow-md rounded-md">
          <h2 className="text-xl font-semibold mb-2">Total Patients</h2>
          <p className="text-gray-700">1000</p>
        </div>

        <div className="bg-white p-4 shadow-md rounded-md">
          <h2 className="text-xl font-semibold mb-2">Appointments Today</h2>
          <p className="text-gray-700">50</p>
        </div>

        {/* Add more quick stats cards based on your data */}

        <div className="bg-white p-4 shadow-md rounded-md">
          <h2 className="text-xl font-semibold mb-2">Total Revenue</h2>
          <p className="text-gray-700">$10,000</p>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Recent Activities</h2>
        <ul className="list-disc list-inside">
          <li>User A booked an appointment.</li>
          <li>User B canceled an appointment.</li>
          {/* Add more recent activities based on your data */}
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-4 mb-8">
        <Link
          to="/manage-doctors"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Manage Doctors
        </Link>
        <Link
          to="/manage-patients"
          className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
        >
          Manage Patients
        </Link>
        {/* Add more action buttons based on your routes */}
      </div>

      {/* Calendar or Schedule */}
      <div className="bg-white p-4 shadow-md rounded-md mb-8">
        <h2 className="text-xl font-bold mb-2">Schedule</h2>
        {/* Add a calendar or schedule component here */}
      </div>

      {/* Notifications or Alerts */}
      <div className="bg-white p-4 shadow-md rounded-md">
        <h2 className="text-xl font-bold mb-2">Notifications</h2>
        {/* Add a notifications or alerts component here */}
      </div>
    </div>
  );
};

export default AdminDashboard;
