import React from 'react'

export default function ForgetPassword() {
  return <>
  <h1 className='text-3xl my-4'>
  Please enter your verification code
  </h1>
  <input
              type="email"
              id="email"
              name="email"
              className="me-5 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-md focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
              placeholder="Email...."
              required
            />
  
  <button
              type="button"
              className="my-5 w-1/6 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-6 py-3 me-2 mb-2"
            >
              Verify
            </button>
  </>
    
  
}
