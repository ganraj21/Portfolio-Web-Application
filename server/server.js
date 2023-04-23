const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");
const UsersMsg = require("./UserModel");
require("dotenv").config({ path: "./.env" });

const app = express();
app.use(cors());
app.use(express.json());

// portfolio email msg--->
// const nodemailer = require("nodemailer");
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

  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let userpersonalmessage = {
    from: req.body.email, // sender address
    to: `ganrajp036956@gmail.com`, // list of receivers
    subject: "Personal message from Ganraj Portfolio", // Subject line
    text: req.body.message, // plain text body
    html: "<b>Hello world?</b>", // html body
  };

  const user = new UsersMsg({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  });

  console.log(user);
  // const userMessage = await user.save();

  transporter
    .sendMail(userpersonalmessage)
    .then((info) => {
      return res.status(201).json({
        msg: "Your message is successfully send to Ganesh Ghadge",
        info: info.messageId,
        preview: nodemailer.getTestMessageUrl(info),
      });
    })
    .catch((error) => {
      return res.status(500).json({ error });
    });

  // if (userMessage) {
  //   res.status(201).json({ message: "Your Message Is successfully Send" });
  // }
});

app.listen(process.env.PORT, () => {
  console.log(`Server Started on Port ${process.env.PORT}`);
});
