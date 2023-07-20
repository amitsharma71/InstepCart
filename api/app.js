const express = require("express");
const server = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const { App } = require("realm");
const mongoose = require("mongoose");
const User = require("./models/RegisterSchema");
const jwt = require("jsonwebtoken");
const secretkey = "secretkey";
const dotenv = require("dotenv");

dotenv.config();

const DB =
  "mongodb+srv://noutiyalgopal:MDgopal87@cluster0.mo1orsr.mongodb.net/instepcart-backend?retryWrites=true&w=majority";
mongoose
  .connect(DB)
  .then(() => {
    console.log(`connection is success`);
  })
  .catch((err) => console.log(`no connection`, err));

server.use(cors());
server.use(bodyParser.json());

server.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const data = new User({
    username: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const dataToSave = await data.save();
    res.status(200).send({ success: true });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

//login api
server.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const UserEmail = await User.find({ email: email });

  if (!UserEmail) {
    res.send({ loginStatus: false, err: "User Dose not Exist" });
  } else if (UserEmail) {
    const LoginVeryfy =
      UserEmail[0]?.email === email && UserEmail[0]?.password === password;
    if (LoginVeryfy) {
      const token = jwt.sign({ user: UserEmail }, secretkey, {
        expiresIn: "8h",
      });

      res.json({ loginStatus: LoginVeryfy, tokenuigiugitygtyigtyi: token });
      console.log(token, "okkkkkk");
    } else if (!LoginVeryfy) {
      res.send({ loginStatus: false, err: "Password Dose not match" });
    }
  }
});

const PORT = process.env.PORT || 6000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
