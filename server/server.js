const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const UsersMsg = require("./UserModel");
require("dotenv").config({ path: "./.env" });

const app = express();
app.use(cors());
app.use(express.json());

// portfolio email msg--->
const nodemailer = require("nodemailer");
// -----|

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

  try {
    // connect with the SMTP server
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.USER_PASS,
      },
    });

    const user = new UsersMsg({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    });

    let info = await transporter.sendMail({
      from: '"Ganraj21 Portfolio " <ganesh@gmail.com>', // sender address
      to: "ganrajp036956@gmail.com", // list of receivers
      subject: "Contact Msg From Portfolio --->", // Subject line
      text: "Ganesh you have msg from some one", // plain text body
      html: `<p>${user}</p>`, // html body
    });
    const userMessage = await user.save();

    if (userMessage) {
      console.log("Message sent: %s", info.messageId);
      res.status(201).json({ message: "Your Message Is successfully Send" });
    }
  } catch (err) {
    console.log(err);
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server Started on Port ${process.env.PORT}`);
});
