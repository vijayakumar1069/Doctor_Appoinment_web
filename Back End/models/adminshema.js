const mongoose = require("mongoose");
const adminschema = new mongoose.Schema({
 
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  
});
const ADMIN=mongoose.model("ADMIN",adminschema);
module.exports = ADMIN;
