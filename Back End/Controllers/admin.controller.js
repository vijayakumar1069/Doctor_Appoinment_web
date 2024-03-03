const jwt = require("jsonwebtoken");
const ADMIN = require("../models/adminshema.js");
const DOCTOR = require("../models/doctorShema.js");
const errorHandler = require("../middleware/errorHandles.js");
const bcrypt = require("bcrypt");
const PATIENT = require("../models/patientSchema.js");

const loginfunction = async (req, res, next) => {
  const { email, password } = req.body;
  console.log(email, password);
  if (!email || !password) {
    return next(errorHandler(401, "email and password required"));
  }
  const adminacc = await ADMIN.findOne({ email });
  if (!adminacc) {
    return next(errorHandler(404, "Admin not found"));
  }

  const passwordchecking = bcrypt.compareSync(password, adminacc.password);
  if (!passwordchecking) {
    return next(errorHandler(401, "Wrong Email Or Password"));
  }
  const token = jwt.sign({ id: adminacc._id }, process.env.JWT_KEY);
  res.status(200).json({ adminacc, token });
};

const addingDoctor = async (req, res, next) => {
  try {
    const { name, id, department } = req.body;
    if (!name || !id || !department) {
      return next(errorHandler(404, "please fill above details "));
    }
    const doctacc = await DOCTOR.findOne({ id });
    if (doctacc) {
      return next(errorHandler(404, "this Doctor already in  Database  "));
    }
    const newdoc = new DOCTOR({
      name,
      id,
      department,
    });
    await newdoc.save();
    res.status(200).json(newdoc);
  } catch (error) {
    next(error);
  }
};
const getingDoctorDetails = async (req, res, next) => {
  if (req.user != req.params.id) {
    return next(errorHandler(404, "your not authorized to access this page "));
  }
  const doctordetails = await DOCTOR.find();

  res.status(200).json({ doctordetails });
};
const patientDetails = async (req, res, next) => {
  if (req.user != req.params.id) {
    return next(errorHandler(404, "your not authorized to access this page "));
  }
  const result = await PATIENT.find();
  console.log(result);

  res.status(200).json({ result });
};

module.exports = {
  loginfunction,
  addingDoctor,
  getingDoctorDetails,
  patientDetails
};
