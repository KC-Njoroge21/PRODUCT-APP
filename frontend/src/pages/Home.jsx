import React, { useEffect } from 'react'
import ProductCard from '../components/ProductCard';
import { useProductStore } from '../store/Products';

const Home = () => {

  const { products, getProducts } = useProductStore(); 

  useEffect(() => {
    getProducts();
  }, [getProducts])

  return (
    <section>
      <h1 className='text-xl font-semibold text-center'>{products.length <= 0 ? "No products available" : "Available Products"}</h1>

      <div>
        {
          products.map((item, index) => {
            return (
              <ProductCard key={index} item={item} />
            )
          })
        }
      </div>
    </section>
  )
}

export default Home