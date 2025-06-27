import React from "react";
import "./LoginForm.css";
import { useDispatch } from "react-redux";
import { login } from "../../slices/UsuarioSlice";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  nombre: Yup.string().required("El nombre es obligatorio"),
  email: Yup.string()
    .email("Debe tener formato email")
    .required("El email es obligatorio"),
  password: Yup.string().required("El password es obligatorio"),
});

export default function LoginForm() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: { nombre: "", email: "", password: "" },
    validationSchema: validationSchema,
    onSubmit: async (formulario) => {
      try {
        // console.log(formulario)
        if (formulario.nombre === formulario.password) {
          dispatch(login(formulario));
        }
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="form">
      <div className="form__campos">
        <div className="form__campo">
          <label className="form__label" htmlFor="nombre">
            Nombre
          </label>
          <input
            className="form__input"
            id="nombre"
            name="nombre"
            value={formik.values.nombre}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Nombre"
          ></input>
          {formik.errors.nombre && formik.touched.nombre ? (
            <div className="form__errores">{formik.errors.nombre}</div>
          ) : null}
        </div>
        <div className="form__campo">
          <label className="form__label" htmlFor="email">
            Email
          </label>
          <input
            className="form__input"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Correo"
            type="email"
          ></input>
          {formik.errors.email && formik.touched.email ? (
            <div className="form__errores">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="form__campo">
          <label className="form__label" htmlFor="password">
            Password
          </label>
          <input
            className="form__input"
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Contraseña"
            type="password"
          ></input>
          {formik.errors.password && formik.touched.password ? (
            <div className="form__errores">{formik.errors.password}</div>
          ) : null}
        </div>
      </div>
      <button type="submit" className="form__button">Ingresar</button>
    </form>
  );
}
