import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';
import { useProductStore } from '../store/Products';


const Home = () => {

   const [isModelOpen, setIsModelOpen] = useState(false);


  const { products, getProducts } = useProductStore(); 

  useEffect(() => {
    getProducts();
  }, [getProducts])

  return (
    <section className=''>

 

      <h1 className='text-xl font-semibold p-2 text-center'>{products.length <= 0 ? "No products available" : "Available Products"}</h1>

      <div className='flex flex-wrap gap-4 justify-center '>
        {
          products.map((item, index) => {
            return (
              <ProductCard key={index} item={item} isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen} />
            )
          })
        }
      </div>
    </section>
  )
}

export default Home