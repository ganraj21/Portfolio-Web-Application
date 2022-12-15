const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./userModel");
require("dotenv").config({ path: "./.env" });

const app = express();
app.use(cors());
app.use(express.json());

const MONGO_URL = process.env.MONGO_URL;
mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connection Successfully");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.post("/", async (req, res) => {
  console.log(req.body);

  try {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    });

    const userMessage = await user.save();

    if (userMessage) {
      res.status(201).json({ message: "Your Message Is successfully Send" });
    }
  } catch (err) {
    console.log(err);
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server Started on Port ${process.env.PORT}`);
});
