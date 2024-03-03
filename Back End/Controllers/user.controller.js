const DOCTOR = require("../models/doctorShema.js");
const errorHandler = require("../middleware/errorHandles.js");
const PATIENT = require("../models/patientSchema.js");

const ONE_HOUR = 60 * 60 * 1000; // 1 hour in milliseconds

const appoinmentsfunction = async (req, res, next) => {
  try {
    const { name, mobile, email, department, date, time } = req.body;
    console.log(name, mobile, email, department, date, time);

    if (!name || !mobile || !email || !department || !date || !time) {
      return next(errorHandler(404, "Fill in all the required details"));
    }

    const newPatient = new PATIENT({
      name,
      email,
      department,
      date,
      time,
      mobile,
    });

    await newPatient.save();

    const availableDoctors = await DOCTOR.find({ department });
    console.log(availableDoctors);

    if (availableDoctors.length > 0) {
      // Convert selected time to milliseconds
      const selectedTime = new Date(`${date} ${time}`).getTime();

      const isDoctorAvailable = availableDoctors.some((doctor) =>
        doctor.appoinments.every((appointment) => {
          // Convert stored appointment time to milliseconds
          const appointmentTime = new Date(
            `${appointment.date} ${appointment.time}`
          ).getTime();

          // Check if the selected time slot is available (no overlap with existing appointments)
          return (
            selectedTime < appointmentTime ||
            selectedTime >= appointmentTime + ONE_HOUR
          );
        })
      );

      console.log(isDoctorAvailable);

      if (isDoctorAvailable) {
        const selectedDoctor = availableDoctors.find((doctor) =>
          doctor.appoinments.every((appointment) => {
            const appointmentTime = new Date(
              `${appointment.date} ${appointment.time}`
            ).getTime();
            return (
              selectedTime < appointmentTime ||
              selectedTime >= appointmentTime + ONE_HOUR
            );
          })
        );

        // Book the appointment
        selectedDoctor.appoinments.push({
          patientname: name,
          date,
          time,
        });

        await selectedDoctor.save();

        res.status(200).json({ result: "Appointment booked successfully" });
      } else {
        res.status(200).json({
          result: "Doctor not available for the selected time slot",
        });
      }
    } else {
      res
        .status(200)
        .json({ result: "No doctors available in the selected department" });
    }
  } catch (error) {
    console.error(error);
    return next(errorHandler(500, "Internal Server Error"));
  }
};


module.exports = {
  appoinmentsfunction,
 
};
