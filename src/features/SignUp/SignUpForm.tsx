import React from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
// import * as yup from "yup";
import { string } from "yup";

import TextField from "../../shared/TextField";
import { ReactComponent as Mail } from "../../assets/icons/mail.svg";
import { ReactComponent as Lock } from "../../assets/icons/lock.svg";
import Button from "../../shared/Button";
interface Errors {
  [key: string]: string;
}

interface Values {
  name: string;
  email: string;
  password: string;
  country: string;
  gender: string;
  terms: boolean;
}

const SignUpForm = () => {
  const initialValues: Values = {
    name: "",
    email: "",
    password: "",
    country: "",
    gender: "",
    terms: false,
  };

  const nameReg = /^[a-z]+$/i;
  const validationSchema = yup.object({
    name: string().matches(nameReg, "Name is not valid").required("Required"),
    email: string().email("Invalid email address").required("Required"),
    password: string().required("Required"),
  });

  const onSubmit = (
    values: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field
              type="text"
              name="name"
              placeholder="Enter your name"
              autocomplete="off"
              component={TextField}
            />
            <ErrorMessage name="name" component="div" />

            <Field
              type="email"
              name="email"
              placeholder="Email"
              autocomplete="off"
              component={TextField}
              startIcon={<Mail />}
            />
            <ErrorMessage name="email" component="div" />

            <Field
              type="password"
              name="password"
              placeholder="Password"
              autocomplete="off"
              component={TextField}
              startIcon={<Lock />}
            />
            <ErrorMessage name="password" component="div" />

            <Field
              type="text"
              name="country"
              placeholder="Country"
              autocomplete="off"
              component={TextField}
            />
            <ErrorMessage name="country" component="div" />

            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUpForm;
