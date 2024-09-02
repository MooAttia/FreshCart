import React, { useContext, useEffect, useState } from 'react';
import Loading from '../Loading/Loading';
import { WishContext } from '../Context/WishlistContext';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';

export default function Wishlist() {
  const [loading, setLoading] = useState(true);
  const { getWish, wish, removeProduct } = useContext(WishContext);
  let { addProduct } = useContext(CartContext);

  useEffect(() => {
      setLoading(true);
      getWish();
      setLoading(false); 
  }, []);

  return (
    <>
      <h1 className='p-5 font-semibold text-3xl text-center text-green-500'>My Wishlist</h1>
      {loading ? (
        <div className='flex justify-center py-20'>
          <Loading />
        </div>
      ) : (
        <>
          <hr className='pb-4 w-56 mx-auto' />
          <div className='bg-slate-200 rounded-xl shadow-xl'>
            {wish?.data.map((data) => (
              <React.Fragment key={data.id}>
                <div className="row flex justify-center items-center py-3">
                  <div className='w-1/6'>
                    <img src={data.imageCover} className='p-3' alt={data.title} />
                  </div>
                  <div className='w-4/6 p-5'>
                    <h2 className='py-2'>{data.title}</h2>
                    <p className='py-2'>{data.price} EGP</p>
                    <button onClick={() => removeProduct(data.id)} className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</button>
                    <div className='w-1/6 ms-auto'>
                      <button onClick={() => addProduct(data.id)} className='bg-green-600 px-5 py-2 rounded-md text-white mt-2'>Add to cart</button>
                    </div>
                  </div>
                </div>
                <div className='py-1 w-full rounded-full bg-white'></div>
              </React.Fragment>
            ))}
          </div>
        </>
      )}
    </>
  );
}
