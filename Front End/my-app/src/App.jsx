import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Doctors from "./components/Doctors";
import Contact from "./components/Contact";
import AdminLogin from "./components/AdminLogin";
import AdminNavbar from "./components/AdminNavbar";

import { useSelector } from "react-redux";
import AdminDashboard from "./components/AdminDashboard";
import GetDoctors from "./components/GetDoctors";
import GetPatients from "./components/GetPatients";
import Appointments from "./components/Appointments";
function App() {
  const { currentUser } = useSelector((state) => state.admin);

  return (
    <>
      <Router>
        {currentUser ? (
          <>
            <AdminNavbar />
            <Routes>
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/getdoctors" element={<GetDoctors />} />
              <Route path="/getpatients" element={<GetPatients />} />
              <Route path="/appointments" element={<Appointments />} />
            </Routes>
          </>
        ) : (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/doctors" element={<Doctors />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/adminlogin" element={<AdminLogin />} />
            </Routes>
          </>
        )}
      </Router>
    </>
  );
}

export default App;
