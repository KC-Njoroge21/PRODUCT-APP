import express from 'express';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import Product from './model/productModel.js';
import mongoose from 'mongoose';

dotenv.config();

const app = express();

app.use(express.json());


app.get("/api/products/:id", async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({success: false, message: "Invalid product ID"});
  }

  try {
    const selectedProduct =await Product.findById(id);
    res.status(200).json({success: true, message: "Product fetched successfully", data: selectedProduct});
  } catch (error) {
    res.status(500).json({success: false, message: "Failed to fetch product"});
    console.error(error);
  }
})

app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({success: true, message: "Products fetched successfully", data: products});
  } catch (error) {
    res.status(500).json({success: false, message: "Failed to fetch products"});
    console.error(error);
  }
})

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

app.delete("/api/products/:id", async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({success: false, message: "Invalid product ID"});
  }

  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({success: true, message: "Product deleted successfully"});
  } catch (error) {
    res.status(500).json({success: false, message: "Failed to delete product"});
    console.error(error);
  }
})

app.put("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({success: false, message: "Invalid product ID"});
  }

  try {
    await Product.findByIdAndUpdate(id, product, {new: true});
    res.status(200).json({success: true, message: "Product updated successfully"});
  } catch (error) {
    res.status(500).json({success: false, message: "Failed to update product"});
    console.error(error);
  }
})

connectDB().then(() => {
  app.listen(5000, (req, res) => {
  console.log('Server is running on port 5000');
});
})

// SDzytvkCqQeVhLqQ