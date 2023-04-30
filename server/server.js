const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const UsersMsg = require("./UserModel");
require("dotenv").config({ path: "./.env" });

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connection Successfully");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.get("/", async (req, res) => {
  res.send("Your are runnung on server ");
});

app.post("/user-message", async (req, res) => {
  console.log(req.body);

  const user = new UsersMsg({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  });

  console.log(user);
  const userMessage = await user.save();

  if (userMessage) {
    res.status(201).json({ message: "Your Message Is successfully Send" });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server Started on Port ${process.env.PORT}`);
});
