import React, { useState } from "react";
import { useProductStore } from "../store/Products";

import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

const ProductCard = (props) => {

  const [updatedProduct, setUpdatedProduct] = useState(props.item);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { deleteProduct } = useProductStore();

  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
  };

  const toogleModal = () => {
    props.setIsModelOpen(!props.isModelOpen);
  };

  return (
    <div className="flex flex-col gap-2 p-4 hover:border hover:border-blue-500 rounded-md shadow-md w-1/3 min-w-70 my-4">
      <div>
        <img src={props.item.image} alt="Product Image" />
      </div>
      <div>
        <h4>{props.item.name}</h4>
        <h4>${props.item.price.toFixed(2)}</h4>
      </div>
      <div className="flex gap-2">
        <button
          onClick={onOpen}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 mt-4 font-semibold w-full cursor-pointer"
        >
          Edit
        </button>
        <button
          onClick={() => {
            handleDeleteProduct(props.item._id);
          }}
          className="bg-red-500 text-white p-2 rounded hover:bg-red-600 mt-4 font-semibold w-full cursor-pointer"
        >
          Delete
        </button>
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent>
          <ModalHeader>Update Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form
              className="p-4 flex flex-col gap-3 w-1/2 mx-auto min-w-70 rounded-lg shadow-md "
              action=""
              
            >
              <div className="flex flex-col gap-2 ">
                <label className="font-semibold" htmlFor="name">
                  Name
                </label>
                <input
                  className="p-2 outline-0 border border-gray-300 rounded-md"
                  type="text"
                  name="name"
                  id="name"
                  value={updatedProduct.name}
                 
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-semibold" htmlFor="price">
                  Price
                </label>
                <input
                  className="p-2 outline-0 border border-gray-300 rounded-md"
                  type="number"
                  name="price"
                  id="price"
                  value={updatedProduct.price}
                  
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-semibold" htmlFor="image">
                  Image
                </label>
                <input
                  className="p-2 outline-0 border-2 border-gray-600 rounded-md"
                  type="text"
                  name="image"
                  id="image"
                  value={updatedProduct.image}
                  
                />
              </div>

              <div className="flex flex-col gap-2 ">
                <label className="font-semibold" htmlFor="description">
                  Description
                </label>
                <textarea
                  className="p-2 outline-0 border border-gray-300 rounded-md"
                  name="description"
                  id="description"
                  cols="30"
                  rows="5"
                  value={updatedProduct.description}
                ></textarea>
              </div>
{/* 
              <div className="flex justify-center">
                <button
                  className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 mt-4 font-semibold w-full cursor-pointer"
                  type="submit"
                >
                  Update Product
                </button>
              </div> */}
            </form>
          </ModalBody>

          <ModalFooter >
            <Button colorScheme='blue' mr={3} >
              Update
            </Button>
            <Button variant='ghost' onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ProductCard;
