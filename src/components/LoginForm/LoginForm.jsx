import { Field, Formik, Form, ErrorMessage } from "formik";
import { toast } from "react-hot-toast";
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

  const handleSubmit = async (values, action) => {
    try {
      await dispatch(logIn(values)).unwrap();
      action.resetForm();
    } catch (error) {
      toast.error("Login failed. Please check your email and password.");
      action.resetForm();
    } finally {
      action.setSubmitting(false);
    }
  };

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Login in App</h2>
      <Formik
        initialValues={initialValues}
        validationInputSchema={validationInputSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, isValid, dirty }) => (
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
                <ErrorMessage
                  name="email"
                  component="span"
                  className={css.errorMessage}
                />
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
                <ErrorMessage
                  name="password"
                  component="span"
                  className={css.errorMessage}
                />
              </div>
              <button
                type="submit"
                className={css.btn}
                disabled={isSubmitting || !isValid || !dirty}
              >
                {isSubmitting ? "Loading ..." : "Log in"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
