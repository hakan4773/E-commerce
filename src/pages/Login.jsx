import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
function Login() {
    const { handleSubmit, handleChange, values, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
    //   validationSchema,
      onSubmit: (values) => {
     
      },
    });
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center text-center p-10 ">
      <div className="m-2">
        <h2 className="text-2xl font-bold ">LOGİN</h2>
      </div>
      <div className="w-full h-[300px]  p-10 bg-sky-900 border rounded-md ">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div className="flex flex-col">
          
            <label className="text-white">E-mail *</label>

            <input
              className="border p-2 rounded"
              type="email"
              name="email"
              placeholder="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && (
              <div className="text-red-500 text-sm">{errors.email}</div>
            )}

            <label className="text-white">Password *</label>

            <input
              className="border p-2 rounded "
              type="text"
              name="password"
              placeholder="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && (
              <div className="text-red-500 text-sm">{errors.password}</div>
            )}
          </div>

          <a href="/"
            className="bg-green-500 text-white p-2 rounded hover:bg-blue-300"
            type="submit"
          >
           Login
          </a>
        </form>
      </div>
    </div>
  )
}

export default Login 
