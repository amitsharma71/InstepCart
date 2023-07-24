const mongoose =require ("mongoose")

const ProductSchema= new mongoose.Schema({


      description: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
       brand: {
        type: String,
        required: false,
      },

      rating: {
        type: Array,
        required: false,
      }



})
ProductSchema.set("productsof",true)
const userproducts=mongoose.model("userproducts",ProductSchema)


module.exports =userproducts;