import React, { useState } from 'react'
import { HiOutlineBellAlert } from "react-icons/hi2";

const RateLimiter = () => {



  return (
    <div className='flex items-center'>
      <div>
        <HiOutlineBellAlerts size={20} />
      </div>
      <div>
        <h2 className='font-semibold text-xl'>Rate Limit Reached</h2>
        <h3>You've made too many requests in a short period. Please wait a moment</h3>
        <h5>Try again in a few seconds for the best experience.</h5>
      </div>
    </div>
  )
}

export default RateLimiter