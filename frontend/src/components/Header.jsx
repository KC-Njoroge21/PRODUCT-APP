import React from 'react'
import { GoPlus } from "react-icons/go";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='flex justify-between items-center p-4 bg-gray-800 text-white'>
      <h3 className="text-sm md:text-xl font-bold">PRODUCT STORE</h3>
      <div>
        <Link to="/create">
        <button className='flex items-center gap-2 bg-blue-500 text-white text-sm md:text-xl p-2 rounded hover:bg-blue-600'>
          <GoPlus size={20} />Create Product
        </button>
        </Link>
        
      </div>
    </header>
  )
}

export default Header