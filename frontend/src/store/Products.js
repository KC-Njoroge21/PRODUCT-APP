import {create} from 'zustand'

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.price || !newProduct.description) {
      return {success: false, message: "Please provide all required fields: name, price, and description."}
    }

     try {
      const res = await fetch("http://localhost:5000/api/products", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newProduct)
      });
      const data = await res.json();
      set((state) => ({products: [...state.products, data.data]}))
      return {success: true, message: "Product created successfully", data: data.data}
    } catch (error) {
      console.error(error);
      return {success: false, message: "Failed to create product"}
    }
    
    
  }
}))