import toast from "react-hot-toast";
import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.price || !newProduct.description) {
      toast.error(
        "Please provide all required fields: name, price and description.",
      );
      return {
        success: false,
        message:
          "Please provide all required fields: name, price, and description.",
      };
    }

    try {
      const res = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });
      const data = await res.json();
      set((state) => ({ products: [...state.products, data.data] }));
      toast.success("Product created successfully");
      return {
        success: true,
        message: "Product created successfully",
        data: data.data,
      };
    } catch (error) {
      console.error(error);
      toast.error("Failed to create product");
      return { success: false, message: "Failed to create product" };
    }
  },
  getProducts: async () => {
    try {
      const res = await fetch("http://localhost:5000/api/products");
      const data = await res.json();
      set({ products: data.data });
      return {success: true, message:"Products fetched successfully", data: data.data};
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch products");
      return {success: false, message: "Failed to fetch products"};
    }
  },
  deleteProduct: async (pid) => {
    const res = await fetch(`http://localhost:5000/api/products/${pid}`, {
      method: "DELETE"
    });
    const data = await res.json();

    if (!data.success) {
      toast.error(data.message);
      return {success: false, message: data.message}
    }

    set((state) => ({products: state.products.filter((product) => {
      return (
        product._id !== pid
      )
    })}))
    toast.success(data.message);
    return {success: true, message: "Product deleted successfully"};
  }
}));
