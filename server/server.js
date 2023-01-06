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

// portfolio email msg--->
// const nodemailer = require("nodemailer");
// -----|

app.post("/user-message", async (req, res) => {
  console.log(req.body);

  try {
    // let transporter = nodemailer.createTransport({
    //   service: "gmail",
    //   auth: {
    //     user: "ganrajportfolio@gmail.com",
    //     pass: "ganeshghadgeportfolio",
    //   },
    // });

    // const mailOptions = {
    //   from: "ganrajportfolio@gmail.com",
    //   to: "ganrajp036956@gmail.com",
    //   subject: "Portfolio Contact Msg",
    //   text: `user name: ${req.body.name},
    //   \nEmail: ${req.body.email}, \nMessage: ${req.body.message}`,
    // };

    const user = new UsersMsg({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    });

    const userMessage = await user.save();

    if (userMessage) {
      res.status(201).json({ message: "Your Message Is successfully Send" });

      // transporter.sendMail(mailOptions, (err, result) => {
      //   if (err) {
      //     console.log(err);
      //     res.json("Opps error occured");
      //   } else {
      //     res.json("thanks for e-mailing me");
      //   }
      // });
    }
  } catch (err) {
    console.log(err);
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server Started on Port ${process.env.PORT}`);
});
