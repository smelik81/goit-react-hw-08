import { Field, Formik, Form, ErrorMessage } from "formik";
import { useId } from "react";
/* import { useDispatch } from "react-redux"; */
import * as Yup from "yup";

const initialValues = {
  email: "",
  password: "",
};

const validationInputSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email("Invalid email address")
    .required("Required"),
  password: Yup.string()
    .trim()
    .required("Required")
    .min(8, "Password must be at least 8 characters long")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[@$!%*?&#]/,
      "Password must contain at least one special character"
    ),
});

const LoginForm = () => {
  const emeilId = useId();
  const passwordId = useId();
  /*  const dispatch = useDispatch(); */

  /* const handleSubmit = (values, action) => {
    dispatch(logIn(values));
    action.resetForm();
  }; */

  const handleSubmit = () => {};

  return (
    <div>
      <h2>Login in App</h2>
      <Formik
        initialValues={initialValues}
        validationInputSchema={validationInputSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor={emeilId}>Email: </label>
            <Field
              type="email"
              name="email"
              id={emeilId}
              autoComplete="email"
            />
            <ErrorMessage name="email" component="span" />
          </div>
          <div>
            <label htmlFor={passwordId}>Password: </label>
            <Field
              type="password"
              name="password"
              id={passwordId}
              autoComplete="password"
            />
            <ErrorMessage name="password" component="span" />
          </div>
          <button type="submit">Log in</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
