import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../Loading/Loading';

export default function Brands() {
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
    if (!x.some(item => item.brand.name === product.brand.name)) {
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
        <div className="container mb-5">
          <h1 className="text-4xl text-green-500 text-center py-8 font-semibold">All Brands</h1>
          <hr className='pb-4 w-56 mx-auto'/>
          <div className="flex flex-wrap ">
            {uniqueBrands.map((product, index) => (
              <div key={index} className='w-1/4 p-4 hover:border hover:border-green-600 hover:rounded-xl hover:shadow-lg hover:shadow-green-600  ease-in-out duration-200'>
                <img src={product.brand.image} alt={product.brand.name} className='w-full h-auto' />
                <p className='text-center'>{product.brand.name}</p>
              </div>
            ))}
          </div>
        </div>
      </>
    )}
  </>

}
