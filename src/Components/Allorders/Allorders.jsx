import React, { useContext, useEffect } from 'react'
import { CartContext } from '../Context/CartContext'

export default function Allorders() {
    let {clearCart} = useContext(CartContext)

    useEffect(()=> {
        clearCart();
    },[])
  return (
    <h2 className='text-center text-2xl '>Cart is Empty</h2>
  )
}
