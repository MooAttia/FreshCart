import { createContext, useEffect, useState } from "react";
import React from 'react';   
import axios from "axios";
import toast from 'react-hot-toast'; 

export let CartContext = createContext();

export default function CartContextProvider({ children }) {
  let headers = {
    token: localStorage.getItem('userToken')
  };

  const [cart, setCart] = useState(null);

  async function checkout(shippingAddress) {
    try {
      let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cart.data._id}?url=http://localhost:5173`, {
        shippingAddress
      }, {
        headers
      });
      // console.log(data);
      window.location.href = data.session.url
    } catch (err) {
      console.log(err);
    }
  }
  async function addProduct(productId) {
    try {
      let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/cart`, {
        productId
      }, {
        headers
      });
      setCart(data);  
      // console.log(data);
      toast.success(data.message);  
    } catch (err) {
      console.log(err);
      toast.error('Failed to add product!');  
    }
  }
  async function removeProduct(productId) {
    try {
      let { data } = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
        headers
      });
      setCart(data);  
      // console.log(data);
    } catch (err) {
      console.log(err);
    }
  }
  async function clearCart() {
    try {
      let { data } = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`, {
        headers
      });
      setCart(null);  
      // console.log(data);
    } catch (err) {
      console.log(err);
    }
  }
  async function updateProductCount(productId , count) {
    if(count > 0 ){
        try {
            let { data } = await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
              count
            }, {
              headers
            });
            setCart(data);  
            // console.log(data);
          } catch (err) {
            console.log(err);
          }
    }else{
        removeProduct(productId)
    }
  
  }

  async function getCart() {
    try {
      let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/cart`,  {
        headers
      });
      setCart(data); 
      // console.log(data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(()=> {
    getCart();
  } , [])
  return (
    <CartContext.Provider value={{ addProduct, getCart, cart, setCart , updateProductCount , removeProduct, checkout , clearCart }}>
      {children}
    </CartContext.Provider>
  );
}
