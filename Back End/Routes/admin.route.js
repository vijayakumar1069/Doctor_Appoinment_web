const express=require('express');
const verifyAdmin=require("../middleware/verifyAdmin.js")
const { loginfunction, addingDoctor, getingDoctorDetails, patientDetails } = require('../Controllers/admin.controller');
const adminrouter=express.Router();

adminrouter.post("/login",loginfunction)
adminrouter.post("/addDoctor",addingDoctor)
adminrouter.get("/gettingdcotordetails/:id",verifyAdmin,getingDoctorDetails)
adminrouter.get("/gettingpatientdetails/:id",verifyAdmin,patientDetails)

module.exports=adminrouter;