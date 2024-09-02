import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout.jsx'
import Home from './Components/Home/Home.jsx'
import Cart from './Components/Cart/Cart.jsx'
import Products from './Components/Products/Products.jsx'
import Categories from './Components/Categories/Categories.jsx'
import Brands from './Components/Brands/Brands.jsx'
import Login from './Components/Login/Login.jsx'
import Register from './Components/Register/Register.jsx'
import Notfound from './Components/Notfound/Notfound.jsx'
import Wishlist from './Components/Wishlsit/Wishlist.jsx'
import CounterContextProvider from './Components/Context/CounterContext.jsx'
import SignContextProvider from './Components/Context/SignContext.jsx'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute.jsx'
import ProductDetails from './Components/ProductDetails/ProductDetails.jsx'
import CartContextProvider, { CartContext } from './Components/Context/CartContext.jsx'
import { Toaster } from 'react-hot-toast'
import WishlistContextProvider from './Components/Context/WishlistContext.jsx'
import Checkout from './Components/Checkout/Checkout.jsx'
import Allorders from './Components/Allorders/Allorders.jsx'
import WishContextProvider from './Components/Context/WishlistContext.jsx'
import ForgetPassword from './Components/ForgetPassword/ForgetPassword.jsx'

let routers = createBrowserRouter([
  {
    path: '', element: <Layout />, children: [
      { path: 'home', element: <ProtectedRoute><Home /></ProtectedRoute> },
      { path: 'cart', element: <ProtectedRoute><Cart /></ProtectedRoute> },
      { path: 'products', element: <ProtectedRoute><Products /></ProtectedRoute> },
      { path: 'wishlist', element: <ProtectedRoute><Wishlist /></ProtectedRoute> },
      { path: 'categories', element: <ProtectedRoute><Categories /></ProtectedRoute> },
      { path: 'checkout', element: <ProtectedRoute><Checkout /></ProtectedRoute> },
      { path: 'allorders', element: <ProtectedRoute><Allorders /></ProtectedRoute> },
      { path: 'brands', element: <ProtectedRoute><Brands /></ProtectedRoute> },
      { path: 'productdetails/:id/:category', element: <ProtectedRoute><ProductDetails /></ProtectedRoute> },
      { index: true, element: <Login /> },
      { path: 'forgetpassword', element: <ForgetPassword />},
      { path: 'register', element: <Register /> },
      { path: '*', element: <Notfound /> },
    ]
  }
])

function App() {

  return (
    <WishContextProvider>
    <CartContextProvider>
      <SignContextProvider>
        <RouterProvider router={routers}></RouterProvider>
        <Toaster />
        </SignContextProvider>
    </CartContextProvider>
    </WishContextProvider>




  )
}

export default App
