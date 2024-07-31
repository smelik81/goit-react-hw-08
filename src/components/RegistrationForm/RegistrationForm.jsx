import { Field, Formik, Form } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "./RegistrationForm.module.css";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const validationInputSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .required("Required")
    .min(6, "Name must be at least 2 characters long")
    .max(50, "Name must be less than 50 characters long")
    .matches(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),
  email: Yup.string().email("Invalid email address").required("Required"),
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
  confirmPassword: Yup.string()
    .trim()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password"),
});

const RegistrationForm = () => {
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();
  const confirmPasswordId = useId();

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div>
      <h2>Registration on Your App</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationInputSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form>
            <div>
              <label htmlFor={nameId}>Name: </label>
              <Field type="text" name="name" id={nameId} autoComplete="name" />
              {touched.name && errors.name ? (
                <div className={`${css.message} ${css.error}`}>
                  {errors.name}
                </div>
              ) : (
                touched.name && (
                  <div className={`${css.message} ${css.required}`}>
                    Required
                  </div>
                )
              )}
            </div>
            <div>
              <label htmlFor={emailId}>Email: </label>
              <Field
                type="email"
                name="email"
                id={emailId}
                autoComplete="email"
              />
              {touched.email && errors.email ? (
                <div className={`${css.message} ${css.error}`}>
                  {errors.email}
                </div>
              ) : (
                touched.email && (
                  <div className={`${css.message} ${css.required}`}>
                    Required
                  </div>
                )
              )}
            </div>
            <div>
              <label htmlFor={passwordId}>Password: </label>
              <Field
                type="password"
                name="password"
                id={passwordId}
                autoComplete="password"
              />
              {touched.password && errors.password ? (
                <div className={`${css.message} ${css.error}`}>
                  {errors.password}
                </div>
              ) : (
                touched.password && (
                  <div className={`${css.message} ${css.required}`}>
                    Required
                  </div>
                )
              )}
            </div>
            <div>
              <label htmlFor={confirmPasswordId}>Confirm Password: </label>
              <Field
                type="password"
                name="confirmPassword"
                id={confirmPasswordId}
                autoComplete="new-password"
              />
              {touched.confirmPassword && errors.confirmPassword ? (
                <div className={`${css.message} ${css.error}`}>
                  {errors.confirmPassword}
                </div>
              ) : (
                touched.confirmPassword && (
                  <div className={`${css.message} ${css.required}`}>
                    Required
                  </div>
                )
              )}
            </div>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submiting..." : "Submit"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
