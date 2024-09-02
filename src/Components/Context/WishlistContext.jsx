import { createContext, useEffect, useState } from "react";
import React from 'react';   
import axios from "axios";
import toast from 'react-hot-toast'; 

export let WishContext = createContext();

export default function WishContextProvider({ children }) {
  let headers = {
    token: localStorage.getItem('userToken')
  };

  const [wish, setWish] = useState(null);

  async function addProductToWishlist(productId) {
    try {
      let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
        productId
      }, {
        headers
      });
      setWish(data);  
      console.log(data);
      toast.success(data.message);  
    } catch (err) {
      console.log(err);
      toast.error('Failed to add product!');  
    }
  }
  async function getWish() {
    try {
      let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/wishlist`,  {
        headers
      });
      setWish(data); 
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }
  async function removeProduct(productId) {
    try {
      let { data } = await axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`, {
        headers
      });
      setWish(data);  
      // console.log(data);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <WishContext.Provider value={{ addProductToWishlist , getWish , wish , setWish , removeProduct}}>
      {children}
    </WishContext.Provider>
  );
}
