const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
    {
        name:{
         type:String,
         require:[true, "Please enter product name!"]
        },
        quantity:{
            type:Number,
            require:true,
            default:0
        },
        price:{
        type:Number,
        require:true,
        default:0
        }
    },
    {
     timestamps:true,
    },
);

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;