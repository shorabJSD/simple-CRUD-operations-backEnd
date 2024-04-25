const express = require("express");
const mongoose = require('mongoose');
const Products = require('./models/productModel')
const productsRouter = require("./routes/ProductRouter.js")
const app = express();
app.use(express.json());



//password:sumiakka5577
const PORT = 7000;

//add router;
app.use("/api/products", productsRouter)
 


app.get("/", (req, res)=>{
  res.send("Hello i am sourov akka from Node js");
});



//connecting mongodb;
mongoose.connect('mongodb+srv://akkasourov:sourovakka503068@cluster0.fvpgq18.mongodb.net/eCommerce?retryWrites=true&w=majority')
  .then(() => {
    console.log('Connected successfully with mongodb!');
    app.listen(PORT, () => console.log(`server is running port on ${PORT}`));
  })
  .catch((error) => console.error('Connection error:', error));
