import UserRegisterSchema from "../models/RegisterSchema";
const expressAsyncHandler = require("express-async-handler");
const dotenv = require("dotenv");

dotenv.config();

const UserRegister = expressAsyncHandler(async (req, res) => {
  const { Name, Email, Password } = req.body;

  const data = new UserRegisterSchema({
    Name: req.body.Name,
    Email: req.body.Email,
    Password: req.body.Password,
  });
  try {
    const dataToSave = await data.save();
    res.status(200).send({ success: true });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
  // console.log("the gopal useerreqister")
  // res.send("posteed");
});

module.exports = { UserRegister };
