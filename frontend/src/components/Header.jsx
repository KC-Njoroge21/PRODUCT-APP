import React from 'react'
import { GoPlus } from "react-icons/go";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='flex justify-between items-center p-4 bg-gray-800 text-white'>
      <h3>PRODUCT STORE</h3>
      <div>
        <Link to="/create">
        <button className='flex items-center gap-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600'>
          <GoPlus size={25} />Create Product
        </button>
        </Link>
        
      </div>
    </header>
  )
}

export default Header