import React, { useState } from 'react'
import { HiOutlineBellAlert } from "react-icons/hi2";

const RateLimiter = () => {



  return (
    <div className='flex gap-6 shadow-lg p-4'>
      <div >
        <HiOutlineBellAlert size={30} className='text-green-500' />
      </div>
      <div>
        <h2 className=''>Rate Limit Reached</h2>
        <h3 className=''>You've made too many requests in a short period. Please wait a moment</h3>
        <h5>Try again in a few seconds for the best experience.</h5>
      </div>
    </div>
  )
}

export default RateLimiter