const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const UsersMsg = require('./UserModel');
require('dotenv').config({ path: './.env' });

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB Connection Successfully');
  })
  .catch((err) => {
    console.log(err.message);
  });

app.get('/', async (req, res) => {
  res.send('Your are runnung on server ');
});

app.post('/user-message', async (req, res) => {
  const { name, email, message } = req.body;
  const emailRegex = /\S+@\S+\.\S+/;
  const user = new UsersMsg({ name, email, message });

  if (!emailRegex.test(req.body.email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }
  console.log(user);
  const userMessage = await user.save();

  console.log(userMessage);
  if (userMessage) {
    res.status(201).json({
      message: `Your Message Is successfully Send`,
    });
  }
});

app.get('/user-backend', async (req, res) => {
  const userMessages = await UsersMsg.find();
  console.log(userMessages);
  res.json(userMessages);
});

app.listen(process.env.PORT, () => {
  console.log(`Server Started on Port ${process.env.PORT}`);
});
