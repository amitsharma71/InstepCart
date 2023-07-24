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
const userproducts = require("./models/ProductsSchema");
const categorytable = require("./models/categorytable");
const productsjson =require("./home")
dotenv.config();

const DB =
  // "mongodb+srv://amit71instep:Amit123@cluster0.kmujczi.mongodb.net/?retryWrites=true&w=majority";
  "mongodb+srv://noutiyalgopal:MDgopal87@cluster0.mo1orsr.mongodb.net/instepcart-backend?retryWrites=true&w=majority";

mongoose
  .connect(DB)
  .then(() => {
    console.log(`connection is mongoose  success`);
  })
  .catch((err) => console.log(`no connection`, err));

server.use(cors());
server.use(bodyParser.json());

//register api
server.post("/api/register", async (req, res) => {
  const { name, email, password } = req.body;

  const role = "user"; 
  const data = new User({
    username: req.body.name,
    email: req.body.email,
    password: req.body.password,
    role: role,
  });

  try {
    const useremail = await User.findOne({ email: email });

    if (useremail) {
      res
        .status(200)
        .send({ success: false, msg: "this email is already exists" });
    } else {
      const dataToSave = await data.save();
      res.status(200).send({ success: true });
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

//login api
server.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  const UserEmail = await User.find({ email: email });

  if (!UserEmail) {
    res.send({ loginStatus: false, err: "User Dose not Exist" });
  } else if (UserEmail) {
    const LoginVeryfy =
      UserEmail[0]?.email === email && UserEmail[0]?.password === password;
    if (LoginVeryfy) {
      const token = jwt.sign({ userEmail: UserEmail[0]?.email,userRole: UserEmail[0]?.role, userName: UserEmail[0]?.username }, secretkey, {
        expiresIn: "8h",
      });

      res.json({ loginStatus: LoginVeryfy, tokenuigiugitygtyigtyi: token });
      console.log(token, "okkkkkk");
    } else if (!LoginVeryfy) {
      res.send({ loginStatus: false, err: "Password Dose not match" });
    }
  }
});

//api of products addd
server.post("/api/products", async (req, res) => {
  const { category, description, title, price, image,brand, rating,subcategory, thumbnail,stock,discountPercentage} = req.body;

  const data = new userproducts({
    category: req.body.category,
    description: req.body.description,
    title: req.body.title,
    price: req.body.price,
    image: req.body.image,
    brand: req.body.brand,
    rating: req.body.rating,
    subcategory:req.body.subcategory,
    thumbnail:req.body.subcategory,
    stock:req.body.stock,
    discountPercentage:req.body.discountPercentage,
  });
  try {
    const dataToSave = await data.save();
    res.status(200).send({ success: true });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});
//api of products all

server.get("/api/Getproducts", async (req, resp) => {
  console.log(req, resp, "console.log");
  let products = await userproducts.find();

  if (products.length > 0) {
    resp.send(products);
  } else {
    resp.send({ result: "no products found" });
  }
});

//table addd api category

// server.post("/api/addproducts", async (req, res) => {
//   const { name } = req.body;

//   const arr = req.body.categoryData;
//   console.log(arr, "aaa");
//   categorytable.insertMany(arr);

 
//   try {
//     // const dataToSave = await data.save();
//     res.status(200).send({ success: true });
//   } catch (error) {
//     res.status(400).send({ message: error.message });
//   }
// });
 
///   category  api  next plain 


server.post("/api/category",async(req,res)=>{
  
 
try {
  res.send(productsjson)
} catch (error) {
  
  res.status(400).send({ message: error.message });
}

})





const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
