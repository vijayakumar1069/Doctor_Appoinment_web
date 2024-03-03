const express = require("express");
const app = express();
const body_parser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const adminrouter = require("./Routes/admin.route.js");
const userRouter = require("./Routes/userroutes.js");
app.use(body_parser.json());
app.use(express.json());
app.use(cors());
const mongodb = mongoose
  .connect(process.env.URL)
  .then(() => {
    console.log("mongo db connected");
  })
  .catch((err) => {
    console.log("Error connecting", err);
  });
app.use("/api/admin", adminrouter);
app.use("/api/user",userRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(400).json({
    success: false,
    message,
    statusCode,
  });
});

app.listen(process.env.PORT, (req, res) => {
  console.log("listening on port", process.env.PORT);
});
