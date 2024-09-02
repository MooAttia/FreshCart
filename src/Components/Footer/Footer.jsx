import React from 'react';
import style from './Footer.module.css';

export default function Footer() {
  return (
    <div className="bg-gray-200 w-full py-4">
      <div className="container pb-11 mx-auto">
        <div className='pb-10'>
          <h2 className='text-3xl font-semibold py-5'>Get the FreshCart app</h2>
          <p className='text-gray-400 pb-2'>Download the FreshCart app to get the best shopping experience</p>
          <div className='flex justify-center items-center'>
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
              className="w-1/6 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-6 py-3 me-2 mb-2"
            >
              Share App Link
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
