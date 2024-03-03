const express=require('express');
const { appoinmentsfunction } = require('../Controllers/user.controller');
const router=express.Router();

router.post('/bookingappointment',appoinmentsfunction);











module.exports =router;