const mongoose = require("mongoose");

const categorytableschema = new mongoose.Schema({
  name: {
    type: String,
  },  
});
categorytableschema.set("categorytableschema",true)
const  categorytable=mongoose.model("categorytable",categorytableschema)

module.exports=categorytable;