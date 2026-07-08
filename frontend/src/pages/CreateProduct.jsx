import React, { useState } from "react";

const CreateProduct = () => {

  const [productData, setProductData] = useState({
    name: "",
    price: "",
    description: "",
  })

  const handleCreateProduct = (e) => {
    e.preventDefault();
    // Handle product creation logic here
    console.log("Product Data:", productData);
  }

  return (
    <section className="bg-gray-100 h-full lg:h-screen">
      <div className="p-4">
        <h3 className="text-xl font-bold text-center">Create Product</h3>
      </div>

      <form className="p-4 flex flex-col gap-3 w-1/2 mx-auto min-w-70 rounded-lg shadow-md bg-white" action="" onSubmit={handleCreateProduct}>

        <div className="flex flex-col gap-2">
          <label className="font-semibold" htmlFor="name">Name</label>
          <input className="p-2 outline-0 border rounded-md" type="text" name="name" id="name" value={productData.name} onChange={(e) => {setProductData({...productData, name: e.target.value})}} />   
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold" htmlFor="price">Price</label>
          <input className="p-2 outline-0 border rounded-md" type="number" name="price" id="price" value={productData.price} onChange={(e) => {setProductData({...productData, price: e.target.value})}}/>   
        </div>

        <div className="flex flex-col gap-2 ">
          <label className="font-semibold" htmlFor="description">Description</label>
          <textarea className="p-2 outline-0 border rounded-md" name="description" id="description" cols="30" rows="5" value={productData.description} onChange={(e) => {setProductData({...productData, description: e.target.value})}} ></textarea> 
        </div>

        <div className="flex justify-center">
          <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 mt-4 font-semibold w-full cursor-pointer" type="submit">Create Product</button>
        </div>
      </form>
    </section>
  );
};

export default CreateProduct;
