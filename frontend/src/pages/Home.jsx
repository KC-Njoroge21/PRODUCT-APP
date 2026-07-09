import React from 'react'
import ProductCard from '../components/ProductCard';

const Home = () => {

  const { products, getProducts } = useProductStore(); 

  useEffect(() => {
    getProducts();
  }, {getProducts})

  return (
    <section>
      <h1>Products</h1>

      <div>
        {
          products.map((item, index) => {
            <ProductCard />
          })
        }
      </div>
    </section>
  )
}

export default Home