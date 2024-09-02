import React, { useContext, useState } from 'react'
import style from './Navbar.module.css'
import logo from '../../assets/images/freshcart-logo.svg'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { SignContext } from '../Context/SignContext'
import { CartContext } from '../Context/CartContext'


export default function Navbar() {
  let { signData , setSignData } = useContext(SignContext)
  let {cart} = useContext(CartContext);
  const [menu, setMenu] = useState(true);
let navigate = useNavigate()
  function toggleMenu() {
    setMenu(!menu)
  }
  function logOut(){
    localStorage.removeItem('userToken');
    setSignData(null);
    navigate('/');
  }

  return <>

    <nav className='bg-gray-200  md:fixed top-0 inset-x-0 py-4 text-center capitalize shadow-md z-50'>
      <div className="container flex flex-col md:flex-row justify-between items-center text-gray-500">
        <div className=' flex-col md:flex-row space-x-6 hidden md:flex'>
          <Link to={'/home'}><img src={logo} width={120} alt="" /></Link>
          {signData ? <ul className='flex flex-col md:flex-row space-x-2 font-bold'>
            <li className=' hover:text-slate-700'><NavLink to="home">Home</NavLink></li>
            <li className=' hover:text-slate-700'><NavLink to="cart">Cart</NavLink></li>
            <li className=' hover:text-slate-700'><NavLink to="wishlist">Wishlist</NavLink></li>
            <li className=' hover:text-slate-700'><NavLink to="products">Products</NavLink></li>
            <li className=' hover:text-slate-700'><NavLink to="categories">Categories</NavLink></li>
            <li className=' hover:text-slate-700' ><NavLink to="brands">Brands</NavLink></li>
            <li className=' hover:text-slate-700 cursor-pointer relative text-green-500'><Link to="cart"><i className="fa-solid fa-cart-shopping fa-xl"></i></Link> <span className='text-white absolute left-1/2 bottom-1/4'>{cart? cart.numOfCartItems : 0}</span></li>
          </ul> : null}
        </div>
        <div className='hidden md:block'>
          <ul className='flex flex-col md:flex-row space-x-2 font-bold'>
            <li className='space-x-2 text-black'>
              <i className='fab cursor-pointer fa-facebook-f hover:text-white hover:bg-blue-700 hover:rounded-full p-2'></i>
              <i className='fab cursor-pointer fa-linkedin-in  hover:text-white hover:bg-blue-700 hover:rounded-full p-2'></i>
              <i className='fab cursor-pointer fa-youtube  hover:text-red-600 hover:bg-white hover:rounded-full p-2'></i>
              <i className='fab cursor-pointer fa-x-twitter  hover:text-white hover:bg-black hover:rounded-full p-2'></i>
              <i className='fab cursor-pointer fa-instagram  hover:text-white hover:bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:rounded-full p-2'></i>
            </li>
            {signData ? <li className='cursor-pointer' onClick={()=> logOut()}>logout</li> : <><li className=' hover:text-slate-700'><NavLink to="register">Register</NavLink></li>
              <li className=' hover:text-slate-700'><NavLink to="">Login</NavLink></li></>
            }
          </ul>
        </div>

        <div className=' flex flex-col md:hidden w-full'>
          <div className='flex flex-wrap justify-between items-center'>
            <div className=' w-3/6'>
              <img className='p-3' src={logo} width={150} alt="" />
            </div>
            <div className='  w-3/6 flex justify-end'>
              <button onClick={toggleMenu} className=' md:hidden border-2 p-3 border-slate-500 rounded-md hover:text-white hover:bg-slate-500'><i className="fa-solid fa-bars fa-xl"></i></button>
            </div>
          </div>
          <div className={`flex-col space-x-6 ${menu ? 'hidden' : 'block'}`}>
           {signData ?  <ul className='flex flex-col space-x-2 font-bold '>
              <li className='py-1 hover:text-slate-700'><NavLink to="home">Home</NavLink></li>
              <li className='py-1 hover:text-slate-700'><NavLink to="cart">Cart</NavLink></li>
              <li className='py-1 hover:text-slate-700'><NavLink to="wishlist">Wishlist</NavLink></li>
              <li className='py-1 hover:text-slate-700'><NavLink to="products">Products</NavLink></li>
              <li className='py-1 hover:text-slate-700'><NavLink to="categories">Categories</NavLink></li>
              <li className='py-1 hover:text-slate-700'><NavLink to="brands">Brands</NavLink></li>
              <li className='space-x-2 text-black py-1'>
                <i className='fab cursor-pointer fa-facebook-f hover:text-white hover:bg-blue-700 hover:rounded-full p-2'></i>
                <i className='fab cursor-pointer fa-linkedin-in  hover:text-white hover:bg-blue-700 hover:rounded-full p-2'></i>
                <i className='fab cursor-pointer fa-youtube  hover:text-red-600 hover:bg-white hover:rounded-full p-2'></i>
                <i className='fab cursor-pointer fa-x-twitter  hover:text-white hover:bg-black hover:rounded-full p-2'></i>
                <i className='fab cursor-pointer fa-instagram  hover:text-white hover:bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:rounded-full p-2'></i>
              </li>
              <li className='py-1 hover:text-slate-600 cursor-pointer'><i className="fa-solid fa-cart-shopping fa-xl "></i></li>
              <li className='py-1 cursor-pointer'onClick={()=> logOut()}>logout</li>
            </ul>: null}
          </div>
        </div>





      </div>

    </nav>


  </>
}
