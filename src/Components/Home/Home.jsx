import React, { useContext, useEffect, useState } from 'react'
import style from './Home.module.css'
import { counterContext } from '../Context/CounterContext'
import axios from 'axios'
import RecentProducts from '../RecentProducts/RecentProducts';
import Loading from '../Loading/Loading';
import CategorySlider from '../CategorySlider/CategorySlider';
import MainSlider from '../MainSlider/MainSlider';
import Brands from '../Brands/Brands';
import { CartContext } from '../Context/CartContext';
import Products from '../Products/Products';
import { WishContext } from '../Context/WishlistContext';


export default function Home() {
  let {addProductToWishlist , wish} = useContext(WishContext);
   const [products, setProducts] = useState([]);
    let {addProduct} = useContext(CartContext );

  async function getProducts() {
    try {
      let { data } = await axios("https://ecommerce.routemisr.com/api/v1/products");
      // console.log(data.data)
      setProducts(data.data)
    }
    catch(err){
      console.log(err)
    }
}
  useEffect(() => {
    getProducts();
  }, [])

  return <>
    <MainSlider/>
    <div className='py-5'>
      <CategorySlider/>
    </div>

    <h1 className="text-3xl text-green-500 text-center py-5">Recent Products</h1>
    <hr className='pb-4 w-56 mx-auto my-2 ' />
    {products.length? <div className="flex flex-wrap">
      {products.map((product , index)=> <RecentProducts key={index} product={product} addProduct={addProduct} addProductToWishlist = {addProductToWishlist}  wish={wish}/>)}  
    </div>
    : <div className= 'flex justify-center py-20'>
      <Loading/>
      </div>}
  

    

  </>
  
}
