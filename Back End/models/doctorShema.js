const mongoose = require("mongoose");

const doctorshema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
      unique: true,
    },
    department: {
      type: String,
      required: true,
    },

    appoinments: [
      {
        patientname: {
          type: String,
          required: true,
        },
        date: {
          type: String,
          required: true,
        },
        time: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);
const DOCTOR = mongoose.model("DOCTOR", doctorshema);
module.exports = DOCTOR;
