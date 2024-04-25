
const Products = require("../models/productModel");


const createProducts = async (req, res)=>{
    try {
        const product = await Products.create(req.body);
        res.status(200).json(product);
       } catch (error) {
        res.status(500).json({error:error.message});
       }
}

const getProducts = async(req, res)=>{
    try {
        const products = await Products.find({});
        res.status(200).json(products);
        } catch (error) {
          res.status(500).json({error:error.message})
        }
}

const getSingleProduct = async(req, res)=>{
    try {
        const {id} = req.params;
        const product = await Products.findById(id);
        if (!product) {
          res.status(500).json("Product not found!");
        }
        res.status(200).json(product);
      } catch (error) {
        res.status(500).json({error:error.message});
      }
}

const updateProducts =async(req, res)=>{
    try {
        const {id} = req.params;
        const products = await Products.findByIdAndUpdate(id, req.body)
        if (!products) {
          res.status(500).json("didnt find any products");
        }
        
        const updateProduct = await Products.findById(id);
        res.status(200).json(updateProduct);
  
      } catch (error) {
        res.status(500).json({error:error.message})
      }
}

const deleteProduct = async (req, res)=>{
    try {
        const {id} = req.params;
        const product = await Products.findByIdAndDelete(id);
        if (!product) {
          res.status(500).json("Product not found!");
        }else{
          res.status(200).json("Product has completly deleted.");
        }
      } catch (error) {
        res.status(500).json({error:error.message});
      }
}


module.exports = {
   getProducts,
   getSingleProduct,
   createProducts,
   updateProducts,
   deleteProduct,
}