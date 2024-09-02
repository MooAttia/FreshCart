import React, { useContext, useState } from "react";
import { Formik, useFormik, validateYupSchema } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { data } from "autoprefixer";
import { useNavigate } from "react-router-dom";
import { SignContext } from "../Context/SignContext";
import { CartContext } from "../Context/CartContext";

export default function Checkout() {

  let { checkout } = useContext(CartContext)

  let formik = useFormik({
    initialValues: {
      details: '',
      city: '',
      phone: '',
    },
    onSubmit: checkout
  })




  return (
    <>
      <div className="container w-1/2 bg-gray-200 rounded-lg shadow-xl mt-5 p-8 md:px-0">
        <h1 className="text-3xl text-center pt-6 font-bold text-green-600">Chckout Now</h1>

        <form className="max-w-sm mx-auto py-5" onSubmit={formik.handleSubmit}>
          <div className="mb-5">
            <label htmlFor="details" className="block mb-2 font-medium text-green-700 dark:text-green-500 py-1 text-base">details :</label>
            <input type="text" id="details" name="details" value={formik.values.details} onChange={formik.handleChange} onBlur={formik.handleBlur} className=" border border-green-500 text-green-900 dark:text-gray-600 placeholder-green-700 dark:placeholder-gray-400 text-sm rounded-md focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:border-green-500" placeholder="Enter your details" required />
          </div>
          <div className="mb-5">
            <label htmlFor="city" className="block mb-2 font-medium text-green-700 dark:text-green-500 py-1 text-base">city :</label>
            <input type="text" id="city" name="city" value={formik.values.city} onChange={formik.handleChange} onBlur={formik.handleBlur} className=" border border-green-500 text-green-900 dark:text-gray-600 placeholder-green-700 dark:placeholder-gray-400 text-sm rounded-md focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:border-green-500" placeholder="Enter your city" required />
          </div>
          <div className="mb-5">
            <label htmlFor="phone" className="block mb-2 font-medium text-green-700 dark:text-green-500 py-1 text-base">phone :</label>
            <input type="tel" id="phone" name="phone" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} className=" border border-green-500 text-green-900 dark:text-gray-600 placeholder-green-700 dark:placeholder-gray-400 text-sm rounded-md focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:border-green-500" placeholder="Enter your phone" required />
          </div>

           <button type="submit" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-6 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Chckout</button>
          
        </form>
      </div>
    </>
  );
}
