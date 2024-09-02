import React, { useContext, useState } from "react";
import style from "./Login.module.css";
import { Formik, useFormik, validateYupSchema } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { data } from "autoprefixer";
import { Link, useNavigate } from "react-router-dom";
import { SignContext } from "../Context/SignContext";

export default function Login() {
 const [errorMsg ,  setErrorMsg] = useState(null)  ;
 const [createMsg ,  setCreateMsg] = useState(null) ; 
 const [loading, setLoading] = useState(false);

 let {setSignData} = useContext(SignContext);

 let navigate = useNavigate();
  async function submit(values) {
    try{
      setLoading(true);
      let {data} =await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin", values)

      localStorage.setItem('userToken' , data.token);
      navigate('/home');
      setCreateMsg(data.message);
      setSignData(data.token);
    }
    catch(err){
      setErrorMsg(err.response.data.message );
      setLoading(false);
    }
  }

  let validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/gm , "Your password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character (e.g., #, ?, !, @, $).").required('Password is required'),
  })

  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: '',
      phone: '',
    },
    validationSchema,
    onSubmit: submit,
  })




  return (
    <>
      <div className="container w-1/2 bg-gray-200 rounded-lg shadow-xl mt-5 p-8 md:px-0">
        <h1 className="text-3xl text-center pt-6 font-bold text-green-600">Login Now</h1>

        <form className="max-w-sm mx-auto py-5" onSubmit={formik.handleSubmit}>
        {errorMsg ? (<div className="p-2 m-4 text-sm  text-red-800 rounded-lg bg-blue-50 dark:bg-red-100 dark:text-red-400" role="alert">
              <span className="font-medium">{errorMsg}</span> 
            </div>) : null }
          <div className="mb-5">
            <label htmlFor="email" className="block mb-2 font-medium text-green-700 dark:text-green-500 py-1 text-base">Email :</label>
            <input type="email" id="email" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} className=" border border-green-500 text-green-900 dark:text-gray-600 placeholder-green-700 dark:placeholder-gray-400 text-sm rounded-md focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:border-green-500" placeholder="Enter your email" required />
            {formik.errors.email && formik.touched.email ? (<div className="p-2 m-4 text-sm  text-red-800 rounded-lg bg-blue-50 dark:bg-red-100 dark:text-red-400" role="alert">
              <span className="font-medium">{formik.errors.email}</span> 
            </div>) : null}          </div>
          <div className="mb-5">
            <label htmlFor="password" className="block mb-2 font-medium text-green-700 dark:text-green-500 py-1 text-base">Password :</label>
            <input type="password" id="password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} className=" border border-green-500 text-green-900 dark:text-gray-600 placeholder-green-700 dark:placeholder-gray-400 text-sm rounded-md focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:border-green-500" placeholder="Enter your password" required />
            {formik.errors.password && formik.touched.password ? (<div className="p-2 m-4 text-sm  text-red-800 rounded-lg bg-blue-50 dark:bg-red-100 dark:text-red-400" role="alert">
              <span className="font-medium">{formik.errors.password}</span> 
            </div>) : null}          </div>
          
          { loading ? <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-6 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"><i className="fa-solid fa-spinner fa-spin"></i></button> 
                   : <button type="submit" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-6 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Login</button> 
 }        <Link to="/forgetpassword" className="ms-5 text-green-500">Forget Password?</Link>

        </form>
      </div>
    </>
  );
}
