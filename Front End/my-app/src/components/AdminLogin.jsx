import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginstart } from "../redux/adminSlice.js";

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(false); // Clear the error message when user starts typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await fetch(`http://localhost:3000/api/admin/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const res = await result.json();
      if (res.success === false) {
        setError(res.message);
        return;
      }
      const token = res.token;
      dispatch(loginstart(res.adminacc));
      localStorage.setItem("token", token);
      setFormData({ email: "", password: "" });
      navigate("/admin");
    } catch (error) {
      setError("An error occurred during login. Please try again.");
      console.log(error);
    }
  };

  return (
    <div className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 min-h-screen flex justify-center items-center">
      <div className="w-full max-w-md bg-white rounded-md p-8 shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Admin Login
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-100"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-100"
              required
            />
          </div>

          {error && (
            <div className="mb-4 text-red-500 text-center">{error}</div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
