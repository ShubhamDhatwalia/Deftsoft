import React from 'react'

export const Leaves = () => {
  return (
    <div className='h-screen ml-3'>
      <div className='border-2 pt-6'>
      <p className='font-bold'>Apply for leaves</p>
      <p className=''>You have 8 and 1 optional leave in your account</p>
      </div>
      <div className='mt-6 border-2'>
      <div>Leave Type</div>
      <input type="radio" value="Leave" />
      <label htmlFor="Leave">Leave</label>
      </div>
    </div>
  )
}
