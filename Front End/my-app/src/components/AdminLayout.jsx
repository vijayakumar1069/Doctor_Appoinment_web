// AdminLayout.jsx
import React from "react";
import { Outlet, Routes, Route } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import AdminDashboard from "./AdminDashboard";
import GetDoctors from "./GetDoctors";
import GetPatients from "./GetPatients";
import Appointments from "./Appointments";

const AdminLayout = () => {
  return (
    <div>
      
       {/* Outlet for additional nested routes */}
    </div>
  );
};

export default AdminLayout;
