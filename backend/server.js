import express from 'express';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import Product from './model/productModel.js';

dotenv.config();

const app = express();

app.use(express.json());

app.post("/api/products", async (req, res) => {
  const product = req.body;

  if (!product.name || !product.price || !product.description) {
    return (
      res.status(400).json({ message: "Please provide all required fields" })
    )
  }

  const newProduct = new Product(product);

  try {
    const savedProduct = await newProduct.save();
    res.status(201).json({success: true, data: savedProduct, message: "Product created successfully"});
  } catch (error) {
    res.status(500).json({success: false, message: "Failed to create product"});
    console.error(error);
  }

})

connectDB().then(() => {
  app.listen(5000, (req, res) => {
  console.log('Server is running on port 5000');
});
})

// SDzytvkCqQeVhLqQ