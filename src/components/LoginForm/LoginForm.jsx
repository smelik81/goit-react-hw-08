import { Field, Formik, Form, ErrorMessage } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";

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
  const dispatch = useDispatch();

  const handleSubmit = (values, action) => {
    dispatch(logIn(values));
    action.setSubmitting(false);
    action.resetForm();
  };

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Login in App</h2>
      <Formik
        initialValues={initialValues}
        validationInputSchema={validationInputSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <div className={css.inputForm}>
              <label htmlFor={emeilId}>Email: </label>
              <Field
                type="email"
                name="email"
                id={emeilId}
                autoComplete="email"
                className={css.input}
              />
              <ErrorMessage name="email" component="span" />
            </div>
            <div className={css.inputForm}>
              <label htmlFor={passwordId}>Password: </label>
              <Field
                type="password"
                name="password"
                id={passwordId}
                autoComplete="password"
                className={css.input}
              />
              <ErrorMessage name="password" component="span" />
            </div>
            <button type="submit" className={css.btn}>
              Log in
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
