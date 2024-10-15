import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
const validationSchema = Yup.object({
    firstName: Yup.string().required("Zorunlu alan"),
    lastName: Yup.string().required("Zorunlu alan"),
    email: Yup.string().email("Geçersiz e-mail adresi").required("Zorunlu alan"),
    password: Yup.string().required("Zorunlu alan"),
  });
function Register() {
    const { handleSubmit, handleChange, values, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        feedback: "",
      },
      validationSchema,
      onSubmit: (values, { resetForm }) => {
        alert("Mesaj başarıyla gönderildi");
        resetForm(); 
      },
    });
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center text-center p-10">
    <div className="m-2">
      <h2 className="text-2xl font-bold">REGİSTER</h2>
    </div>

    <div className="w-full h-[400px]  ">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 bg-sky-900 p-10 ">
        <div className="flex flex-col">
          <label className="text-white">FirstName *</label>
          <input
            className="border p-2 rounded"
            type="text"
            name="firstName"
            placeholder="Ad"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.firstName}
          />
          {errors.firstName && touched.firstName && (
            <div className="text-red-500 text-sm">{errors.firstName}</div>
          )}
          <label className="text-white">LastName *</label>

          <input
            className="border p-2 rounded"
            type="text"
            name="lastName"
            placeholder="Soyad"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.lastName}
          />
          {errors.lastName && touched.lastName && (
            <div className="text-red-500 text-sm">{errors.lastName}</div>
          )}

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

        <button
          className="bg-green-500 text-white p-2 rounded hover:bg-blue-300"
          type="submit"
        >
         Register
        </button>
      </form>
    </div>
  </div>
  )
}

export default Register
