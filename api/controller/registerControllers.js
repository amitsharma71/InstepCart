const expressAsyncHandler = require("express-async-handler");
const dotenv = require("dotenv");

dotenv.config();

const UserRegister = expressAsyncHandler(async (req, res) => {
  res.send("posteed");
});

module.exports = { UserRegister };
