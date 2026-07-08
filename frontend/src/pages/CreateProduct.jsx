import React from "react";

const CreateProduct = () => {
  return (
    <section className="bg-gray-100 h-screen">
      <div className="p-4">
        <h3 className="text-xl font-bold text-center">Create Product</h3>
      </div>
      <form className="p-4 flex flex-col gap-3 w-1/2 mx-auto min-w-70 rounded-lg shadow-md bg-white" action="">
        <div className="flex flex-col gap-2">
          <label className="font-semibold" htmlFor="name">Name</label>
          <input className="p-2 outline-0 border rounded-md" type="text" name="name" id="name" />   
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold" htmlFor="price">Price</label>
          <input className="p-2 outline-0 border rounded-md" type="number" name="price" id="price" />   
        </div>
        <div className="flex flex-col gap-2 ">
          <label className="font-semibold" htmlFor="description">Description</label>
          <textarea className="p-2 outline-0 border rounded-md" name="description" id="description" cols="30" rows="5"></textarea> 
        </div>
      </form>
    </section>
  );
};

export default CreateProduct;
