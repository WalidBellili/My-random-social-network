import React from "react";
import Input from "../components/Input";
import * as Yup from "yup";
import { useFormik } from "formik";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required("le champs doit etre un email"),
      password: Yup.string().matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-])/,
        "Votre mot de passe doit contenir un maj, une min, un chiffre, un caractere  "
      ),
    }),
    onSubmit: async (values) => {
      const request = await fetch(`https://randomuser.me/api/`);
      const response = await request.json();
      console.log(response.results);
    },
  });
  console.log(formik.errors);

  return (
    <form onSubmit={formik.handleSubmit}>
      <Input
        type="email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      <Input
        type="password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
      />
      <button type="submit">valider</button>
    </form>
  );
};

export default Login;
