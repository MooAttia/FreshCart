import React, { useEffect, useState } from 'react'
import style from './Categories.module.css'
import Loading from '../Loading/Loading';
import axios from 'axios';

export default function Categories() { 
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getProducts() {
    try {
      let { data } = await axios("https://ecommerce.routemisr.com/api/v1/products");
      setProducts(data.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  const uniqueBrands = products.reduce((x, product) => {
    if (!x.some(item => item.category.name === product.category.name)) {
      x.push(product);
    }
    return x;
  }, []);

  return <>
    {loading ? (
      <div className='flex justify-center py-20'>
        <Loading />
      </div>
    ) : (
      <>
        <div className="container">
          <h1 className="text-4xl text-green-500 text-center py-8 font-semibold">All Categories</h1>
          <hr className='pb-4 w-56 mx-auto'/>
          <div className="flex justify-center items-center mt-5">
            {uniqueBrands.map((product, index) => (
              <div key={index} className='w-1/4 me-10 p-4 border-2 hover:border hover:border-green-600 hover:rounded-xl hover:shadow-lg hover:shadow-green-600  ease-in-out duration-200'>
                <img src={product.category.image} alt={product.category.name} className='w-[150px] mx-auto h-auto' />
                <hr />
                <p className='text-center text-2xl font-semibold text-green-500'>{product.category.name}</p>
              </div>
            ))}
          </div>
        </div>
      </>
    )}
  </>
}
