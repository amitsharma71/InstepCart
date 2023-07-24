const mongoose = require("mongoose");


const productsjson=[
      {
        "categories": "Electronics",
        "subcategories": ["Smartphone", "Laptop", "Speaker"],
        "brands": ["Apple", "Samsung", "Dell", "Sony", "Bose"]
      },
      {
        "categories": "Men",
        "subcategories": ["Men's Clothing",  "Footwear", "Glasses"],
        "brands": ["Nike", "Adidas", "Levi's", "Ray-Ban", "Puma"]
      },
      {
        "categories": "Women",
        "subcategories": ["Women's Clothing", "Footwear", "Glasses"],
        "brands": ["Zara", "Gucci", "H&M", "Prada", "Jimmy Choo"]
      },
      {
        "categories": "Home & Kitchen",
        "subcategories": ["Kitchen & Dining",  "Decor"],
        "brands": ["KitchenAid", "Cuisinart", "IKEA", "H&M Home", "West Elm"]
      },
      {
        "categories": "Sports & More",
        "subcategories": ["Sports",  "Health & Wellness"],
        "brands": ["Nike", "Under Armour", "Reebok", "Adidas", "Fitbit"]
      },
      {
        "categories": "APPLIANCES",
        "subcategories": ["Aircooler",  "Room Heaters"],
        "brands": ["Honeywell", "Dyson", "Bajaj", "Philips", "Vornado"]
      }
    ]

    // const  productsjson=mongoose.model("productsjson",productsjson)

module.exports=productsjson;