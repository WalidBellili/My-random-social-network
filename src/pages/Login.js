import Input from "../components/Input";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useContext } from "react";
import { usersContext } from "../contexts/Users";

const Login = () => {
  const { user, setUser } = useContext(usersContext);
  //   console.log(user);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required("le champs doit etre un email"),
      password: Yup.string().matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-])/,
        "Password doit contenir au moins 1 maj, 1 min, 1 nombre, 1 char spécial"
      ),
    }),
    onSubmit: async (values) => {
      const request = await fetch(`https://randomuser.me/api/`);
      const response = await request.json();
      console.log(response.results);
      setUser(response.results);
    },
  });
  //   console.log(user);

  return (
    <form onSubmit={formik.handleSubmit}>
      <Input
        type="text"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      <Input
        type="text"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
      />
      <button type="submit">valider</button>
    </form>
  );
};

export default Login;
