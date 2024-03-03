import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/adminSlice.js";
import { useNavigate } from "react-router-dom";

const AdminNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.admin);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handlelogout = () => {
    localStorage.removeItem("token");
    dispatch(logout());
    navigate("/");
  };

  return (
    <div>
      <div className="bg-blue-500 p-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-white text-3xl font-bold">
            <Link to={"/admin"}>My clinic</Link>
          </h1>
        </div>
        <div className="hidden md:flex space-x-4">
          <ul className="flex space-x-4">
            <Link
              to={"/getdoctors"}
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Doctors
            </Link>
            <Link
              to={"/getpatients"}
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Patients
            </Link>
            
          </ul>
          <button
            className="text-white hover:text-gray-300 transition duration-300 "
            onClick={handlelogout}
          >
            Logout
          </button>
        </div>
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <AiOutlineMenu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-500 p-4">
          <ul className="flex flex-col space-y-2">
            <Link
              to={"/getdoctors"}
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Doctors
            </Link>
            <Link
              to={"/getpatients"}
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Patients
            </Link>
            
          </ul>
          <button className="text-white mt-2 hover:text-gray-300 transition duration-300">
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminNavbar;
