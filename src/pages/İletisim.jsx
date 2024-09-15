import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
const validationSchema = Yup.object({
  firstName: Yup.string().required("Zorunlu alan"),
  lastName: Yup.string().required("Zorunlu alan"),
  email: Yup.string().email("Geçersiz e-mail adresi").required("Zorunlu alan"),
  feedback: Yup.string().required("Zorunlu alan"),
});

function İletisim() {
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
        resetForm(); // Formu temizlemek için kullanılır
      },
    });

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center text-center bg-gray-300">
      <div className="m-2">
        <h2 className="text-2xl font-bold">Contact Form</h2>
      </div>

      <div className="sm:w-auto h-[500px] bg-blue-400 p-5">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div className="flex flex-col">
            <label>FirstName *</label>
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
            <label>LastName *</label>

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

            <label>E-mail *</label>

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

            <label>Add feedback *</label>

            <input
              className="border p-2 rounded h-[100px]"
              type="text"
              name="feedback"
              placeholder="feedback"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.feedback}
            />
            {errors.feedback && touched.feedback && (
              <div className="text-red-500 text-sm">{errors.feedback}</div>
            )}
          </div>

          <button
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-300"
            type="submit"
          >
            Gönder{" "}
          </button>
        </form>
      </div>
    </div>
  );
}

export default İletisim;
