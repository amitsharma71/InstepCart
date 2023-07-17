const express = require("express");
const dotenv = require("dotenv");
var cors = require("cors");
const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

dotenv.config();

app.post("/", (req, res) => {
  res.send("posteed");
});

app.post("/login", (req, res) => {
  res.send("login");
});
app.post("/register", (req, res) => {
  
  res.send({ succes: true });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
