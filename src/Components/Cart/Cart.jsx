import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../Context/CartContext';
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { getCart, cart, updateProductCount, removeProduct } = useContext(CartContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function fetchCart() {
      setLoading(true);
      getCart();
      setLoading(false);
    }
    fetchCart();
  }, []);

  return (
    <>
      <h1 className="text-3xl text-green-500 text-center py-3">Cart</h1>
      <hr className='pb-4 w-56 mx-auto' />
      {loading ? (
        <div className='flex justify-center py-20'>
          <Loading />
        </div>
      ) : cart ? (
        <div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-4">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-16 py-3">
                    <span className="sr-only">Image</span>
                  </th>
                  <th scope="col" className="px-6 py-3">Product</th>
                  <th scope="col" className="px-6 py-3">Qty</th>
                  <th scope="col" className="px-6 py-3">Price</th>
                  <th scope="col" className="px-6 py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.data.products.map((product) => (
                  <tr key={product.product.id} className="bg-white border-b hover:bg-gray-50">
                    <td className="p-4">
                      <img src={product.product.imageCover} className='w-16 md:w-32 max-w-full max-h-full' alt={product.product.title} />
                    </td>
                    <td className="px-6 py-4 font-semibold dark:text-black">
                      {product.product.title}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <button onClick={() => updateProductCount(product.product.id, product.count - 1)} className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:text-black dark:border-green-500 dark:hover:bg-green-500 dark:hover:border-green-700 dark:focus:ring-green-700" type="button">
                          <span className="sr-only">Decrease quantity</span>
                          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
                          </svg>
                        </button>
                        <span>{product.count}</span>
                        <button onClick={() => updateProductCount(product.product.id, product.count + 1)} className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:text-black dark:border-green-500 dark:hover:bg-green-500 dark:hover:border-green-700 dark:focus:ring-green-700" type="button">
                          <span className="sr-only">Increase quantity</span>
                          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                          </svg>
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-semibold text-black dark:text-black">
                      {product.price} EGP
                    </td>
                    <td className="px-6 py-4">
                      <button onClick={() => removeProduct(product.product.id)} className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className='text-xl text-black my-2 font-semibold'>
                  <td colSpan={3} className='p-2'>Total Cart Price</td>
                  <td>{cart.data.totalCartPrice}</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <Link to={'/checkout'} className='bg-green-500 rounded-md text-center text-white p-2 m-2'>Checkout</Link>
        </div>
      ) : 'Cart is empty'}
    </>
  );
}
